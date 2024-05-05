import Navbar from "./navbar";
import Sitebar from "./sitebar/sitebar";
import { Outlet } from "react-router-dom";


const root = () => {
    return (
        <div className="max-w-[1400px] mx-auto ">
            <Navbar></Navbar>
          <div className="flex">
          <Sitebar></Sitebar>
          <Outlet></Outlet>
          </div>
    
          
        </div>
    );
};

export default root;