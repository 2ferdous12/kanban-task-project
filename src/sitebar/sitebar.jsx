import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CreateBoard from "../component/createBoard";
import { BiHide } from "react-icons/bi";

const sitebar = () => {

const [isSidebarVisible, setIsSidebarVisible] = useState(true);
const [taskdata333, setTaskdata333] = useState([]);
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

const handleToggle = (e) => {
  const newTheme = e.target.checked ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
};

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);

useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setTaskdata333(data));
  }, []);

const toggleSidebar = () => {
setIsSidebarVisible(!isSidebarVisible);
};
    return (

      <div className="">
      {isSidebarVisible ? (
        <div id="container"  className=" hidden  md:block lg:block min-h-[calc(100vh-90px)]
        w-[200px] md:w-[260px]  lg:w-[300px]  shadow-md  bg-[#FFFFFF] " >
        <div className="flex flex-col  justify-between">
 <div className="pl-1 md:pl-2 lg:pl-3 min-h-[calc(100vh-200px)] md:w-[260px] lg:w-[300px]  ">
 <h1 className="text-xl pb-3 font-semibold text-gray-500">ALL BOARDS ({taskdata333.length})</h1>     
    
     <NavLink to="/" 
     className={({isActive}) => isActive ? 'flex pb-1 text-white items-center text-xl   md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
      : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
     >
     <img className="pr-3 text-white" 
    src="/images/fluent_board-split-24-regular (1).png"alt="" />
      Platform Launch</NavLink>

   
     <NavLink    to="/marketing" 
     className={({isActive}) => isActive ? 'flex text-white pb-1 items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
     : ' flex items-center text-xl f md:pl-3 font-semibold pl-1 pb-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
       >
     <img className="pr-3" 
     src="/images/fluent_board-split-24-regular (1).png" alt="" />
       Marketing Plan</NavLink>


     <NavLink  to="/roadmap" 
     className={({isActive}) => isActive ? 'flex pb-1 text-white items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
     : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
      >
     <img className="pr-3" 
     src="/images/fluent_board-split-24-regular (1).png" alt="" />
     Roadmap</NavLink>
    
 <div  onClick={()=>document.getElementById('my_modal_5').showModal()}
  className=' cursor-pointer flex items-center text-xl f md:pl-3 pb-1
  font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] lg:w-[270px] 
rounded-r-full h-[50px] text-[#635FC7] hover:text-[#635FC7]
 hover:bg-[#F4F7FD] '>
     <img  className="pr-3 text-[#635FC7] "
      src="/images/fluent_board-split-24-regular (1).png" alt="" />
      + Create New Board

      {/* board create modal */}
      
<dialog id="my_modal_5" className="modal  flex justify-center items-center  modal-bottom sm:modal-middle">
<CreateBoard></CreateBoard>
</dialog>
      
</div>
</div>
<div>

<div className="flex justify-center">
      <div className="bg-[#F4F7FD] rounded-lg mt-1 w-[250px] h-[50px] flex justify-center items-center">
        <label className="flex cursor-pointer gap-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            onChange={handleToggle}
            type="checkbox"
            checked={theme === 'dark'} 
            className="toggle theme-controller" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>


<div className="   mt-2 flex justify-center ">
<div   className=" flex items-center h-[48px] cursor-pointer hover:bg-[#F4F7FD] w-[250px] rounded-lg justify-center gap-3">
<Link onClick={toggleSidebar} >
<BiHide className="w-6"></BiHide>
</Link>
 <p className="text-xl cursor-pointer font-semibold">Hide Sidebar</p>
</div>
</div>
                </div>
            </div>
        </div>
      ) : (
<div onClick={toggleSidebar} className=" rounded-r-full absolute top-[98%]
bg-[#635FC7] flex justify-center items-center text-white
 -mt-[50px] w-[50px] h-[40px]">
<BiHide className="w-6"></BiHide>
</div>
      )}
    </div>
  
    );
};

export default sitebar;