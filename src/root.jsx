import Navbar from "./navbar";

import { Outlet } from "react-router-dom";


const root = () => {
    return (
        <div className="max-w-[1400px] mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default root;