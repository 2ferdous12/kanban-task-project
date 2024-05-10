import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const showTask = () => {
    const useload = useLoaderData();

    const [edit, setEdit] = useState(false)
    const editDiv = () => {
      setEdit(!edit);
    };
    const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/use")
      .then((res) => res.json())
      .then((data) => setSelectedTask(data));
  }, []);

  console.log(selectedTask)

  const handleDelete = _id => {
    console.log('clicked', _id)

    console.log("delete", _id);
    fetch(`http://localhost:9000/use/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) { 
          alert("Deleted successfully");
          const remining = selectedTask.filter(user => user._id !== _id)
          setSelectedTask(remining)
        }
      })

  };

    return (
        <div className="bg-[#F4F7FD] w-full min-h-[calc(100vh-120px)] p-5">
            <Link to="/board">
                <button className="btn">
                    <p className="text-xl font-semibold">Go Main Page</p>
                </button>
            </Link>
            <div className="absolute left-[41%] top-[20%]">
            <div className=" w-[350px] md:w-[450px]  lg:w-[450px]  bg-[#FFFFFF] h-[675px] p-5">
            <div className="flex">
            <p>{useload?.title}</p>

            <div>
            <div className="absolute top-[10%] right-0">
            <div>
            <img onClick={editDiv} className="h-[15px] w-[15px]  " src="/images/Group 18.png" alt="" />
            {edit && (
            <div className=" top-[9%] right-[22%]
            w-[180px] h-[90px] p-5 space-y-2 bg-[#FFFFFF] shadow-md rounded-lg absolute">
               <p onClick={() => handleDelete(useload?._id)} className="font-semibold cursor-pointer text-gray-500">Delete task</p>
             <Link to={`/updateTask/${useload?._id}`}
             className="font-semibold cursor-pointer text-gray-500">Edit Task</Link>
             </div>
               )}
             </div>
            </div>
            </div>
            </div>

        </div>
         </div>
        </div>
    );
};

export default showTask;