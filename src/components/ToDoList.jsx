import { useState } from "react";

export default function ToDoList() {
  const [todolist, setToDoList] = useState([]);
  const [input, setInput] = useState("");
  const handleAddToDo = () => {
    if(input.trim()=="" ) return;
    const item = {
      id: todolist.length + 1,
      text: input.trim(),
      completed: false,
    };
    setToDoList((prev) => [...prev, item]);
    setInput("");
  };

  const handleCheckboxClick = (id) =>{
    const arr = todolist.map(item=>{
        if(item.id === id){
            item.completed = !item.completed
        }
        return item;
    })
    setToDoList(arr);
  };

  const handleDelete = (id) =>{
    const arr = todolist.filter(item => item.id !==id);
    setToDoList(arr);
  };

  return (
    <>
      <div>
        <h1>To do list</h1>
      </div>

      <div>
        <div>
          <input
            type="text"
            className="p-2 m-2 border border-gray-900 rounded-lg"
            placeholder="Enter your todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="cursor-pointer bg-blue-500 text-white p-2 m-2 rounded-lg"
            onClick={() => handleAddToDo()}
          >
            Add
          </button>
        </div>
        <div>
          <ul>
            {todolist?.map((item, index) => (
              <div className="flex gap-2 items-center">
                <input type="checkbox" checked={item.completed} onChange={()=>handleCheckboxClick(item.id)} className="mt-1"/>
                <li key={index} className={`${item.completed?'strike mt-1':'mt-1'}`}>{item.text} </li>
                <button className="cursor-pointer bg-red-500 text-white p-2 m-2 rounded-lg" onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
