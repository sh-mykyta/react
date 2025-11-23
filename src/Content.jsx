import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Content({onAddTodo}) {
    function addTodo(){
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("due-date").value.trim();
    const assignee = document.getElementById("assignee").value.trim();
    const attachments = document.getElementById("attachment").files.length;

    const formattedDate = dueDate
        ? new Date(dueDate).toISOString().slice(0, 16).replace("T", " ")
        : "No date";

    const newTodo = {
        id: Date.now(),
        title: title || ("No title"),
        description: description || ("No description"),
        formattedDate,
        assignee: assignee !== "-- Select Person (Optional) --" ? assignee : null,
        attachments,
        created: new Date().toISOString().slice(0, 10),
    }

    onAddTodo(newTodo);
    document.querySelector("form").reset();
        }
  return (
    <form className="container-fluid my-3 mx-auto bg-white fw-semibold border rounded shadow-lg">
      <label htmlFor="title" className="form-label my-2">
        Title
      </label>
      <br></br>
      <input type="text" id="title" name="title" className="form-control" />
      <br></br>
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <br></br>
      <textarea
        name="description"
        id="description"
        className="form-control"
      ></textarea>
      <br></br>

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="due-date" className="form-label">
            Due Date
          </label>
          <input
            type="datetime-local"
            id="due-date"
            name="due-date"
            className="border rounded form-control w-100"
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="assignee" className="form-label">
            Assign to Person(Optional)
          </label>
          <select
            name="assignee"
            id="assignee"
            className="border rounded form-select w-100"
          >
            <option>-- Select Person (Optional) --</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </select>
        </div>
      </div>
      <div className="my-3">
        <label htmlFor="attachment" className="form-label">
          Attachments
        </label>
        <input
          type="file"
          name="attachment"
          id="attachment"
          className="form-control"
          multiple
        ></input>
        <div
          id="attachment-preview"
          className="border rounded p-3 mt-3"
          style={{ minHeight: "60px" }}
        ></div>
        <div className="text-end my-4">
          <button onClick={addTodo}
              type="button" className="btn btn-primary px-4">
            + Add Todo
          </button>
        </div>
      </div>
    </form>
  );
}
