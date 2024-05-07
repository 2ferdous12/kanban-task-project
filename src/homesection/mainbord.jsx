// import { useLoaderData } from "react-router-dom";
// import ColumnSection from "../component/columnSection";

import { useEffect, useState } from "react";

const mainbord = ({card, }) => {
    const  {column1, column2, column3} = card;
    const [taskdata, serTaskdata] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:9000/use')
        .then(res => res.json())
        .then(data => serTaskdata(data))
    })
    
    console.log(taskdata)


    return (
<div className="grid grid-cols-1  w-[375px] md:w-[768px] bg-green-600 h-[50px]  lg:w-[1100px]  md:grid-cols-3 lg:grid-cols-3 gap-5">

<div className="w-[280px] md:w-[260px] lg:w-[260px] mx-auto md:mx-0 lg:mx-0">
<div className="">
<div className=" flex items-center mb-5 gap-2"> 
    <p className="bg-[#49C4E5] w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column1}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>{}</span>)</p>

</div>

<div id="todo">
{taskdata.map((task, index) => (
          <div key={index} className="">{/* Assuming each task has a unique identifier */}
           {/* Render task data here */}
           <p>{task.title}</p>
           {/* Assuming task has a 'name' property */}
         </div>
    ))}
   </div>

</div>

</div>

<div className="w-[280px] md:w-[260px] lg:w-[260px] mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center gap-2"> 
    <p className="bg-[#8471F2]  w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column2}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>hi</span>)</p>
   </div>
</div>

<div className="w-[280px] md:w-[260px] lg:w-[260px] mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center gap-2"> 
    <p className="bg-[#67E2AE] w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column3}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>hi</span>)</p>
   </div>
</div>


    
</div>
    );
};

export default mainbord;