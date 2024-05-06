import { Link } from "react-router-dom";

const mainhome = () => {

return (
<div className="min-h-[calc(100vh-90px)] w-full bg-[#F4F7FD] ">
<div className=" bg-[#F4F7FD] 
 w-full flex justify-center items-center min-h-[calc(100vh-120px)] ">
 <div className="text-center space-y-3">
 <h1 className="text-gray-500 text-xl ">
 This board is empty. Create a new column to get started.
 </h1>
 {/* to="/platforms" */}
 <Link to="/board"
 className={`btn text-white border-none
  h-[50px] bg-[#635FC7] font-semibold text-xl
   hover:bg-[#A8A4FF] rounded-full`}>+ Add New Column
</Link>

 </div>
</div>
</div>

    );
};

export default mainhome;