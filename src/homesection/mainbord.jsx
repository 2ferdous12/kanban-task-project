
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mainbord = ({ cardbox }) => {

  if (!cardbox) {
    return null;
  }

const { column1, column2, column3 } = cardbox;
const [taskdata333, setTaskdata333] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9000/use")
      .then((res) => res.json())
      .then((data) => setTaskdata333(data));
  }, []);


  return (
    <div className="grid grid-cols-1 w-[375px] md:w-[768px] h-[50px] lg:w-[1100px] md:grid-cols-3 lg:grid-cols-3">

      {/* ********* */}
    {/* first Column */}

      <div className="w-[280px] md:w-[260px] lg:w-[260px] mx-auto md:mx-0 lg:mx-0">
        <div className="flex items-center gap-2 mb-7">
        <p className="bg-[#49C4E5] w-[20px] h-[20px] rounded-full"></p>
        <h1 className="text-gray-500 text-xl font-semibold">{column1}</h1>
        <p className="text-gray-500 text-xl font-semibold">
        (<span>{taskdata333.filter((task) => task.status === "todo").length}</span>)
        </p>
        </div>
        <div id="todo">
          {taskdata333
            .filter((task) => task.status === "todo")
            .map((task, index) => (
            <div 
            key={index}
             className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]"
            >
      <Link to={`/showTask/${task._id}`}>
       <p className="text-xl font-semibold text-balance">{task.title}</p>
       <p className="text-gray-500 font-semibold">{task.substak1} </p>
       <p className="text-gray-500 font-semibold">{task.substak2}</p>    
      </Link>
              </div>
            ))}
        </div>
         </div>


      {/* scound Column */}

        <div className="w-[280px] md:w-[260px] lg:w-[260px] md:pl-10 lg:pl-0 mx-auto md:mx-0 lg:mx-0">
        <div className="flex items-center gap-2 mb-7">
        <p className="bg-[#8471F2] w-[20px] h-[20px] rounded-full"></p>
        <h1 className="text-gray-500 text-xl font-semibold">{column2}</h1>
        <p className="text-gray-500 text-xl font-semibold">
        (<span>{taskdata333.filter((task) => task.status === "doing").length}</span>)
        </p>
        </div>

        <div id="doing">
          {taskdata333
          .filter((task) => task.status === "doing")
          .map((task, index) => (
          <div 
           key={index} 
           className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]">
           
           <Link to={`/showTask/${task._id}`}>
       <p className="text-xl font-semibold text-balance">{task.title}</p>
       <p className="text-gray-500 font-semibold">{task.substak1} </p>
       <p className="text-gray-500 font-semibold">{task.substak2}</p>    
      </Link>
              </div>
            ))}
        </div>
          </div>



      {/* Done Column */}
      <div className="w-[280px] md:w-[260px] lg:w-[260px] lg:pl-0 mx-auto md:mx-0 lg:mx-0">
        <div className="flex items-center gap-2 mb-7">
          <p className="bg-[#67E2AE] w-[20px] h-[20px] rounded-full"></p>
          <h1 className="text-gray-500 text-xl font-semibold">{column3}</h1>
          <p className="text-gray-500 text-xl font-semibold">
            (<span>{taskdata333.filter((task) => task.status === "done").length}</span>)
          </p>
        </div>
        <div id="done">
          {taskdata333
            .filter((task) => task.status === "done")
            .map((task, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]"
              >

        <Link to={`/showTask/${task._id}`}>
       <p className="text-xl font-semibold text-balance">{task.title}</p>
       <p className="text-gray-500 font-semibold">{task.substak1} </p>
       <p className="text-gray-500 font-semibold">{task.substak2}</p>    
      </Link>
              </div>
            ))}
        </div>
         </div>
        </div>
  );
};

export default Mainbord;

