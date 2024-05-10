import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const createNewColumn = () => {
  const [taskdata333, setTaskdata333] = useState([])
  
  useEffect(() => {
      fetch("http://localhost:9000/users")
        .then((res) => res.json())
        .then((data) => setTaskdata333(data));
    }, []);

    return (
     <div>
     <div className="flex justify-center   h-[814px] items-center">

          <div id="todo">
          {taskdata333
          .map((task, index) => (
          <div key={index}>
          <Link to={`/updateBoard/${task._id}`}
           className="font-semibold cursor-pointer text-gray-500">Edit Board</Link>
          </div>
          ))}
        </div>
        
    </div>
    </div>
    );
};

export default createNewColumn;