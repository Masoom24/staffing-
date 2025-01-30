import React from 'react';

const DisplayJob = ({ jobDetails }) => {
  return (
    <div className="p-4">
      <h2>Job Details</h2>
      <div>
        <strong>Job Category:</strong> {jobDetails.jobCategory}
      </div>
      <div>
        <strong>Job Sub Category:</strong> {jobDetails.jobSubCategory}
      </div>
      <div>
        <strong>Job Title:</strong> {jobDetails.jobTitle}
      </div>
      <div>
        <strong>Job Description:</strong> {jobDetails.jobDescription}
      </div>
      <div>
        <strong>Position:</strong> {jobDetails.position}
      </div>
      <div>
        <strong>Highest Qualification:</strong> {jobDetails.highestQualification}
      </div>
      <div>
        <strong>Minimum Experience:</strong> {jobDetails.minimumExperience}
      </div>
      <div>
        <strong>Skill Required:</strong> {jobDetails.skillRequired}
      </div>
      <div>
        <strong>Joining Date:</strong> {jobDetails.joiningDate}
      </div>
      <div>
        <strong>Last Interview Date:</strong> {jobDetails.lastInterviewDate}
      </div>
      <div>
        <strong>Salary Range:</strong> {jobDetails.minSalary} - {jobDetails.maxSalary}
      </div>
      <div>
        <strong>Facilities:</strong> {jobDetails.facilities}
      </div>
      <div>
        <strong>CTC Salary:</strong> {jobDetails.ctcSalary}
      </div>
      <div>
        <strong>In Hand Salary:</strong> {jobDetails.inHandSalary}
      </div>
      <div>
        <strong>Salary Deductions:</strong> {jobDetails.salaryDeductions}
      </div>
      <div>
        <strong>Address:</strong> {jobDetails.addressLine1}, {jobDetails.addressLine2}, {jobDetails.areaLandmark}, {jobDetails.city}, {jobDetails.state}, {jobDetails.country}
      </div>
    </div>
  );
};

export default DisplayJob;
