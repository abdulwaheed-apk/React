import { useState } from "react"

import Header from "./components/Header"
import AllTodos from "./components/AllTodos"
import "./index.css"
import AddTodo from "./components/AddTodo"

function App() {
  const [allTodos, setAllTodos] = useState([
    { title: "Todo 1", status: true, id: 0 },
    { title: "Todo 1", status: true, id: 1 },
    { title: "Todo 2", status: false, id: 2 },
    { title: "Todo 3", status: false, id: 3 },
    { title: "Todo 4", status: true, id: 4 },
  ])

  // Delete Todo
  function deleteTodoFunc(id) {
    // console.log("this is todo, my id is ", id)
    setAllTodos(allTodos.filter((todo) => todo.id !== id))
  }

  // Toggle Status
  const toggleStatusFunc = (id) => {
    // console.log(id)
    setAllTodos(
      allTodos.map(
        (todo) => (todo.id = id ? { ...todo, status: !todo.status } : todo)
      )
    )
  }

  return (
    <div className="container">
      <Header title="Todo App" />
      <AddTodo />
      {AllTodos.length > 0 ? (
        <AllTodos
          allTodos={allTodos}
          toggleStatus={toggleStatusFunc}
          deleteTodo={deleteTodoFunc}
        />
      ) : (
        "No Task To Show, Kindly Add New"
      )}
    </div>
  )
}

export default App
