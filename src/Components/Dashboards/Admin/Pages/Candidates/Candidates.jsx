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
      name: "John Doe",
      phone: "+91 9876543210",
      email: "johndoe@gmail.com",
      education: "Any Graduate",
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile:
        "https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "+91 9061731669",
      email: "janedoe@gmail.com",
      education: "Any Graduate",
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile:
        "https://img.freepik.com/premium-photo/portrait-young-successful-indian-woman-worker-employee-stand-isolated-grey-studio-background-feel-confident-millennial-mixed-race-female-intern-show-motivation-employment-hr-concept_656932-3758.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid",
    },
  ];

  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleFilterClick = () => setShowFilterDropdown(!showFilterDropdown);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCandidates = allCandidates.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(allCandidates.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="m-4 flex gap-2 justify-end">
        <UIButton>
          <FileOpenIcon className="mr-2" />
          Import Candidates
        </UIButton>
        <UIButton>
          <FileOpenIcon className="mr-2" />
          Export Candidates
        </UIButton>
      </div>
      <div className="card bg-white shadow-md rounded-md m-4">
        <div className="card-body">
          <div className="flex justify-between">
            <label className="input input-bordered bg-gray-200 flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <SearchIcon className="text-gray-400" />
            </label>
            <Filter
              showFilterDropdown={showFilterDropdown}
              onFilterClick={handleFilterClick}
            />
          </div>
          <CandidateTable
            candidates={currentCandidates}
            indexOfFirstItem={indexOfFirstItem}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalRecords={allCandidates.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
