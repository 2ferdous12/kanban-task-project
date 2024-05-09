

const option = ({data,setTaskStatus }) => {
    const {column1, column2, column3} = data;
    const handleStatusChange = (newStatus) => {
        setTaskStatus(newStatus);
      };
  
    return (
        <div>
        <p
 className="w-[295px]  md:w-[416px] lg:w-[416px] border-2 text-xs mb-2  border-solid
 border-gray-300 rounded-md mx-auto p-3 mt-2 h-[40px]">
<select  className="pr-[300px] text-xl font-semibold  -mt-2 bg-white" 
   name="status"
  id=""
 onChange={(e) => handleStatusChange(e.target.value)}>
  <option value="todo">{column1}</option>
  <option value="doing">{column2}</option>
  <option value="done">{column3}</option>
</select>
 </p>
        </div>
    );
};

export default option;