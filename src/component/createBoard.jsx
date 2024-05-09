import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
const createBoard = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const [borderColor3, setBorderColor3] = useState('');
  const [imgSrc, setImgSrc] = useState('/images/Group 18.png');
  const [imgSrc2, setImgSrc2] = useState('/images/Group 18.png');
  const [imgSrc3, setImgSrc3] = useState('/images/Group 18.png');

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setBorderColor('');
    setImgSrc('/images/Group 18.png');
  }

  function handleInputChange2(event) {
    setInputValue2(event.target.value);
    setBorderColor2('');
    setImgSrc2('/images/Group 18.png');
  }
  function handleInputChange3(event) {
    setInputValue3(event.target.value);
    setBorderColor3('');
    setImgSrc3('/images/Group 18.png');
  }

  function handleClearInput() {
    setInputValue('');
    setBorderColor('red');
    setImgSrc('/public/images/Group 18 (1).png');
  }

  function handleClearInput2() {
    setInputValue2('');
    setBorderColor2('red');
    setImgSrc2('/public/images/Group 18 (1).png');
  }
  function handleClearInput3() {
    setInputValue3('');
    setBorderColor3('red');
    setImgSrc3('/public/images/Group 18 (1).png');
  }


const handleBoard = (event) =>{
  event.preventDefault();
 const form =event.target;

 const name = form.name.value;
 const column1 = form.column1.value;
 const column2 = form.column2.value;
 const column3 = form.column3.value;
const user = {name, column1, column2, column3}
 console.log(user);
 fetch(`http://localhost:9000/users?name=${name}`)
 .then((res) => res.json())
 .then((data) => {
   if (data.length > 0) {
     alert("Board with this name already exists");
   } else {
     const user = { name, column1, column2, column3 };
     console.log(user);

     fetch("http://localhost:9000/users", {
       method: "POST",
       headers: {
         "content-Type": "application/json",
       },
       body: JSON.stringify(user),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.insertedId) {
           alert("Board name added successfully");
           form.reset();
         }
       });
   }
 });

//  fetch('http://localhost:9000/users', {
//   method: 'POST',
//   headers: {
//     "content-Type": "application/json",
//   },
//   body: JSON.stringify(user)
//  })
//  .then(res => res.json())
//  .then(data => {
//   console.log(data)
//   if(data.insertedId){
//     alert('Board name added successfully')
//     form.reset();
//   }
//  })

}
// const [card, setCard] = useState([])
// useEffect(() =>{
//   fetch('/fake.json')
//   .then(res => res.json())
//   .then(data =>setCard(data))
// }, [])
// const items = card && card.find(item=> item.column1 == card.column1)
// console.log(items)



// console.log(items)
// useEffect(() =>{
//   fetch('http://localhost:9000/users')
//   .then(res => res.json())
//   .then(data =>setCard(data))
// }, [])


    return (
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
    onSubmit={handleBoard}
     className="mt-5">
    <label className="text-xl  font-semibold text-gray-500 ">Name</label> <br />
    <input className="w-[295px]  md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400 " 
    type="text"
    name="name"
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
          value={inputValue}
          onChange={handleInputChange}
          style={{ borderColor: borderColor }}
        />
        {borderColor === 'red' && inputValue === '' && (
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 font-semibold text-red-500">
            Cant be empty
          </span>
        )}
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
          value={inputValue2}
          onChange={handleInputChange2}
          style={{ borderColor: borderColor2 }}
        />
        {borderColor2 === 'red' && inputValue2 === '' && (
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 font-semibold text-red-500">
            Cant be empty
          </span>
        )}
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
          value={inputValue3}
          onChange={handleInputChange3}
          style={{ borderColor: borderColor3 }}
        />
        {borderColor3 === 'red' && inputValue3 === '' && (
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 font-semibold text-red-500">
            Cant be empty
          </span>
        )}
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
  type="submit" value="Create New Board" />


    
    </form>
 </div>
      </div>
</div>
    );
};

export default createBoard;