import { Link, useLoaderData } from "react-router-dom";
import Mainbord from "../homesection/mainbord";
import { useEffect, useState } from "react";
const updateTask = () => {
  const load = useLoaderData()

  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [imgSrc, setImgSrc] = useState('/images/Group 18.png');
  const [imgSrc2, setImgSrc2] = useState('/images/Group 18.png');
  const [taskdata333, setTaskdata333] = useState([]);
  const [taskStatus, setTaskStatus] = useState('todo');
  useEffect(() =>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setTaskdata333(data))
})

  const handleStatusChange = (newStatus) => {
    setTaskStatus(newStatus);
  };
  function handleInputChange(event) {
    setInputValue(event.target.value);
    setImgSrc('/images/Group 18.png');
  }

  function handleInputChange2(event) {
    setInputValue2(event.target.value);
    setImgSrc2('/images/Group 18.png');
  }

  function handleClearInput() {
    setInputValue('');
    setImgSrc('/public/images/Group 18 (1).png');
  }

  function handleClearInput2() {
    setInputValue2('');
    setImgSrc2('/public/images/Group 18 (1).png');
  }

  const taskUpdateHandle = (e) =>{
    e.preventDefault();
    const form =e.target;
    const title = form.title.value;
    const textarea = form.textarea.value;
    const substak1 = form.substak1.value;
    const substak2 = form.substak2.value;
    const status = form.status.value;
    const update = {title, textarea, substak1, substak2, status}

   fetch(`http://localhost:4000/use/${load._id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(update)
   })
   .then(res =>res.json())
   .then(data =>{
    console.log(data);
    if(data.modifiedCount> 0){
    alert('updated succesfully')
    }
    })
    }

    return (
    <div className="bg-[#F4F7FD] w-full min-h-[calc(100vh-120px)] p-5">
   <Link to="/board">
   <button className="btn  hover:bg-[#F4F7FD] rounded-full bg-[#635FC7] text-white">
   <p className=" font-semibold">Go To Board</p>
   </button>
  </Link>

    <div className="absolute left-[3%] md:left-[41%] lg:left-[41%] 
      top-[18%] md:top-[20%] lg:top-[20%]
    ">
    <div className=" w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF] h-[675px] p-5  ">
    <div className="">   

   <div className="flex  relative  ">
   <h3 className="font-bold text-black text-2xl  ">Add New Task</h3>
  </div>

    <form 
  onSubmit={taskUpdateHandle}
     className="mt-5">
    <label className="text-xl  font-semibold text-gray-500 ">Title</label> <br />
    <input className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400 " 
    type="text"
    name="title"
    defaultValue={load?.title}
    required
    placeholder=""/> <br />

    <label className="text-xl  font-semibold text-gray-500 ">Description</label> <br />
    <textarea className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2
     border-[#E4EBFA] rounded-sm text-xl p-2 h-[112px] text-gray-400 " 
     id="" cols="30" rows="10"
     type="text"
     name="textarea"
     defaultValue={load?.textarea}
     required
     placeholder="e.g. Its always good to take a break. 
     This 15 minute break will 
     recharge the batteries a little."
     
     >
    
    </textarea> <br />
    <label className="text-xl mt-5 font-semibold text-gray-500">Subtasks</label>
      <div className="flex items-center gap-3 relative">
        <input
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          placeholder="e.g. Make coffee"
          name="substak1"
          defaultValue={load?.substak1}         
          onChange={handleInputChange}
     
        />

        <img
          className="h-[15px] w-[15px]"
          src={imgSrc}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleClearInput}
        />
      </div>

      <div className="flex items-center mt-3 mb-3 gap-3 relative">
        <input
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          placeholder="e.g. Drink coffee & smile"
          name="substak2"
          defaultValue={load?.substak2}
          onChange={handleInputChange2}

        />
  
        <img
          className="h-[15px] w-[15px]"
          src={imgSrc2}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleClearInput2}
        />
      </div>

      <button className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#F4F7FD] rounded-full mb-2 font-bold text-[#635FC7]">
        + Add New Column
       </button>

      <label className="text-xl  font-semibold text-gray-500 ">Status</label> <br />
      <div className="flex items-center mt-1 mb-2 gap-3">
      <p className="w-[295px]  md:w-[416px] lg:w-[416px] border-2 text-xs mb-2  border-solid 
      border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
      {taskdata333.map((task, index) => (
      <select key={index}  className="pr-[170px] md:pr-[300px] lg:pr-[300px] text-xl font-semibold  -mt-2 bg-white" 
       name="status"
      defaultValue={load?.status}
      id=""
  onChange={(e) => handleStatusChange(e.target.value)}>
  <option value="todo">{task.column1}</option>
  <option value="doing">{task.column2}</option>
  <option value="done">{task.column3}</option>
  </select>
   ))}
   </p>
  </div>

<input className="w-[295px] hover:bg-[#F4F7FD] hover:text-[#635FC7] md:w-[416px] font-bold lg:w-[416px]
  h-[40px] bg-[#635FC7] text-white rounded-full "
  type="submit" value="Save Chenge" />
  </form>
  </div>
  </div>
        </div>
        <Mainbord taskStatus={taskStatus} taskdata333={taskdata333}></Mainbord>
        </div>
    );
};

export default updateTask;