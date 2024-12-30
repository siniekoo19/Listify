import { Link } from "react-router-dom";

const TodoItem = ({todo, onDelete}) => {

  let t = todo.title;
  todo.title = `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
  let d = todo.desc;
  todo.desc = `${d.charAt(0).toUpperCase()}${d.slice(1)}`;

  return (
    <div className="my-3">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Detele</button>
        &nbsp;&nbsp;&nbsp;
        <Link to={`/edit/${todo.sno}`}>
          <button className="btn btn-sm btn-dark">Edit</button>
        </Link>
    </div>
  )
}

export default TodoItem
