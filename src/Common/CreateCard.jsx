import React from "react";

const CreateCard = ({ title, children }) => {
  return (
    <div className="card w-full max-w-6xl bg-base-100 shadow-md mx-auto rounded-md">
      <div className="card-body border-b-2 border-gray-200 p-6">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <hr className="my-4 mx-auto border-t-2 border-gray-300" />
      <div className="card-body p-6">{children}</div>
    </div>
  );
};

export default CreateCard;
