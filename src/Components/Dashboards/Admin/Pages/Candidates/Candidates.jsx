import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "./Filter";
import CandidateTable from "./CandidateTable";

const Candidates = () => {
  const allCandidates = [
    {
      id: 1,
      name: "Ghamesh",
      phone: "+91 9876543210",
      email: "johndoe@gmail.com",
      education: "Any Graduate",
      experience: "Experienced",
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile:
        "https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Manish",
      phone: "+91 9876543210",
      email: "johndoe@gmail.com",
      education: "Any Graduate",
      experience: "Freshers",
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile:
        "https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Kapil",
      phone: "+91 9876543210",
      email: "johndoe@gmail.com",
      education: "Any Graduate",
      experience: "2 Year Exp",
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile:
        "https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid",
    },
  ];

  // State
  const [candidates, setCandidates] = useState(allCandidates);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter Dropdown Handler
  const handleFilterClick = () => setShowFilterDropdown(!showFilterDropdown);

  //function to delete candidate
  const handleDelete = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  //Paginations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCandidates = candidates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(currentCandidates.length / itemsPerPage);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="p-4">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 justify-between sm:justify-end items-center mb-4">
        <UIButton className="flex-grow sm:flex-grow-0">
          <FileOpenIcon className="mr-2" />
          Import Candidates
        </UIButton>
        <UIButton className="flex-grow sm:flex-grow-0">
          <FileOpenIcon className="mr-2" />
          Export Candidates
        </UIButton>
      </div>

      {/* Search and Filter Section */}
      <div className="card bg-white shadow-md rounded-md p-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Search Bar */}
          <label className="input input-bordered bg-gray-200 flex items-center gap-2 rounded-md">
            <input
              type="text"
              className="grow p-2 rounded-md text-sm outline-none"
              placeholder="Search"
            />
            <SearchIcon className="text-gray-400" />
          </label>

          {/* Filter */}
          <Filter
            showFilterDropdown={showFilterDropdown}
            onFilterClick={handleFilterClick}
          />
        </div>

        {/* Candidate Table */}
        <CandidateTable
          candidates={currentCandidates}
          indexOfFirstItem={indexOfFirstItem}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalRecords={allCandidates.length}
          itemsPerPage={itemsPerPage}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Candidates;
