import { useState } from "react"
import { AiOutlineBorder } from "react-icons/ai"
import { BsCheckSquareFill } from "react-icons/bs"

import "./App.css"

// ? AllTodos Component
export function AllTodos({ children }) {
  return (
    <>
      <div className={"border border-warning py-3 px-4 my-3 rounded"}>
        {children}
      </div>
    </>
  )
}

// ? Todo Component
export function Todo({ tastTxt }) {
  const [status, setStatus] = useState(false)
  const [classN, setClassN] = useState("pending")

  function handleClick() {
    if (classN == "pending") {
      setClassN("completed")
    } else {
      setClassN("pending")
    }
    setStatus(!status)
  }

  return (
    <>
      <div
        className={`my-3 rounded px-2 py-1 d-flex align-items-center justify-content-between ${classN} `}
      >
        <h4 className="fw-normal">{tastTxt}</h4>
        <div onClick={handleClick}>
          {status ? (
            <BsCheckSquareFill className="fs-3 text-white rounded" />
          ) : (
            <AiOutlineBorder className="fs-3 text-dark rounded" />
          )}
        </div>
      </div>

      {/* onClick={() => setClassN(!classN)} */}
    </>
  )
}

// ? App Component
function App() {
  const [text, setText] = useState("")
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTask([...task, text])
    console.log(typeof text)
    console.log(typeof task)
    setText("")
  }
  return (
    <>
      <div className="container bg-white px-5 text-center w-50 mt-4 border rounded p-5">
        <h1>Todo App</h1>
        <div className="container w-50">
          <form onSubmit={handleSubmit}>
            <label htmlFor="task-text" className="form-label">
              Add Task
            </label>
            <input
              className="form-control my-1"
              autoComplete="off"
              type="text"
              name="task-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add Text"
            />
            <input
              type="submit"
              className="form-control btn btn-dark w-full my-1"
              value="Add Task"
            />
          </form>
        </div>
        <div className="container w-50">
          <AllTodos>
            {task.map((jj, i) => (
              <Todo key={i} tastTxt={jj} />
            ))}
          </AllTodos>
        </div>
      </div>
    </>
  )
}

export default App
