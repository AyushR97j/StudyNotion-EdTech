import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

function Error() {

  const navigate = useNavigate()

  return (
    <div className=" flex flex-col justify-center items-center flex-1  text-white text-3xl font-medium bg-bg-richblack-800">

    <div className="flex flex-col justify-center items-center gap-6 bg-[#082f49] shadow w-[450px] h-[200px] rounded-xl">
      <div className=" flex items-center justify-center rounded-lg">
        Error 404 - Page Not Found
      </div>
      <button className="bg-[#115e59] py-2 px-4 rounded-full flex gap-4 shadow hover:bg-[#40827e] duration-1000"
        onClick = {() => navigate(-1)}>
          <FaArrowLeft
            className=" my-1"
          />
          Go Back
      </button>
    </div>

    </div>
  );
}

export default Error;