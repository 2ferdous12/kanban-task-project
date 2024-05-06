import { Link } from "react-router-dom";


const createBoard = () => {

const handleBoard = (event) =>{
  event.preventDefault();
 const form =event.target;

 const name = form.name.value;
 const column1 = form.column1.value;
 const column2 = form.column2.value;
 const column3 = form.column3.value;
const user = {name, column1, column2, column3}
 console.log(user);


 fetch('http://localhost:5000/users', {
  method: 'POST',
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify(user)
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
<div className="mx-auto">
<div className="modal-box w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF] h-[480px] p-5  ">
 <div className="">           
 <h3 className="font-bold text-black text-2xl  ">Add New Board</h3>
    <form 
    onSubmit={handleBoard}
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
    <img className="h-[20px] " src="/images/Group 18.png" alt="" />
    </div>

    <div className="flex items-center mt-3 mb-3 gap-3">
    <input className="w-[264px]  md:w-[385px] lg:w-[385px] border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black " 
    type="text"   required name="column3"/>
    <img className="h-[20px] " src="/images/Group 18.png" alt="" />
    </div>
    
    <button className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#F4F7FD] rounded-full mb-5 ">+ Add New Column</button>

<input className="w-[295px] md:w-[416px] lg:w-[416px]
  h-[40px] bg-[#635FC7] text-white rounded-full "
  type="submit" value="Create New Board" />


    
    </form>
 </div>
      </div>
</div>
    );
};

export default createBoard;