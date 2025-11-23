export default function Todos() {
  return (
    <div className="container my-5">
        <div className="card-header d-flex justify-content-between align-items-center mb-3 p-2 border-1 rounded-top bg-white shadow-lg">
            <h5 className="fw-semibold m-2">Todos</h5>
            <div>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-filter"></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-sort-down"></i>
              </button>
            </div>
          </div>
      <div className="container-fluid my-3 mx-auto fw-semibold">
        <div className="card shadow-lg border rounded bg-white">
          
          <div id="todo-list" className="card-body flex-column gap-3"></div>
          <div className="card-body d-flex justify-content-between align-items-start ">
            <div>
              <h6 className="fw-bold mb-1">Example Todo</h6>
              <p className="text-muted mb-2">Description goes here</p>
              <div className="d-flex align-items-center gap-2">
                <small className="text-muted">
                  <i className="bi bi-calendar"></i> Due: 2025-07-10
                </small>
                <span className="badge bg-info text-dark">
                  <i className="bi bi-person"></i> John Doe
                </span>
                <span className="badge bg-secondary">2 attachments</span>
              </div>
            </div>

            <div className="text-end">
              <small className="text-muted d-block mb-2">
                Created: 2025-07-01
              </small>
              <div className="btn-group">
                <button className="btn btn-outline-success btn-sm">
                  <i className="bi bi-check"></i>
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
