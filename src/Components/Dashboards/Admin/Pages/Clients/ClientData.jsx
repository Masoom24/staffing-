import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import DeleteIcon from "@mui/icons-material/Delete";

function ClientData({
  currentCompany,
  indexOfFirstItem,
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
  handleDelete,
}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hidden md:table-cell">Company Address</th>
              <th className="hidden md:table-cell">Authorised Person</th>
              <th className="hidden md:table-cell">Created</th>
              <th className="hidden md:table-cell">Status</th>
              <th className="hidden md:table-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCompany.map((company) => (
              <tr key={company.id} className="hover">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-md bg-gray-200">
                        <img src={company.profile} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{company.company}</div>
                      <div className="text-sm text-blue-500 ">
                        <MailOutlineIcon className="mr-2" />
                        {company.email}
                      </div>
                      <div className="text-sm text-blue-500  ">
                        <LocalPhoneIcon className="mr-2" />
                        {company.phone}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div>
                    <h1 className="text-xs">
                      <span className="font-bold">Company Address:</span>
                      <br />
                      {company.companyAddress}
                    </h1>
                    <h1 className="text-xs">
                      <span className="font-bold">Company Office:</span>
                      <br />
                      {company.companyOffice}
                    </h1>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div>
                    <h1 className="text-md font-bold">
                      {company.autherisedPerson.name}
                    </h1>
                    <div className="badge badge-xs rounded-md bg-gray-300">
                      <h1 className="text-2xs ">
                        {company.autherisedPerson.position}
                      </h1>
                    </div>

                    <h1 className="text-sm ">
                      {company.autherisedPerson.phone}
                    </h1>
                    <h1 className="text-sm ">
                      {company.autherisedPerson.email}
                    </h1>
                  </div>
                </td>
                <td className="hidden md:table-cell">{company.created}</td>
                <td className="hidden md:table-cell">
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={company.status}
                    readOnly
                  />
                </td>
                <td className="hidden md:table-cell">
                  <button className="btn btn-sm btn-ghost border-sky-500 mr-2 text-sky-500">
                    <BusinessIcon />
                  </button>
                  <button
                    className="btn btn-sm btn-ghost border-red-500 text-red-500"
                    onClick={() => handleDelete(company.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="m-4 flex justify-between">
        <h1>
          Showing <b>{indexOfFirstItem + 1}</b> -{" "}
          <b>{indexOfFirstItem + currentCompany.length}</b> of{" "}
          <b>{totalRecords}</b> Records
        </h1>
        <div className="join">
          <button
            className="btn btn-ghost"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`btn rounded-md bg-lime-400 ${
                page === currentPage ? "btn-active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="btn btn-ghost"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientData;
