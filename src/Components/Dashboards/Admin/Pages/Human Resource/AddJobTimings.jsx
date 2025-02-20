import React, { useState } from "react";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";
import SearchBar from "../../../../../Common/SearchBar";
import { Edit, Delete, Cancel } from "@mui/icons-material";

function JobTiming() {
  const [timings, setTimings] = useState([]);
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [sort, setSort] = useState("");
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const isValidTitle = title.trim().length >= 3;
  const isValidHours = hours.trim().length >= 1;
  const isValidSort = !isNaN(sort) && Number(sort) > 0;
  const isValidForm = isValidTitle && isValidHours && isValidSort;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm) return alert("Please fill all fields correctly!");

    if (
      timings.some((item) => item.title.toLowerCase() === title.toLowerCase())
    ) {
      return alert("Job timing already exists!");
    }

    const newTiming = {
      id: editId || timings.length + 1,
      title,
      hours,
      sort: Number(sort),
    };

    if (editId) {
      setTimings(
        timings.map((item) => (item.id === editId ? newTiming : item))
      );
      setEditId(null);
    } else {
      setTimings([...timings, newTiming].sort((a, b) => a.sort - b.sort));
    }

    setTitle("");
    setHours("");
    setSort("");
  };

  const handleEdit = (id) => {
    const editTiming = timings.find((item) => item.id === id);
    setTitle(editTiming.title);
    setHours(editTiming.hours);
    setSort(editTiming.sort);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTimings(timings.filter((item) => item.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = timings.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(timings.length / recordsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <div className="card bg-white md:w-1/2 w-full shadow-md rounded-md p-4">
        <h1 className="card-title mb-4">
          {editId ? "Edit Job Timing" : "Create Job Timing"}
        </h1>
        <form className="form-control" onSubmit={handleSubmit}>
          <InputField
            label="Job Timing Title"
            placeholder="Enter job timing"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <InputField
            label="Hours"
            placeholder="Enter number of hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
          <InputField
            label="Sort Order"
            placeholder="Enter sort order"
            type="number"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            required
          />
          <div className="flex justify-end mt-4">
            <UIButton type="submit" disabled={!isValidForm}>
              {editId ? "Update" : "Submit"}
            </UIButton>
          </div>
        </form>
      </div>

      <div className="card bg-white w-full shadow-md rounded-md p-4">
        <div className="flex justify-between flex-wrap gap-2 mb-4">
          <SearchBar />
        </div>
        <div className="overflow-x-auto">
          {timings.length === 0 ? (
            <p className="text-center text-gray-500">
              No job timing added yet.
            </p>
          ) : (
            <table className="table w-full text-sm md:text-base">
              <thead>
                <tr>
                  <th>Sort</th>
                  <th>Job Timing</th>
                  <th>Hours</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td>{item.sort}</td>
                    <td>{item.title}</td>
                    <td>{item.hours} hrs</td>
                    <td className="flex gap-2">
                      {editId === item.id ? (
                        <button
                          className="btn p-2 text-green-500"
                          onClick={() => setEditId(null)}
                        >
                          <Cancel />
                        </button>
                      ) : (
                        <>
                          <button
                            className="btn p-2 text-yellow-500"
                            onClick={() => handleEdit(item.id)}
                          >
                            <Edit />
                          </button>
                          <button
                            className="btn p-2 text-red-500"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Delete />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {timings.length < recordsPerPage && (
          <div className="flex justify-between items-center mt-4 text-sm">
            <span>
              Showing {indexOfFirstRecord + 1}-
              {Math.min(indexOfLastRecord, timings.length)} of {timings.length}{" "}
              records
            </span>
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-ghost"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`btn ${
                      pageNumber === currentPage
                        ? "bg-lime-400 text-white"
                        : "btn-outline"
                    } mx-1`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-ghost"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobTiming;
