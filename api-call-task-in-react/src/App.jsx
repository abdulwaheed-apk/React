import { useEffect, useState } from "react"
import "./App.css"

function App() {
  /*   async function getTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const dataRes = await res.json()
    let title = dataRes.map((post) => console.log(post))
  } */
  const [task, setTask] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((resData) => setTask(resData))
  }, [])
  // console.log("----data----", data)
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {task.map((te) => (
              <tr key={te.id}>
                <td>{te.userId}</td>
                <td>{te.id}</td>
                <td>{te.title}</td>
                <td>{te.completed ? "Completed " : "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
