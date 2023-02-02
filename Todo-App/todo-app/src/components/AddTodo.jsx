import { useState } from "react"

const AddTodo = ({ onAdd }) => {
  const [todoText, setTodoText] = useState("")
  const [day, setDay] = useState("")
  const [status, setStatus] = useState(false)

  function submitTodo(e) {
    e.preventDefault()

    if (!todoText) {
      alert("Please Add Todo Text")
      return
    }
    onAdd({ todoText, day, status })
    setTodoText("")
    setDay("")
    setStatus(false)
  }
  return (
    <>
      <form className="add-form" onSubmit={submitTodo}>
        <div className="form-control">
          <label htmlFor="todo">Todo</label>
          <input
            type="text"
            placeholder="Add Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <label>Set Status</label>
          <input
            type="checkbox"
            checked={status}
            value={status}
            onChange={(e) => setStatus(e.currentTarget.checked)}
          />
        </div>

        <input type="submit" value="Save Todo" className="btn btn-block" />
      </form>
    </>
  )
}

export default AddTodo
