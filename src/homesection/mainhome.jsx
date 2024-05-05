import { useState } from "react";


const mainhome = () => {
  const [showEmptyBoard, setShowEmptyBoard] = useState(true);

  const toggleSections = () => {
    setShowEmptyBoard(!showEmptyBoard);
  };
return (
<div className="min-h-[calc(100vh-90px)] w-full bg-[#F4F7FD] ">
<div className="min-h-[calc(100vh-90px)] w-full bg-[#F4F7FD]">
      {showEmptyBoard ? (

<div className=" bg-[#F4F7FD] 
 w-full flex justify-center items-center min-h-[calc(100vh-120px)] ">
 <div className="text-center space-y-3">
 <h1 className="text-gray-500 text-xl ">
 This board is empty. Create a new column to get started.
 </h1>
 {/* to="/platforms" */}
 <div onClick={toggleSections}
 className={`btn text-white border-none
  h-[50px] bg-[#635FC7] font-semibold text-xl
   hover:bg-[#A8A4FF] rounded-full`}>+ Add New Column
</div>
 </div>
</div>
) : (
        <div className="bg-[#F4F7FD] w-full flex justify-center items-center min-h-[calc(100vh-120px)]">
          {/* Content for the "Add Column" section goes here */}
          <div>
          <h1>hi</h1>
          </div>
        </div>
      )}
    </div>
</div>

    );
};

export default mainhome;