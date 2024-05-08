// import { useLoaderData } from "react-router-dom";
// import ColumnSection from "../component/columnSection";

import { useEffect, useState } from "react";

const mainbord = ({card, }) => {
    const  {_id, column1, column2, column3} = card;
    const [taskdata, serTaskdata] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:9000/use')
        .then(res => res.json())
        .then(data => serTaskdata(data))
    })
    
    const handleDelete = _id =>{
        console.log('delete', _id);
        fetch(`http://localhost:9000/users/${_id}`, {
      method: "DELETE"
      
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount> 0){
                alert('deleted success')
            }
        })
       }
      


    return (
<div className="grid grid-cols-1 
 w-[375px] md:w-[768px] h-[50px]  lg:w-[1100px] 
  md:grid-cols-3 lg:grid-cols-3 ">

<div className="w-[280px] md:w-[260px] lg:w-[260px]  mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center  gap-2 mb-7"> 
    <p className="bg-[#49C4E5] w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column1}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>{taskdata.length}</span>)</p>
</div>
<div id="todo">
{taskdata.map((task, index) => (
          <div key={index} className=" 
          w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md
          shadow-md bg-[#FFFFFF]">
           <p className="text-xl font-semibold text-balance">{task.title}</p>
           <p className="text-gray-500 font-semibold">{task.substak1}</p>
           <p className="text-gray-500 font-semibold">{task.substak2}</p>
         </div>
    ))}
   </div>
</div>

<div className="w-[280px] md:w-[260px] lg:w-[260px]  
 md:pl-10 lg:pl-0 mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center gap-2 mb-7"> 
    <p className="bg-[#8471F2]  w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column2}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>hi</span>)</p>
   </div>
   <div id="todo">
{taskdata.map((task, index) => (
          <div key={index} className=" 
          w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md
            shadow-md bg-[#FFFFFF]">
           <p className="text-xl font-semibold">{task.title}</p>
           <p className="text-gray-500 font-semibold">{task.substak1}</p>
           <p className="text-gray-500 font-semibold">{task.substak2}</p>
         </div>
    ))}
   </div>
</div>


<div className="w-[280px] md:w-[260px] lg:w-[260px]  lg:pl-0   mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center gap-2 mb-7"> 
    <p className="bg-[#67E2AE] w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column3}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>hi</span>)</p>
   </div>
   <div id="todo">
{taskdata.map((task, index) => (
          <div key={index} className=" 
          w-[280px] md:w-[260px] lg:w-[260px] mt-4 mb-4 p-2 space-y-1 rounded-md
          shadow-md bg-[#FFFFFF]">
           <p className="text-xl font-semibold">{task.title}</p>
           <p className="text-gray-500 font-semibold">{task.substak1}</p>
           <p className="text-gray-500 font-semibold">{task.substak2}</p>
         </div>
    ))}
   </div>
</div>


    
</div>
    );
};

export default mainbord;