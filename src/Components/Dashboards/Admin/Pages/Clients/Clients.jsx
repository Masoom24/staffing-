import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import SearchBar from "../../../../../Common/SearchBar";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ClientData from "./ClientData";

const Clients = () => {
  const companies = [
    {
      id: 1,
      company: "Sundaram Multi-Paper Ltd",
      companyAddress: "Chhatrapati Square, Nagpur",
      companyOffice: "Manish Nagar, Nagpur",
      email: "sales@sundaramgroups.in",
      phone: "+91-98765-43210",
      autherisedPerson: {
        name: "John Doe",
        position: "Recruiter",
        phone: "+91-98765-43210",
        email: "johndoe@gmail.com",
      },
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile: "https://img.freepik.com/premium-vector/mobile_784842-1951.jpg",
    },
    {
      id: 2,
      company: "Nextwave MultiTech",
      companyAddress: "Chhatrapati Square, Nagpur",
      companyOffice: "Manish Nagar, Nagpur",
      email: "multitech@nextwave.in",
      phone: "+91-98765-43210",
      autherisedPerson: {
        name: "John Doe",
        position: "Recruiter",
        phone: "+91-98765-43210",
        email: "johndoe@gmail.com",
      },
      created: "Feb 10, 2025 02:43 PM",
      status: true,
      profile: "https://img.freepik.com/premium-vector/mobile_784842-1951.jpg",
    },
  ];

  const [client, setClient] = useState(companies);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompany = client.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(client.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  //function to delete candidate
  const handleDelete = (id) => {
    setClient(client.filter((company) => company.id !== id));
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-wrap gap-2  justify-start sm:justify-end mb-4">
        <UIButton >
          <FileOpenIcon className="mr-2" />
          Export Clients
        </UIButton>
      </div>

      {/* Search and Data Section */}
      <div className="bg-white shadow-md rounded-md p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <SearchBar
            placeholder="Search items..."
            className="w-full sm:max-w-sm"
            inputClassName="text-gray-800"
            iconClassName="text-gray-500"
          />
        </div>

        {/* Client Data Table */}
        <ClientData
          currentCompany={currentCompany}
          indexOfFirstItem={indexOfFirstItem}
          totalPages={totalPages}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalRecords={companies.length}
          onPageChange={handlePageChange}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Clients;
