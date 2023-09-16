import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
//toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showCourse, setShowCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalHour, setTotalHour] = useState(0);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handlePurchase = (course) => {
    const isInCart = showCourse.find((item) => item.id == course.id);
    let cost = course.price;
    let hour = course.credit;
    // console.log(course.price);
    if (isInCart) {
      toast("Course already exists in cart.");
    } else {
      showCourse.forEach((item) => {
        cost += item.price;
        setTotalCost(cost);
        hour += item.credit;
        // console.log(hour);
        setRemainingHour(remainingHour - hour);
        setTotalHour(hour);
      });
      setShowCourse([...showCourse, course]);
    }
    // console.log(newArray);
  };
  return (
    <div className="flex gap-6">
      <div className="w-3/4 gap-6 grid grid-cols-1 xl:grid-cols-3">
        {courses.map((course) => (
          <Course
            key={courses.id}
            course={course}
            handlePurchase={handlePurchase}
          ></Course>
        ))}
      </div>
      <div className=" card bg-[#FFF] shadow-xl p-5 ">
        <h3 className="text-[#2F80ED] text-lg font-bold">
          Credit Hour Remaining {remainingHour}
        </h3>
        <hr />
        <h3 className="text-xl font-bold my-5">Course Name</h3>
        <ul className="mx-5">
          {showCourse.map((course) => (
            <li className=" list-decimal" key={course.id}>
              {course.course_name}
            </li>
          ))}
        </ul>
        <hr />
        <div className="text-[#1c1b1bcc] text-base font-medium my-4">
          Total Credit Hour: {totalHour}
        </div>
        <hr />
        <h4 className="text-[#1c1b1bcc] text-base font-semibold my-4">
          Total Price: {totalCost} USD
        </h4>
      </div>
    </div>
  );
};

export default Courses;
