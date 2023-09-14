import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="flex gap-6">
      <div className="w-3/4 gap-6 grid grid-cols-1 xl:grid-cols-3">
        {courses.map((course) => (
          <Course key={courses.id} course={course}></Course>
        ))}
      </div>
      <div className=" card w-[312px] h-[355px] bg-[#FFF] shadow-xl p-5 ">
        <h3 className="text-[#2F80ED] text-lg font-bold">
          Credit Hour Remaining 20hr
        </h3>
        <hr />
        <h3 className="text-xl font-bold my-5">Course Name</h3>
        <ul>
          <li></li>
        </ul>
        <hr />
        <h4 className="text-[#1c1b1bcc] text-base font-medium my-4">
          Total Credit Hour:{" "}
        </h4>
        <hr />
        <h4 className="text-[#1c1b1bcc] text-base font-semibold my-4">
          Total Price: USD
        </h4>
      </div>
    </div>
  );
};

export default Courses;
