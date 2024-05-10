import { Link, useLoaderData } from "react-router-dom";
import Mainbord from "./mainbord";
import { useEffect, useState } from "react";
const board = () => {
  const users = useLoaderData();
  const [taskdata333, setTaskdata333] = useState([])
  
  useEffect(() => {
      fetch("http://localhost:9000/users")
        .then((res) => res.json())
        .then((data) => setTaskdata333(data));
    }, []);

  return (
      <div className="bg-[#F4F7FD] w-full">
      <div id="board" className=" flex
       p-4 w-[375px] md:w-[768px]
      lg:w-[1100px]  min-h-[calc(100vh-120px)]">
        {
          users.map((cardbox, _id) => <Mainbord key={_id}  cardbox={cardbox}></Mainbord>)
        }

     <div className="w-[240px] 
      h-[814px] mt-16 hidden md:hidden  cursor-pointer lg:block mx-auto  bg-[#eef1f1]">
     <div className="flex justify-center   h-[814px]   items-center">
     <div id="todo">
          {taskdata333
          .map((task, index) => (
          <div key={index}>
          <Link to={`/updateBoard/${task._id}`}
           className="font-semibold cursor-pointer text-gray-500">Edit Board</Link>
            </div>
            ))}
           </div>
     </div>
     </div>
    </div>
    </div>
  );
};

export default board;