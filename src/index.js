import { useState } from "react";
import { Link } from "react-router-dom";

const navbar = () => {
const [menu, setMenu] = useState(false);

// const handleClick = () =>{
  
// }

    return (
        <div>
<div className="navbar h-[100px] shadow-md  bg-[#FFFFFF]">
  <div className="md:w-[250px] lg:w-[300px] lg:border-r-2">
    <div  onClick={() => setMenu(!menu)} className=" pl-2 pr-2 pt-1 mr-4 block md:hidden lg:hidden ">
{
  menu === true ? 
  <Link to="/">
  <img src="/images/Group 15.png" alt="" />
  </Link>
  :
  <Link to="/mainhome" >
  <img src="/images/Group 15.png" alt="" />
  </Link>
}

    </div>
    <a className="btn hidden mt-3 md:block lg:block btn-ghost text-xl">
        <img src="/images/Group 16 (1).png" alt="" />
    </a>
  </div>
  <div className=" -ml-6 md:ml-20   lg:ml-20 navbar-start  lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    <li><p 
    className="hidden  md:block lg:block text-xl font-semibold w-[190px]
    ">Platform Launch</p></li>
  

    <Link  className={` ml-3 block md:hidden lg:hidden`}>
        <h1 className="text-xl font-semibold w-[200px]">Platform Launch</h1>
    </Link>    
    
 
    </ul>
  </div>
  <div className="navbar-end">
  <a className=" block md:hidden lg:hidden flex pb-1 justify-center 
  items-center text-2xl text-white border-none
     w-[45px] h-[32px] rounded-full bg-[#A8A4FF] ">+</a>
   
    <a className="hidden pt-2  justify-center items-center 
     md:block lg:block text-black  border-none
     w-[160px]  h-[45px]  rounded-md font-bold
     text-2xl">Task Platform </a>
     <img className="ml-3 mr-3" src="/images/Group 6.png" alt="" />
  </div>
</div>
        </div>
    );
};

export default navbar;