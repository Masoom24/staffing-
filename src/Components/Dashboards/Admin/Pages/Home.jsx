import React from "react";
import Card from "../../../../Common/Card";
import Analytics from "./Analytics";

const cardContent = [
  {
    image:
      "https://img.freepik.com/premium-vector/recruit-agent-analyzing-candidates_86047-104.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming",
    title: "first image",
    number: "384",
    text: "Total Candidates",
  },
  {
    image:
      "https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming",
    title: "second image",
    number: "280",
    text: "Total SignUps",
  },
  {
    image:
      "https://img.freepik.com/free-vector/receptionist-concept-illustration_114360-26682.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming",
    title: "third image",
    number: "100",
    text: "Total Admin Staffs",
  },
  {
    image:
      "https://img.freepik.com/free-vector/three-man-having-business-meeting-office_74855-4583.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming",
    title: "fourth image",
    number: "80",
    text: "Total Employees",
  },
  {
    image:
      "https://img.freepik.com/free-vector/flat-employment-agency-search-new-employees-hire_88138-802.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming",
    title: "first image",
    number: "20",
    text: "Total Job Posts",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/employee-hiring-process-concept-with-people-scene-flat-cartoon-design-man-looks-best-resumes-selects-staff-human-resources-recruitment-vector-illustration-visual-story-web_9209-9347.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming",
    title: "first image",
    number: "10",
    text: "Total Job Applied",
  },
];

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 m-4 ">
        {cardContent.map((item) => (
          <Card
            image={item.image}
            title={item.title}
            number={item.number}
            text={item.text}
          />
        ))}
      </div>
      <Analytics />
    </div>
  );
};

export default Home;
