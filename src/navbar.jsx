import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CreateBoard from "./component/createBoard";
import CreateNewTask from "./component/createNewTask";

  const navbar = () => {
  const [theme, setTheme] = useState('light')
  const [divOpen, setDivOpen] = useState(false);
  const [edit, setEdit] = useState(null)
  const [taskdata333, setTaskdata333] = useState([]);
  const [Taskda, setTaskda] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/use")
      .then((res) => res.json())
      .then((data) => setTaskda(data));
  }, []);
  
  useEffect(() => {
      fetch("http://localhost:9000/users")
        .then((res) => res.json())
        .then((data) => setTaskdata333(data));
    }, []);


  const handleDelete = _id => {
      console.log('clicked')
      if (taskdata333.length > 0) {
      alert("Data cannot be deleted until the task is populated.");
      return;
      }
    
      if (!_id) {
        alert("No task data available.");
        return;
      }

      fetch(`http://localhost:9000/users/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remining = Taskda.filter(user => user._id !== _id)
            setTaskda(remining)
          }
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          alert("An error occurred while deleting data.");
        });
    };

  const toggleDiv = () => {
  setDivOpen(!divOpen);
  };

  const handleToggle = (e) =>{
  if(e.target.checkbox){
   setTheme('dark')
  }
  else{
  setTheme('light')
  }
  }

    return (
<div className="navbar bg-[#FFFFFF] h-[90px] shadow-md">
  <div className="navbar-start">
  <div className=" block md:hidden lg:hidden flex gap-4">  

    <div>
      <img className='w-[30px] h-[30px] ml-2' src="/images/Group 15.png" alt="" onClick={toggleDiv} />
      {divOpen && (
      <div className="absolute top-20 left-[15%]">
      <div className="space-y-1 w-[275px] shadow-lg bg-[#FFFFFF] mt-4 p-3 rounded-lg  list-none">
          <h1 className="text-xl pb-3 font-semibold text-gray-500">ALL BOARDS ({taskdata333.length})</h1>     
              <NavLink to="/" 
              className={({isActive}) => isActive ? 'flex pb-1 text-white items-center text-xl   md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
               : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
              >
              <img className="pr-3 text-white" 
              src="/images/fluent_board-split-24-regular (1).png"
               alt="" />
               Platform Launch</NavLink>
      
            
              <NavLink    to="/marketing" 
              className={({isActive}) => isActive ? 'flex text-white pb-1 items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
              : ' flex items-center text-xl f md:pl-3 font-semibold pl-1 pb-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
                >
              <img className="pr-3" 
              src="/images/fluent_board-split-24-regular (1).png" alt="" />
                Marketing Plan</NavLink>
      
         
              <NavLink  to="/roadmap" 
              className={({isActive}) => isActive ? 'flex pb-1 text-white items-center text-xl f md:pl-3 font-semibold pl-1 lg:pl-4 w-[200px]  md:w-[240px] bg-[#635FC7]  hover:text-[#635FC7] hover:bg-[#F4F7FD]  lg:w-[270px] rounded-r-full  h-[45px]  '
              : ' flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4 w-[200px]   md:w-[240px] lg:w-[270px] rounded-r-full  h-[50px] text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD] '}
                >
              <img className="pr-3" 
              src="/images/fluent_board-split-24-regular (1).png" alt="" />
                Roadmap</NavLink>
             
              <div onClick={()=>document.getElementById('my_modal_5').showModal()}
                className=' flex items-center text-xl f md:pl-3 pb-1
         font-semibold pl-1 pr-1 lg:pl-4 w-[220px]  md:w-[240px] lg:w-[270px] 
         rounded-r-full h-[50px] text-[#635FC7] hover:text-[#635FC7]
          hover:bg-[#F4F7FD] '>
              <img  className="pr-3 text-[#635FC7] "
               src="/images/fluent_board-split-24-regular (1).png" alt="" />
               + Create New Board
               
 <dialog id="my_modal_5" className="modal   modal-bottom sm:modal-middle">
<CreateBoard></CreateBoard>
</dialog>     
               
</div>
 <div className="flex justify-center ">
<div className="bg-[#F4F7FD] rounded-lg mt-1
 w-[250px] h-[50px] flex justify-center items-center">
<label className="flex cursor-pointer gap-4 text-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input 
  onChange={handleToggle}
  type="checkbox"
   value="dark"
    className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
</div>
           <p>
          </p>
        </div>
        </div>
      )}
    </div>
  <p className=" text-2xl w-[250px] font-semibold text-black ">Platform Launch </p>
   </div>
    <div className='w-[300px] md:w-[250px] lg:w-[300px]  border-r-0 md:border-r-0 lg:border-r-2 pl-5'>   
    <img className='w-[150px]  hidden md:block lg:block h-[30px]' src="/images/Group 16 (1).png" alt="" />
   </div>
   <div className="w-[210px] md:w-[250px] lg:w-[220px] hidden md:block lg:block">

      {taskdata333
      .map((task, index) => (
       <div key={index} >
      <p className='text-2xl pl-0 md:pl-0 lg:pl-8 font-semibold text-black  '>{task.name}</p>
      </div>
    ))}

  </div>
  </div>

  <div className="navbar-end space-x-3 pr-5">
   <div className='w-[50px] md:w-[180px] lg:w-[180px] bg-[#A8A4FF]
    p-3 h-[32px] md:h-[48px] lg:h-[48px] mt-1 rounded-full flex justify-center items-center'> 
    {
      <CreateNewTask></CreateNewTask>
    }
   </div>
   <div>
 <div id="todo">
          {taskdata333
            .map((task, index) => (
            <div key={index}>
            <img onClick={() => setEdit(task)} className="ml-3 cursor-pointer mr-3 w-[4px] h-[20px] mt-1 " src="/images/Group 6.png" alt="" />
            </div>
            ))}
        </div>

 {edit && (
   <div className=" top-[9%] right-[22%]
   w-[180px] h-[90px] p-5 space-y-2 bg-[#FFFFFF] shadow-md rounded-lg absolute">
  <Link to={`/updateBoard/${edit._id}`}
   className="font-semibold cursor-pointer text-gray-500">Edit Board</Link>
  <p onClick={() => handleDelete(edit._id)} 
  className="font-semibold cursor-pointer text-gray-500">Delete board</p>

   </div>
 )}
 </div>
</div>
</div>
    );
};

export default navbar;