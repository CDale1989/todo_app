import { useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  

  const handleAddTodo = (todo) => {
    setTodos([...todos, { todo, isCrossedOut: false }]);
    setNewTodo("");
  };

  

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };



  const handleCheckboxClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCrossedOut = !newTodos[index].isCrossedOut;
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="primary-heading-container">
        <h1 className="primary-heading">My To Do List</h1>
      </div>

      <div className="add-todo-container">
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={() => handleAddTodo(newTodo)}>Add todo</button>
      </div>
      <div className="added-todo-container">
        <ul>
          <div>
            {todos.map((todo, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxClick(index)}
                  checked={todo.isCrossedOut}
                ></input>
                <span
                  className="added-todo-text"
                  style={{
                    textDecoration: todo.isCrossedOut ? "Line-through" : "none",
                  }}
                >
                  {todo.todo}
                </span>
                <DeleteFilled
                  className="delete-filled"
                  onClick={() => handleDeleteTodo(index)}
                />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
