Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    console.log('delted confrimed')
    fetch(`http://localhost:5000/users/${_id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })
              const remaining = useload.filter(task => task._id !== _id);
              setUseload(remaining)
      }
    })
  }
});

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

      {/* {
          users.map((card, _id) => <Mainbord key={_id} handleDelete={handleDelete} card={card}></Mainbord>)
        } */}
        {taskdata.map((task, index) => (
          <div key={index} className="bg-gray-600">{/* Assuming each task has a unique identifier */}
           {/* Render task data here */}
           <p>{task.title}</p>
           {/* Assuming task has a 'name' property */}
         </div>
    ))}
    const [taskdata, serTaskdata] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:9000/use')
        .then(res => res.json())
        .then(data => serTaskdata(data))
    })
    
    console.log(taskdata)