import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const displayedTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (todo.assignee &&
      todo.assignee.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  function addTodo(todo){
      setTodos((prev) =>[todo, ...prev])
  }

  function deleteTodo(id){
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function editTodo(id, updatedTodo){
      const newTitles = prompt("Enter new title:", updatedTodo.title);
      const newDescriptions = prompt("Enter new description:", updatedTodo.description);
      const newDueDate = prompt("Enter new due date (YYYY-MM-DDTHH:MM):", updatedTodo.dueDate);
      const newAssignee = prompt("Enter new assignee:", updatedTodo.assignee);

      const formattedDate = newDueDate
      ? new Date(newDueDate).toISOString().slice(0, 16).replace("T", " ")
      : "No date";

      setTodos((prev) => 
          prev.map((todo) => 
              todo.id === id 
              ? {
                  ...todo,
                  title: newTitles || "(No title)",
                  description: newDescriptions || "(No description)",
                  dueDate: newDueDate,
                  formattedDate: formattedDate,
                  assignee: newAssignee || "",
              }
              : todo
          )
      );
  }

  function toggleComplete(id){
      setTodos((prev) => 
          prev.map((todo) => 
              todo.id === id ? {...todo, completed: !todo.completed} : todo
          )
      );
  }

  function searechTodo(query){
      setSearchQuery(query);
  }


  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "260px" }}>
        <Header onSearchTodo = {searechTodo}/>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <Content onAddTodo = {addTodo}/>
            <Todos todos = {todos}
            onDeleteTodo = {deleteTodo}
            onEditTodo = {editTodo}
            onToggleComplete = {toggleComplete}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
