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
 <Link to="/roadmap"
 className={`btn text-white border-none
  h-[50px] bg-[#635FC7] font-semibold text-xl
   hover:bg-[#A8A4FF] rounded-full`}>+ Add New Column
</Link>
 </div>
</div>

<div className="drawer lg:drawer-open ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div  className="drawer-side  mt-80 w-[300px] ml-80">
    <label htmlFor="my-drawer" aria-label="close
     sidebar" ></label>
    <ul className="menu p-4 w-80 min-h-full ">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>


  <NavLink className={({isActive})=> isActive ? 'hidden'
   : 'block'} to="/">
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