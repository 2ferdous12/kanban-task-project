import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const showTask = () => {
    const useload = useLoaderData();

    const [edit, setEdit] = useState(false)
    const editDiv = () => {
      setEdit(!edit);
    };
    const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/use")
      .then((res) => res.json())
      .then((data) => setSelectedTask(data));
  }, []);



  const handleDelete = _id => {
    console.log('clicked', _id)

    console.log("delete", _id);
    fetch(`http://localhost:4000/use/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) { 
          alert("Deleted successfully");
          const remining = selectedTask.filter(user => user._id !== _id)
          setSelectedTask(remining)
        }
      })

  };
  const [taskdata333, setTaskdata333] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setTaskdata333(data))
})

    return (
        <div className="bg-[#F4F7FD] w-full min-h-[calc(100vh-120px)] p-5">
            <Link to="/board">
                <button className="btn  hover:bg-[#F4F7FD] rounded-full bg-[#635FC7] text-white">
                    <p className=" font-semibold">Go To Board</p>
                </button>
            </Link>
            <div className="absolute left-[3%] md:left-[41%] lg:left-[41%]
             top-[18%] md:top-[25%] lg:top-[25%]">
            <div className=" w-[350px] md:w-[450px] shadow-lg rounded-md  lg:w-[450px] 
             bg-[#FFFFFF]  p-5">
            <div className=" relative">
            <p className="text-balance text-xl font-semibold">{useload?.title}</p>

            <div>
            <div className="absolute top-[5%] right-0">
            <div>
            <div className=" w-[20px] h-[20px]" onClick={editDiv}>
            <img  className=" cursor-pointer w-[4px] h-[20px] mt-1 " src="/images/Group 6.png" alt="" />
            </div>
            
            {edit && (
            <div className="   space-y-3 right-[25%]
            w-[180px] h-[90px] p-5  bg-[#FFFFFF] shadow-md rounded-lg absolute">
                  <Link to={`/updateTask/${useload?._id}`}
             className="font-semibold cursor-pointer text-gray-500">Edit Task</Link>
               <p onClick={() => handleDelete(useload?._id)} className="font-semibold cursor-pointer text-red-500">Delete task</p>
           
             </div>
               )}
             </div>
            </div>
            </div>
            <p className=" text-balance mt-4 text-gray-500 font-semibold">{useload?.textarea}</p> <br />
            <p className=" text-balance -mt-2 text-gray-500  font-semibold">{useload?.substak1}</p>  <br />
            <p className=" text-balance  -mt-2 text-gray-500  font-semibold">{useload?.substak2}</p>  <br />



           <div  className="w-[300px]  flex gap-4 justify-center items-center md:w-[385px] lg:w-[385px] mt-2 
             rounded-sm text-xl p-3 h-[60px] md:h-[40px] lg:h-[40px] bg-[#F4F7FD]">
           <input className="w-[20px] h-[20px]" type="checkbox" />
           <p className="text-gray-500 leading-4  font-semibold text-[15px]">  
           Research competitor pricing and business models
           </p>
           </div>

           <div  className="w-[300px] flex gap-4 justify-center items-center md:w-[385px] lg:w-[385px] mt-2 
             rounded-sm text-xl p-3 h-[60px] md:h-[40px] lg:h-[40px] bg-[#F4F7FD]">
           <input className="w-[20px] h-[20px]" type="checkbox" />
           <p className="text-gray-500 leading-4 font-semibold text-[15px]">  
           Research competitor pricing and business models
           </p>
           </div>

           <div  className="w-[300px]  mb-5 flex gap-5 justify-center items-center md:w-[385px] lg:w-[385px] mt-2 
             rounded-sm text-xl p-3 h-[60px] bg-[#F4F7FD]">
           <input className="w-[40px] h-[20px]" type="checkbox" />
           <p className="text-gray-500 leading-4	 hidden md:block lg:block font-semibold text-[15px]">  
           Talk to potential customers about our proposed 
           solution and
            ask for  fair price expectancy
           </p>
           <p className="text-gray-500 font-semibold block md:hidden lg:hidden text-[15px]">  
           Surveying and testing
           </p>

           </div>

    <label className="text-xl   font-semibold text-gray-500 ">Current Status</label> <br />
      <div className="flex items-center mt-1 mb-2 gap-3">
      <p className="w-[295px]  md:w-[416px] lg:w-[416px] border-2
       text-xs mb-2  border-solid border-[#F3F3F3]
      rounded-md mx-auto p-3 mt-2 h-[40px]">
      {taskdata333.map((task, index) => (
      <select key={index}  className="pr-[170px] md:pr-[300px]
       lg:pr-[300px] text-xl font-semibold  -mt-2 bg-white" 
       name="status"
      defaultValue={useload?.status}
      id=""
   >
  <option value="todo">{task.column1}</option>
  <option value="doing">{task.column2}</option>
  <option value="done">{task.column3}</option>
  </select>
   ))}
   </p>
  </div>

          
            
            </div>

        </div>
         </div>
        </div>
    );
};

export default showTask;