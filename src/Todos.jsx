import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Todos({
  todos,
  onDeleteTodo,
  onEditTodo,
  onToggleComplete,
  onFiltered,
  onSort
}) {
  return (
    <div className="container my-5">
      <div className="card-header d-flex justify-content-between align-items-center mb-3 p-2 border-1 rounded-top bg-white shadow-lg">
        <h5 className="fw-semibold m-2">Todos</h5>

        <div>
          <button onClick={() => onFiltered() }
          className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-filter"></i>
          </button>
          <button onClick={() => onSort() }
           className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-sort-down"></i>
          </button>
        </div>
      </div>

      {todos.length === 0 && (
        <div className="alert alert-info" role="alert">
          No todos available. Please add a todo.
        </div>
      )}

      {todos.map((todo) => (
        <div key={todo.id} className="container-fluid my-3 mx-auto fw-semibold">
          <div className="card shadow-lg border rounded bg-white">
            <div className="card-body d-flex justify-content-between align-items-start">
              <div>
                <h6 className="fw-bold mb-1">{todo.title || "(No title)"}</h6>
                <p className="text-muted mb-2">
                  {todo.description || "(No description)"}
                </p>

                <div className="d-flex align-items-center gap-2">
                  <small className="text-muted">
                    <i className="bi bi-calendar"></i> Due: {todo.formattedDate}
                  </small>

                  {todo.assignee && (
                    <span className="badge bg-info text-dark">
                      <i className="bi bi-person"></i> {todo.assignee}
                    </span>
                  )}

                  {todo.attachments > 0 && (
                    <span className="badge bg-secondary">
                      {todo.attachments} attachments
                    </span>
                  )}
                  {todo.completed && (
                    <span className="badge bg-success text-white">
                      Completed
                    </span>
                  )}
                </div>
              </div>

              <div className="text-end">
                <small className="text-muted d-block mb-2">
                  Created: {todo.created}
                </small>

                <div className="btn-group">
                  <button
                    onClick={() => onToggleComplete(todo.id)}
                    className="btn btn-outline-success btn-sm"
                  >
                    <i className="bi bi-check"></i>
                  </button>
                  <button
                    onClick={() => onEditTodo(todo.id, todo)}
                    className="btn btn-outline-primary btn-sm"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    onClick={() => onDeleteTodo(todo.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
