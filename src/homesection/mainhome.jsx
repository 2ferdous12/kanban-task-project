import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const mainhome = () => {

return (
<div className="min-h-[calc(100vh-90px)] w-full bg-[#F4F7FD] ">
<div className=" bg-[#F4F7FD] 
 w-full flex justify-center items-center min-h-[calc(100vh-120px)] ">
 <div className="text-center space-y-3">
 <h1 className="text-gray-500 text-xl ">
 This board is empty. Create a new column to get started.
 </h1>
 {/* to="/platforms" */}
 <Link to="/columnSection"
 className={`btn text-white border-none
  h-[50px] bg-[#635FC7] font-semibold text-xl
   hover:bg-[#A8A4FF] rounded-full`}>+ Add New Column
</Link>
 </div>
</div>
  <NavLink className={({isActive})=> isActive ? 'hidden'
   : 'hidden'} >
<div className=" rounded-r-full 
bg-[#635FC7] flex justify-center items-center text-white
 -mt-[50px] w-[50px] h-[40px]">
<FaEye 
 className="w-6"></FaEye>
</div>
</NavLink>

</div>

    );
};

export default mainhome;