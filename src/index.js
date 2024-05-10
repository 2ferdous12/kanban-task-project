import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Mainbord from "../homesection/mainbord";

const viewTask = () => {
    const handleStatusChange = (newStatus) => {
        setTaskStatus(newStatus);
      };
      const [edit, setEdit] = useState(false)
      const [taskdata333, setTaskdata333] = useState([]);
      const [taskStatus, setTaskStatus] = useState('todo');
      useEffect(() =>{
        fetch('http://localhost:9000/users')
        .then(res => res.json())
        .then(data => setTaskdata333(data))
    })

    
    const editDiv = () => {
        setEdit(!edit);
      };
const useload = useLoaderData();
    return (
        <div className="bg-[#F4F7FD] w-full min-h-[calc(100vh-120px)] p-5">
<Link to="/board">
   <button className="btn">
  <p className="text-xl font-semibold">Go Main Page</p>
  </button>
</Link>
        <div className="absolute left-[41%] top-[20%]">
        <div className=" w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF]
 h-[675px] p-5  ">
 <div className="">   

    
<div className="flex  relative  ">
<h3 className="font-bold text-black text-2xl  ">Add New Task</h3>
<div>

</div>
</div>

    <form 
     className="mt-5">

<p>{useload.title}</p>
<p>{useload.textarea}</p>
<p>{useload.substak1}</p>
<label className="text-xl  font-semibold text-gray-500 ">Status</label> <br />

<div className="flex items-center mt-1 mb-2 gap-3">
<p
 className="w-[295px]  md:w-[416px] lg:w-[416px] border-2 text-xs mb-2  border-solid 
 border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
    {taskdata333.map((task, index) => (
      <select key={index}  className="pr-[300px] text-xl font-semibold  -mt-2 bg-white" 
   name="status"
   defaultValue={useload?.status}
  id=""
 onChange={(e) => handleStatusChange(e.target.value)}>
  <option value="todo">{task.column1}</option>
  <option value="doing">{task.column2}</option>
  <option value="done">{task.column3}</option>
</select>
   ))}
 </p>
</div>
 </form>
 </div>
</div>
 </div>
 <Mainbord taskStatus={taskStatus} taskdata333={taskdata333}></Mainbord>
 </div>
    );
};

export default viewTask;
<div>
<div  className="absolute top-[10%] right-0">
<div>
<img onClick={editDiv} className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
{edit && (
<div className=" top-[9%] right-[22%]
w-[180px] h-[90px] p-5 space-y-2 bg-[#FFFFFF] shadow-md rounded-lg absolute">
<p onClick={() => handleDelete(selectedTask._id)} className="font-semibold cursor-pointer text-gray-500">Delete task</p>
<Link to={`/updateTask/${selectedTask._id}`}
className="font-semibold cursor-pointer text-gray-500">Edit Task</Link>
</div>
)}
     </div>
     </div>
     </div>