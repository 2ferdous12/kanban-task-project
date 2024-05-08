
const deleteBord = ({data}) => {
const {_id} = data;
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
        <div>
   <p onClick={() => handleDelete(_id)} className="font-bold cursor-pointer   text-red-600">Delete Board</p>
        </div>
    );
};

export default deleteBord;