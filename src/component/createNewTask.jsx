import { useEffect, useState } from "react";
import Mainbord from "../homesection/mainbord";
const createNewTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const [imgSrc, setImgSrc] = useState('/images/Group 18.png');
  const [imgSrc2, setImgSrc2] = useState('/images/Group 18.png');
  const [taskdata333, setTaskdata333] = useState([]);
  const [taskStatus, setTaskStatus] = useState('todo');



  useEffect(() =>{
      fetch('http://localhost:9000/users')
      .then(res => res.json())
      .then(data => setTaskdata333(data))
  })
  const handleStatusChange = (newStatus) => {
    setTaskStatus(newStatus);
  };
  function handleInputChange(event) {
    setInputValue(event.target.value);
    setBorderColor('');
    setImgSrc('/images/Group 18.png');
  }

  function handleInputChange2(event) {
    setInputValue2(event.target.value);
    setBorderColor2('');
    setImgSrc2('/images/Group 18.png');
  }

  function handleClearInput() {
    setInputValue('');
    setBorderColor('red');
    setImgSrc('/public/images/Group 18 (1).png');
  }

  function handleClearInput2() {
    setInputValue2('');
    setBorderColor2('red');
    setImgSrc2('/public/images/Group 18 (1).png');
  }


    const taskHandle = (e) =>{
        e.preventDefault();
        const form =e.target;

        const title = form.title.value;
        const textarea = form.textarea.value;
        const substak1 = form.substak1.value;
        const substak2 = form.substak2.value;
        const status = form.status.value;
       const use = {title, textarea, substak1, substak2, status}
        console.log(use);
       
       
        fetch('http://localhost:9000/use', {
         method: 'POST',
         headers: {
           "content-Type": "application/json",
         },
         body: JSON.stringify(use)
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
         if(data.insertedId){
           alert('Board name added successfully')
           form.reset();
         }
        })
    }

    return (
        <div>
  <a onClick={()=>document.getElementById('my_modal_555').showModal()}
  className=" hidden md:block lg:block cur font-semibold cursor-pointer text-xl
    text-white ">+ Add New Task</a>

<a onClick={()=>document.getElementById('my_modal_555').showModal()}
className=" block md:hidden lg:hidden 
    font-semibold text-3xl md:text-4xl lg:text-4xl
     cursor-pointer  text-white ">+</a>
        
<dialog id="my_modal_555" className="modal modal-bottom sm:modal-middle">
<div className="mx-auto">
<div className="modal-box w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF]
 h-[675px] p-5  ">
 <div className="">   

    
<div className="flex  relative  ">
<h3 className="font-bold text-black text-2xl  ">Add New Task</h3>
<div>
<form method="dialog" className="absolute top-[22%] right-0">
        <button className="">
        <img className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
        </button>
      </form>
</div>
</div>

    <form 
    onSubmit={taskHandle}
     className="mt-5">
    <label className="text-xl  font-semibold text-gray-500 ">Title</label> <br />
    <input className="w-[295px] text-balance  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400 " 
    type="text"
    name="title"
    required
    placeholder=""/> <br />

    <label className="text-xl  font-semibold text-gray-500 ">Description</label> <br />
    <textarea className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2
     border-[#E4EBFA] text-balance rounded-sm text-xl p-2 h-[112px] text-gray-400 " 
     id="" cols="30" rows="10"
     type="text"
     name="textarea"
     required
     placeholder="e.g. Its always good to take a break. 
     This 15 minute break will 
     recharge the batteries a little."
     
     >
    
    </textarea> <br />
    <label className="text-xl mt-5 font-semibold text-gray-500">Subtasks</label>
      <div className="flex items-center gap-3 relative">
        <input
          className="w-[264px] text-balance md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          placeholder="e.g. Make coffee"
          name="substak1"
          value={inputValue}
          onChange={handleInputChange}
          style={{ borderColor: borderColor }}
        />
        {borderColor === 'red' && inputValue === '' && (
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 font-semibold text-red-500">
            Cant be empty
          </span>
        )}
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
          className="w-[264px] text-balance md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          placeholder="e.g. Drink coffee & smile"
          name="substak2"
          value={inputValue2}
          onChange={handleInputChange2}
          style={{ borderColor: borderColor2 }}
        />
        {borderColor2 === 'red' && inputValue2 === '' && (
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 font-semibold text-red-500">
            Cant be empty
          </span>
        )}
        <img
          className="h-[15px] w-[15px]"
          src={imgSrc2}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleClearInput2}
        />
      </div>

      <button
       
        className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#F4F7FD] rounded-full mb-2 font-bold text-[#635FC7]">
        + Add New Column
      </button>

<label className="text-xl  font-semibold text-gray-500 ">Status</label> <br />

<div className="flex items-center mt-1 mb-2 gap-3">
<p
 className="w-[295px]  md:w-[416px] lg:w-[416px] border-2 text-xs mb-2  border-solid 
 border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
    {taskdata333.map((task, index) => (
      <select key={index}  className="pr-[300px] text-xl font-semibold  -mt-2 bg-white" 
   name="status"
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
  type="submit" value="Create Task" />

 
 </form>
 </div>
</div>
<Mainbord taskStatus={taskStatus} taskdata333={taskdata333}></Mainbord>
</div>
</dialog>
    </div>
    );
};

export default createNewTask;