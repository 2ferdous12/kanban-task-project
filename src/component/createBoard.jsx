

const createBoard = () => {
    return (
        <div className="modal-box  bg-[#FFFFFF] h-[430px] p-5 pl-9 md:pl-12 lg:pl-12 ">
 <div className="w-[335px] md:w-[450px] lg:w-[450px]">
               
 <h3 className="font-bold text-black text-2xl  ">Add New Board</h3>
    <form  className="mt-5">
    
    <label className="text-xl  font-semibold text-gray-500 ">Name</label> <br />
    <input className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xs p-3 h-[40px] text-gray-400 " 
    type="text"
     placeholder="e.g. Web Design"/>
    
    <label className="text-xl mt-5 font-semibold text-gray-500 ">Columns</label>
    <div className="flex items-center gap-3">
    <input className="w-[264px]  md:w-[385px] lg:w-[385px]  mt-2 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black " 
    type="text"
   />
     <img className="h-[20px] " src="/images/Group 18.png" alt="" />
    </div>
    
    <div className="flex items-center mt-3 mb-3 gap-3">
    <input className="w-[264px]  md:w-[385px] lg:w-[385px] border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black " 
    type="text"
    />
    <img className="h-[20px] " src="/images/Group 18.png" alt="" />
    </div>
    
    <button className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#F4F7FD] rounded-full mb-5 ">+ Add New Column</button>
    <button className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#635FC7] text-white rounded-full ">Create New Board</button>
    
    </form>
 </div>
      </div>
    );
};

export default createBoard;