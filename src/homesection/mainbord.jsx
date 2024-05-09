
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mainbord = ({ cardbox }) => {

  if (!cardbox) {
    return null;
  }
  const [edit, setEdit] = useState(false)
  const editDiv = () => {
    setEdit(!edit);
  };

const { column1, column2, column3 } = cardbox;
const [taskdata333, setTaskdata333] = useState([]);
const [selectedTask, setSelectedTask] = useState(null);
  useEffect(() => {
    fetch("http://localhost:9000/use")
      .then((res) => res.json())
      .then((data) => setTaskdata333(data));
  }, []);

  console.log(taskdata333)

  const handleDelete = _id => {
    console.log('clicked', _id)

    console.log("delete", _id);
    fetch(`http://localhost:9000/use/${_id}`, {
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




// 
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
            <div onClick={() => setSelectedTask(task)}
            key={index}
             className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]"
            >
              <p className="text-xl font-semibold text-balance">{task.title}</p>
              <p className="text-gray-500 font-semibold">{task.substak1} </p>
              <p className="text-gray-500 font-semibold">{task.substak2}</p>
              </div>
            ))}
        </div>

        {selectedTask && (
        <div className="absolute top-[15%] left-[42%]">
          <div className="mx-auto">
          <div className="modal-box w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF]
          h-[675px] p-5  ">
          <div className="">
          <div className="flex  relative  ">
          <h3 className="font-bold text-black text-2xl  ">{selectedTask.title}</h3> <br />
          <h3 className="font-bold text-black text-2xl  ">{selectedTask.textarea}</h3><br />
          <h3 className="font-bold text-black text-2xl  ">{selectedTask.substak1}</h3><br />
          <h3 className="font-bold text-black text-2xl  ">{selectedTask.substak2}</h3>
          <div>
              <div  className="absolute top-[22%] right-0">
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
                </div>
                <form >


            <label className="text-xl  font-semibold text-gray-500 ">Status</label> <br />
             <div className="flex items-center mt-1 mb-2 gap-3">
            <p className="w-[295px] md:w-[416px] lg:w-[416px] border-2 text-xs mb-2 border-solid border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
              <select className="pr-[300px] text-xl font-semibold -mt-2 bg-white" name="status" id="" value={selectedTask.status} onChange={(e) => setSelectedTask({ ...selectedTask, status: e.target.value })}>
                <option value={column1}>{column1}</option>
                <option value={column2}>{column2}</option>
                <option value={column3}>{column3}</option>
              </select>
            </p>
            </div>
              

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
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
          <div  onClick={() => setSelectedTask(task)}
           key={index} 
           className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]">
           
              <p className="text-xl font-semibold text-balance">  {task.title}</p>
              <p className="text-gray-500 font-semibold">{task.substak1} </p>
              <p className="text-gray-500 font-semibold">{task.substak2}</p>
              </div>
            ))}
        </div>

        {selectedTask && (
        <div className="absolute top-[15%] left-[42%]">
          <div className="mx-auto">
            <div className="modal-box w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF]
             h-[675px] p-5  ">
              <div className="">
              <div className="flex  relative  ">
              <h3 className="font-bold text-black text-2xl  ">{selectedTask.title}</h3> <br />
              <h3 className="font-bold text-black text-2xl  ">{selectedTask.textarea}</h3><br />
              <h3 className="font-bold text-black text-2xl  ">{selectedTask.substak1}</h3><br />
              <h3 className="font-bold text-black text-2xl  ">{selectedTask.substak2}</h3>
              <div>
              <div  className="absolute top-[22%] right-0">
              <div>
              <img onClick={editDiv} className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
              {edit && (

        <div className=" top-[9%] right-[22%]  w-[180px] h-[90px] p-5 space-y-2 bg-[#FFFFFF] shadow-md rounded-lg absolute">
   <p onClick={() => handleDelete(selectedTask._id)}  className="font-semibold cursor-pointer text-gray-500">Delete task</p>
  <Link to={`/updateTask/${selectedTask._id}`}
  className="font-semibold cursor-pointer text-gray-500">Edit Task</Link>
  
   </div>
 )}
                </div>    
                </div>
                </div>
                </div>
                <form >


              <label className="text-xl  font-semibold text-gray-500 ">Status</label> <br />
             <div className="flex items-center mt-1 mb-2 gap-3">
            <p className="w-[295px] md:w-[416px] lg:w-[416px] border-2 text-xs mb-2 border-solid border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
              <select className="pr-[300px] text-xl font-semibold -mt-2 bg-white" name="status" id="" value={selectedTask.status} onChange={(e) => setSelectedTask({ ...selectedTask, status: e.target.value })}>
                <option value={column1}>{column1}</option>
                <option value={column2}>{column2}</option>
                <option value={column3}>{column3}</option>
              </select>
            </p>
          </div>
              

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
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
              <div  onClick={() => setSelectedTask(task)}
                key={index}
                className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]"
              >

              <p className="text-xl font-semibold text-balance">  {task.title}</p>
              <p className="text-gray-500 font-semibold">{task.substak1} </p>
              <p className="text-gray-500 font-semibold">{task.substak2}</p>
              </div>
            ))}
        </div>
        {selectedTask && (
        <div className="absolute top-[15%] left-[42%]">
          <div className="mx-auto">
            <div className="modal-box w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF]
              h-[675px] p-5  ">
              <div className="">
                <div className="flex  relative  ">
                  <h3 className="font-bold text-black text-2xl  ">{selectedTask.title}</h3> <br />
                  <h3 className="font-bold text-black text-2xl  ">{selectedTask.textarea}</h3><br />
                  <h3 className="font-bold text-black text-2xl  ">{selectedTask.substak1}</h3><br />
                  <h3 className="font-bold text-black text-2xl  ">{selectedTask.substak2}</h3>
                  <div>
                    <div  className="absolute top-[22%] right-0">
                   <div>
                   <img onClick={editDiv} className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
                   {edit && (

   <div className=" top-[9%] right-[22%]
   w-[180px] h-[90px] p-5 space-y-2 bg-[#FFFFFF] shadow-md rounded-lg absolute">
  <p onClick={() => handleDelete(selectedTask._id)}  className="font-semibold cursor-pointer text-gray-500">Delete task</p>
  <Link to={`/updateTask/${selectedTask._id}`}
  className="font-semibold cursor-pointer text-gray-500">Edit Task</Link>
  
   </div>
 )}
                </div>  
                </div>
                </div>
                </div>
                <form >


                <label className="text-xl  font-semibold text-gray-500 ">Status</label> <br />
                <div className="flex items-center mt-1 mb-2 gap-3">
            <p className="w-[295px] md:w-[416px] lg:w-[416px] border-2 text-xs mb-2 border-solid border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
              <select className="pr-[300px] text-xl font-semibold -mt-2 bg-white" name="status" id="" value={selectedTask.status} onChange={(e) => setSelectedTask({ ...selectedTask, status: e.target.value })}>
                <option value={column1}>{column1}</option>
                <option value={column2}>{column2}</option>
                <option value={column3}>{column3}</option>
              </select>
            </p>
          </div>
              

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Mainbord;

