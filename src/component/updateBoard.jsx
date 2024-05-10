
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const updateBoard = () => {

    const loadBoard = useLoaderData();

    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [imgSrc, setImgSrc] = useState('/images/Group 18.png');
    const [imgSrc2, setImgSrc2] = useState('/images/Group 18.png');
    const [imgSrc3, setImgSrc3] = useState('/images/Group 18.png');
  
    function handleInputChange(event) {
      setInputValue(event.target.value);
      setImgSrc('/images/Group 18.png');
    }
  
    function handleInputChange2(event) {
      setInputValue2(event.target.value);
      setImgSrc2('/images/Group 18.png');
    }
    function handleInputChange3(event) {
      setInputValue3(event.target.value);
      setImgSrc3('/images/Group 18.png');
    }
  
    function handleClearInput() {
      setInputValue('');
      setImgSrc('/public/images/Group 18 (1).png');
    }
  
    function handleClearInput2() {
      setInputValue2('');
      setImgSrc2('/public/images/Group 18 (1).png');
    }
    function handleClearInput3() {
      setInputValue3('');
      setImgSrc3('/public/images/Group 18 (1).png');
    }

  
  const handleUpdateBoard = (event) =>{
    event.preventDefault();
   const form =event.target;
   const name = form.name.value;
   const column1 = form.column1.value;
   const column2 = form.column2.value;
   const column3 = form.column3.value;
   const updateBoard = {name, column1, column2, column3}

  fetch(`http://localhost:9000/users/${loadBoard._id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(updateBoard)
   })
   .then(res =>res.json())
   .then(data =>{
    console.log(data);
    if(data.modifiedCount> 0){
    alert('updated succesfully')
    }
   })
  
  }
    
    return (
        <div className="bg-[#F4F7FD] w-full min-h-[calc(100vh-120px)] p-5">
            <Link to="/board">
   <button className="btn">
   <p className="text-xl font-semibold">Go Main Page</p>
   </button>
     </Link>
       
     <div  className="absolute left-[41%] top-[20%]">
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
    onSubmit={handleUpdateBoard}
     className="mt-5">
    <label className="text-xl  font-semibold text-gray-500 ">Name</label> <br />
    <input className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400 " 
    type="text"
    name="name"
    defaultValue={loadBoard?.name}
    required
   placeholder="e.g. Web Design"/> <br />
    
    <label className="text-xl mt-5 font-semibold text-gray-500 ">Columns</label>
    <div className="flex items-center gap-3 relative">
        <input
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          required
          placeholder=""
          name="column1"
          defaultValue={loadBoard?.column1}
          onChange={handleInputChange}
        />

        <img
          className="h-[15px] w-[15px]"
          src={imgSrc}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleClearInput}
        />
      </div>

      <div className="flex items-center mt-2  mb-2 gap-3 relative">
        <input
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          required
          placeholder=""
          name="column2"
          defaultValue={loadBoard?.column2}
         
          onChange={handleInputChange2}
        />

        <img
          className="h-[15px] w-[15px]"
          src={imgSrc2}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleClearInput2}
        />
      </div>

      <div className="flex items-center mt-2 mb-3 gap-3 relative">
        <input
          className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 rounded-sm text-xl p-3 h-[40px] text-black"
          type="text"
          required
          placeholder=""
          name="column3"
          defaultValue={loadBoard?.column3}
          onChange={handleInputChange3}
        />

        <img
          className="h-[15px] w-[15px]"
          src={imgSrc3}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleClearInput3}
        />
      </div>
    
    <button 
     className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#F4F7FD]
      rounded-full mb-5 ">+ Add New Column</button>

   <input className="w-[295px] md:w-[416px] lg:w-[416px]
   h-[40px] bg-[#635FC7] text-white rounded-full "
  type="submit" value="save Chenge" />

    </form>
    </div>
    </div>
     </div>
     </div>
    </div>
    );
};

export default updateBoard;