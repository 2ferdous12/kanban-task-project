import { useLoaderData } from "react-router-dom";
import Mainbord from "./mainbord";
const board = () => {
  const columnHandle = (e) =>{
    e.preventDefault();
    }
  const users = useLoaderData();


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
    <h1 onClick={()=>document.getElementById('my_modal_55').showModal()}
    className="text-xl font-semibold">+ New Column</h1>

<dialog id="my_modal_55" className="modal modal-bottom sm:modal-middle">
<div className="mx-auto">
<div className="modal-box w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF] h-[480px] p-5  ">
 <div className=""> 

 <div className="flex  relative  ">
<h3 className="font-bold text-black text-2xl  ">Add New Board</h3>
<div>
<form method="dialog" className="absolute top-[22%] right-0">
        <button className="">
        <img className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
        </button>
      </form>
</div>
</div>

    <form 
    onSubmit={columnHandle}
     className="mt-5">
    <label className="text-xl  font-semibold text-gray-500 ">Name</label> <br />
    <input className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400 " 
    type="text"
    name="name"
    required
     placeholder="e.g. Web Design"/> <br />
    
    <label className="text-xl mt-5 font-semibold text-gray-500 ">Columns</label>
    <div className="flex items-center gap-3">
    <input className="w-[264px]  md:w-[385px] lg:w-[385px]  mt-2 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black " 
    type="text"   required name="column1"/>
     <img className="h-[20px] " src="/images/Group 18.png" alt="" />
    </div>
    
    <div className="flex items-center mt-3 mb-3 gap-3">
    <input className="w-[264px]  md:w-[385px] lg:w-[385px] border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black " 
    type="text"   required name="column2"/>
    <img className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
    </div>

    <div className="flex items-center mt-3 mb-3 gap-3">
    <input className="w-[264px]  md:w-[385px] lg:w-[385px] border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black " 
    type="text"   required name="column3"/>
    <img className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
    </div>
    
    <button className="w-[295px] md:w-[416px] font-bold text-[#635FC7]  lg:w-[416px] h-[40px] bg-[#F4F7FD] rounded-full mb-5 ">+ Add New Column</button>

<input className="w-[295px] font-bold md:w-[416px] hover:bg-[#F4F7FD] hover:text-[#635FC7] lg:w-[416px]
  h-[40px] bg-[#635FC7] text-white rounded-full "
  type="submit" value="Create New Board" />


    
    </form>
 </div>
      </div>
</div>
</dialog>
    </div>
    </div>
      </div>
    </div>
  );
};

export default board;