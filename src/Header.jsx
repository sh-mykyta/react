import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

export default function Header({ onSearchTodo}) {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Task</span>

        <form
          className="d-flex justify-content-center"
  style={{ maxWidth: "350px", width: "100%" }}
  role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="task-search" className="visually-hidden">
            Search tasks
          </label>
          <input onChange={(e) => onSearchTodo(e.target.value)}
            id="task-search"
            className="form-control me-2"
            type="search"
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}