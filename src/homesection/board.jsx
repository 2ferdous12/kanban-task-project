import { useLoaderData } from "react-router-dom";
import Mainbord from "./mainbord";
const board = () => {

    const users = useLoaderData();
    return (
        
<div className="bg-[#F4F7FD] w-full">
<div id="board" className="
         p-2 w-[1100px] min-h-[calc(100vh-120px)]">
        {/* {users.map((user, index) => (
          <div key={index} className=" flex  gap-5">

          <div className="w-[260px] bg-red-400">
            <p className="w-[20px]  h-[5px] bg-emerald-700"></p>
            <p>hi</p>
          </div>

           <div className="w-[260px] bg-black ">
            <h1>{user.column2}</h1>
          </div>

           <div className="w-[260px]">
            <h1>{user.column3}</h1>
          </div>
           <div className="w-[240px] bg-red-200">
         
          </div>
         
          </div>
        ))} */}

        {
          users.map((card, index) => <Mainbord key={index} card={card}></Mainbord>)
        }
      </div>
</div>
    );
};

export default board;