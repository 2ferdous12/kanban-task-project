import { useEffect, useState } from "react";

const deleteBord = ({data}) => {
    const {_id} = data;


    const [taskdata333, setTaskdata333] = useState([]);

    const [Taskda, setTaskda] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9000/use")
        .then((res) => res.json())
        .then((data) => setTaskda(data));
    }, []);
    
    useEffect(() => {
        fetch("http://localhost:9000/users")
          .then((res) => res.json())
          .then((data) => setTaskdata333(data));
      }, []);
  

    const handleDelete = () => {
        console.log('clicked')
        if (taskdata333.length > 0) {
          alert("Data cannot be deleted until the card is populated.");
          return;
        }
      
        if (!_id) {
          alert("No card data available.");
          return;
        }


        console.log("delete", _id);
        fetch(`http://localhost:9000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              alert("Deleted successfully");
              const remining = Taskda.filter(user => user._id !== _id)
              setTaskda(remining)
            }
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            alert("An error occurred while deleting data.");
          });
      };
      
    return (
        <div>
   <p onClick={() => handleDelete(_id)} className="font-bold cursor-pointer   text-red-600">Delete Board</p>
        </div>
    );
};

export default deleteBord;