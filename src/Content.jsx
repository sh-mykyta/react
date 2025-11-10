import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Content() {
  return (
 
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
                <form className="container-fluid my-3 mx-auto bg-white fw-semibold border rounded shadow-lg">
                    <label htmlFor="title" className="form-label my-2">Title</label>
                    <br></br>
                    <input type="text" id="title" name="title" className="form-control" />
                    <br></br>
                    <label htmlFor="description" className="form-label">Description</label>
                    <br></br>
                    <textarea name="description" id="description" className="form-control"></textarea>
                    <br></br>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="due-date" className="form-label">Due Date</label>
                            <input type="datetime-local" id="due-date" name="due-date"
                                className="border rounded form-control w-100"></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="assignee" className="form-label">Assigne to Person(Optional)</label>
                            <select name="assignee" id="assignee" className="border rounded form-select w-100">
                                <option>-- Select Person (Optional) --</option>
                                <option>John Doe</option>
                                <option>Jane Smith</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="attachment" className="form-label">Attachments</label>
                        <input type="file" name="attachment" id="attachment" className="form-control" multiple></input>
                        <div id="attachment-preview" className="border rounded p-3 mt-3" style={{ minHeight: "60px" }}>
                        </div>
                        <div className="text-end my-4">
                            <button  type="button" className="btn btn-primary px-4">+ Add Todo</button>
                        </div>
                    </div>

                </form>

                <div className="container-fluid my-3 mx-auto fw-semibold">
                    <div className="card shadow-lg border rounded bg-white">
                        <div className="card-header d-flex justify-content-between align-items-center mb-3">
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
                        <div id="todo-list" className="card-body flex-column gap-3"></div>
                        <div className="card-body d-flex justify-content-between align-items-start ">
                            <div>
                                <h6 className="fw-bold mb-1">Example Todo</h6>
                                <p className="text-muted mb-2">Description goes here</p>
                                <div className="d-flex align-items-center gap-2">
                                    <small className="text-muted"><i className="bi bi-calendar"></i> Due: 2025-07-10</small>
                                    <span className="badge bg-info text-dark"><i className="bi bi-person"></i> John Doe</span>
                                    <span className="badge bg-secondary">2 attachments</span>
                                </div>
                            </div>

                            <div className="text-end">
                                <small className="text-muted d-block mb-2">Created: 2025-07-01</small>
                                <div className="btn-group">
                                    <button className="btn btn-outline-success btn-sm"><i className="bi bi-check"></i></button>
                                    <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i></button>
                                    <button className="btn btn-outline-danger btn-sm"><i className="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
  );
}