import { Link, NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
const sitebar = () => {

  const [theme, setTheme] = useState('light')

const handleToggle = (e) =>{
if(e.target.checkbox){
  setTheme('dark')
}
else{
  setTheme('light')
}
}

    return (
        <div  className=" hidden  md:block lg:block min-h-[calc(100vh-90px)] shadow-md
       w-[200px] md:w-[261px]  lg:w-[300px]   bg-[#FFFFFF] " >
            <div className="flex flex-col  justify-between">
 <div className="pl-1 md:pl-2 lg:pl-3 min-h-[calc(100vh-200px)] ">
 <div className="mt-4">
       <h1 className="text-xl font-semibold text-gray-500">ALL BOARDS (3)</h1>
      <div className="space-y-1 w-[275px] mt-4 list-none">
              
        <NavLink to="/" 
        className={({isActive}) => isActive ? 'flex pb-1 text-white items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
         : ' flex items-center text-xl  pb-1 md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
        >
        <img className="pr-3 text-white" src="/images/fluent_board-split-24-regular (1).png"
         alt="" />
         Platform Launch</NavLink>

      
        <NavLink    to="/marketing" 
        className={({isActive}) => isActive ? 'pb-1 flex text-white items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
        : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
          >
        <img className="pr-3" 
        src="/images/fluent_board-split-24-regular (1).png" alt="" />
          Marketing Plan</NavLink>

   
        <NavLink  to="/roadmap" 
        className={({isActive}) => isActive ? 'pb-1 flex text-white items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
        : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
          >
        <img className="pr-3" 
        src="/images/fluent_board-split-24-regular (1).png" alt="" />
          Roadmap</NavLink>
       
        <NavLink  to="/newbord" 
        className={({isActive}) => isActive ? 'pb-1 flex text-white items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
        : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] lg:w-[270px] rounded-r-full h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
          >
        <img  className="pr-3 text-[#635FC7] "
         src="/images/fluent_board-split-24-regular (1).png" alt="" />
         + Create New Board</NavLink>
         <p>
        
         </p>
          </div>
         </div>
      </div>
      <div className="flex justify-center ">
<div className="bg-[#F4F7FD] rounded-lg
 w-[250px] h-[50px] flex justify-center items-center">
<label className="flex cursor-pointer gap-4 text-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input 
  onChange={handleToggle}
  type="checkbox"
   value="dark"
    className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
</div>

<div className="flex justify-center mt-3">
<div className=" mt-1 flex justify-start items-center gap-3">
<Link to="/mainhome">
<FaEye className="w-[18px]"></FaEye>
</Link>
 <p className="text-xl">Hide Sidebar</p>
</div>
</div>

  </div>
  </div>
    );
};

export default sitebar;