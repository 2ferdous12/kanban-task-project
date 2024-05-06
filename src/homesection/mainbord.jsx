

const mainbord = ({card}) => {
    const  {column1, column2, column3} = card;
console.log(card)
    return (
<div className="grid grid-cols-1  w-[375px] md:w-[768px]  lg:w-[1100px]  md:grid-cols-3 lg:grid-cols-4 gap-5">

<div className="w-[280px] md:w-[260px] lg:w-[260px] mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center gap-2"> 
    <p className="bg-[#49C4E5] w-[20px] h-[20px] rounded-full"></p>
    <h1 className="text-gray-500 text-xl font-semibold">{column1}</h1>
    <p className="text-gray-500 text-xl font-semibold">(<span>hi</span>)</p>
   </div>
</div>

<div className="w-[280px] md:w-[260px] lg:w-[260px] mx-auto md:mx-0 lg:mx-0">
<div className=" flex items-center gap-2"> 
    <p className="bg-[#8471F2] w-[20px] h-[20px] rounded-full"></p>
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

    <div className="w-[240px] 
     h-[814px] mt-16 hidden md:hidden  cursor-pointer lg:block mx-auto  bg-[#eef1f1]">
    <div className="flex justify-center   h-[814px] items-center">
    <h1 className="text-xl font-semibold">+ New Column</h1>
    </div>
    </div>
    
</div>
    );
};

export default mainbord;