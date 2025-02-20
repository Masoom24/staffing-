import React, { useState, useRef } from "react";
import UIButton from "../../../../../Common/UIButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function ClientDetails() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click(); // Open file picker
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]); // Append new images
  };

  const handleUpload = () => {
    setUploadedImages((prev) => [...prev, ...selectedImages]); // Add to uploaded list
    setSelectedImages([]); // Clear preview after upload
  };

  const handleDelete = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index)); // Remove image from uploaded list
  };

  return (
    <div className="flex flex-col md:flex-row m-4 gap-4">
      {/* Upload Client Logo Section */}
      <div className="card bg-white w-full md:w-1/3 shadow-md rounded-md p-4">
        <div className="card-body">
          <h1 className="card-title mb-4">Upload Client Logo</h1>

          <div className=" placeholder" onClick={handleAvatarClick}>
            <div className="w-40 h-40 flex flex-col justify-center items-center shadow-md rounded-md bg-[#96BE25] text-white rounded-md text-sm font-medium shadow-md hover:bg-[#75941c] transition-all duration-300">
              <CloudUploadIcon
                fontSize="large"
                className="mb-2 text-lime-400 text-white"
              />
              <h1 className="font-bold">Click here to upload</h1>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />

          {selectedImages.length > 0 && (
            <div className="mt-4">
              <div className="flex gap-4 flex-wrap">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative w-20 rounded shadow-md">
                    <img
                      src={image}
                      alt="Preview"
                      className="object-cover w-full h-full rounded"
                    />
                    <button
                      className="absolute top-0 right-0 m-1 bg-white text-red-500 border-red-500 hover:bg-red-100"
                      size="small"
                      onClick={() =>
                        setSelectedImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                    >
                      <DeleteIcon fontSize="small" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <UIButton onClick={handleUpload}>Upload Images</UIButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Client Section Images */}
      <div className="card bg-white w-full shadow-md rounded-md p-4">
        <div className="card-body">
          <h1 className="card-title mb-4">Client Section Images</h1>
          {uploadedImages.length > 0 ? (
            <div className="flex gap-4 flex-wrap">
              {uploadedImages.map((image, index) => (
                <div key={index} className="relative w-40 rounded shadow-md">
                  <img
                    src={image}
                    alt="Client Logo"
                    className="object-cover w-full h-full rounded"
                  />
                  <button
                    className="absolute top-0 right-0 m-1 bg-white text-red-500 border-red-500 hover:bg-red-100"
                    size="small"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon fontSize="small" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No images uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientDetails;
