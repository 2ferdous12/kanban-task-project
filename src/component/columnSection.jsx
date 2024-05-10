
const columnSection = ({task}) => {
    const {_id, title, substak1, substak2} = task;
   console.log(_id)
    return (
        <div>
           <h1>column{title}</h1> 
           <h1>column{substak1}</h1> 
           <h1>column{substak2}</h1> 
        </div>
    );
};

export default columnSection;