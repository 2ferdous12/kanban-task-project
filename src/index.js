
import { useEffect, useState } from "react";
import UpdateTask from "../component/updateTask";

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
  console.log(selectedTask)
  useEffect(() => {
    fetch("http://localhost:9000/use")
      .then((res) => res.json())
      .then((data) => setTaskdata333(data));
  }, []);




  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const [imgSrc, setImgSrc] = useState('/images/Group 18.png');
  const [imgSrc2, setImgSrc2] = useState('/images/Group 18.png');
  const [taskdata444, serTaskdata333] = useState([]);
  const [taskStatus, setTaskStatus] = useState('todo');



  useEffect(() =>{
      fetch('http://localhost:9000/users')
      .then(res => res.json())
      .then(data => serTaskdata333(data))
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
    <div className="grid grid-cols-1 w-[375px] md:w-[768px] h-[50px] lg:w-[1100px] md:grid-cols-3 lg:grid-cols-3">
      {/* Todo Column */}
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
                onClick={() => setSelectedTask(task)}>

                <p className="text-xl font-semibold text-balance">  {task.title}</p>
                <p className="text-gray-500 font-semibold">{task.substak1} </p>
                <p className="text-gray-500 font-semibold">{task.substak2}</p>

              </div>
            ))}
        </div>
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
 
  <p className="font-semibold cursor-pointer text-gray-500">Edit Board</p>
  <p onClick={()=>document.getElementById('my_modal_5550000').showModal()}
  className="font-semibold cursor-pointer text-gray-500">Edit card</p>
  <dialog id="my_modal_5550000" className="modal modal-bottom sm:modal-middle">
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
    <input className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400 " 
    type="text"
    name="title"
    required
    placeholder=""/> <br />

    <label className="text-xl  font-semibold text-gray-500 ">Description</label> <br />
    <textarea className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2
     border-[#E4EBFA] rounded-sm text-xl p-2 h-[112px] text-gray-400 " 
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
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
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
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
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
    {taskdata444.map((task, index) => (
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
</div>
</dialog>
  
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
      {/* Doing Column */}
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
                key={index} onClick={() => setSelectedTask(task)}
                className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]">
                <p className="text-xl font-semibold">{task.title}</p>
                <p className="text-gray-500 font-semibold">
                  {task.substak1}
                </p>
                <p className="text-gray-500 font-semibold">
                  {task.substak2}
                </p>
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
                key={index} onClick={() => setSelectedTask(task)}
                className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]"
              >
                <p className="text-xl font-semibold">{task.title}</p>
                <p className="text-gray-500 font-semibold">
                  {task.substak1}
                </p>
                <p className="text-gray-500 font-semibold">
                  {task.substak2}
                </p>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Mainbord;





import { useEffect, useState } from "react";
import UpdateTask from "../component/updateTask";

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
  console.log(selectedTask)
  useEffect(() => {
    fetch("http://localhost:9000/use")
      .then((res) => res.json())
      .then((data) => setTaskdata333(data));
  }, []);




  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const [imgSrc, setImgSrc] = useState('/images/Group 18.png');
  const [imgSrc2, setImgSrc2] = useState('/images/Group 18.png');
  const [taskdata444, serTaskdata333] = useState([]);
  const [taskStatus, setTaskStatus] = useState('todo');



  useEffect(() =>{
      fetch('http://localhost:9000/users')
      .then(res => res.json())
      .then(data => serTaskdata333(data))
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
    <div className="grid grid-cols-1 w-[375px] md:w-[768px] h-[50px] lg:w-[1100px] md:grid-cols-3 lg:grid-cols-3">
      {/* Todo Column */}
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
                onClick={() => setSelectedTask(task)}>

                <p className="text-xl font-semibold text-balance">  {task.title}</p>
                <p className="text-gray-500 font-semibold">{task.substak1} </p>
                <p className="text-gray-500 font-semibold">{task.substak2}</p>

              </div>
            ))}
        </div>
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
 
  <p className="font-semibold cursor-pointer text-gray-500">Edit Board</p>
  <p 
  className="font-semibold cursor-pointer text-gray-500">Edit card</p>
  
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


      {/* Doing Column */}
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
                key={index} onClick={() => setSelectedTask(task)}
                className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]">
                <p className="text-xl font-semibold">{task.title}</p>
                <p className="text-gray-500 font-semibold">
                  {task.substak1}
                </p>
                <p className="text-gray-500 font-semibold">
                  {task.substak2}
                </p>
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
                key={index} onClick={() => setSelectedTask(task)}
                className="w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md shadow-md bg-[#FFFFFF]"
              >
                <p className="text-xl font-semibold">{task.title}</p>
                <p className="text-gray-500 font-semibold">
                  {task.substak1}
                </p>
                <p className="text-gray-500 font-semibold">
                  {task.substak2}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mainbord;


// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {

//     console.log('delted confrimed')
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       if(data.deletedCount > 0){
//         Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               })
//               const remaining = useload.filter(task => task._id !== _id);
//               setUseload(remaining)
//       }
//     })
//   }
// });

// const handleDelete = _id =>{
//   console.log('delete', _id);
//   fetch(`http://localhost:9000/users/${_id}`, {
// method: "DELETE"

//   })
//   .then(res => res.json())
//   .then(data => {
//       console.log(data);
//       if(data.deletedCount> 0){
//           alert('deleted success')
//       }
//   })
//  }

//       {/* {
//           users.map((card, _id) => <Mainbord key={_id} handleDelete={handleDelete} card={card}></Mainbord>)
//         } */}
//         {taskdata.map((task, index) => (
//           <div key={index} className="bg-gray-600">{/* Assuming each task has a unique identifier */}
//            {/* Render task data here */}
//            <p>{task.title}</p>
//            {/* Assuming task has a 'name' property */}
//          </div>
//     ))}
//     const [taskdata, serTaskdata] = useState([]);

//     useEffect(() =>{
//         fetch('http://localhost:9000/use')
//         .then(res => res.json())
//         .then(data => serTaskdata(data))
//     })
    
//     console.log(taskdata)