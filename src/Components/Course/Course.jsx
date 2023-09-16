import PropTypes from "prop-types";
const Course = ({ course, handlePurchase }) => {
  const { image, course_name, price, credit, details } = course;
  return (
    <>
      <div className="card bg-[#FFF] shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={course_name}
            className="rounded-xl w-[280px] h-[144px] "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-black font-semibold text-xl">{course_name}</h2>
          <p className="text-[#1c1b1b99] text-sm font-normal">{details}</p>
          <div className="flex">
            <div className="flex mr-1 gap-3">
              <img
                className=" w-[24px] h-[24px] "
                src="https://i.ibb.co/Y8vks91/dollar-sign-1.jpg"
                alt=""
              />
              <p className="text-[#1c1b1b99] font-medium text-base ">
                Price: {price}
              </p>
            </div>
            <div className="flex gap-3">
              <img
                className="w-[24px] h-[24px]"
                src="https://i.ibb.co/2vpGMMF/Frame.jpg"
                alt=""
              />
              <p className="text-[#1c1b1b99] font-medium text-base">
                Credit: {credit}hr
              </p>
            </div>
          </div>
          <button
            onClick={() => handlePurchase(course)}
            className="btn w-[280px] h-[40px] bg-[#2F80ED] text-white hover:bg-blue-900"
          >
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};
Course.propTypes = {
  course: PropTypes.object,
};
export default Course;
