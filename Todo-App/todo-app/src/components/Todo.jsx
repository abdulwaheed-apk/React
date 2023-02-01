import { AiFillDelete } from "react-icons/ai"
import { AiOutlineBorder } from "react-icons/ai"
const Todo = ({ todo, deleteTodo, toggleStatus }) => {
  return (
    <div className="task">
      <h3>
        Title: {todo.title}{" "}
        <span className="task">
          <AiOutlineBorder
            onClick={() => toggleStatus(todo.id)}
            style={{ color: "green", marginRight: "20" }}
          />
          <AiFillDelete
            style={{ color: "#D61355" }}
            onClick={() => deleteTodo(todo.id)}
          />
        </span>
      </h3>
      <p>Status: {todo.status ? "Completed" : "Not Completed"} </p>
    </div>
  )
}

export default Todo
