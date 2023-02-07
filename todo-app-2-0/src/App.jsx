import { SearchTodo, AddTodo, AllTodos } from "./components/components"
import "./App.css"
import { useState } from "react"
function App() {
  const getTextValue = (j) => {
    console.log(j)
  }
  return (
    <>
      <div className="d-flex">
        <h1 className="text-4xl	font-light italic my-3">ToDo App</h1>
        <SearchTodo className="my-3" /> <br />
        <AddTodo className="my-3" getTextValue={getTextValue} /> <br />
        <AllTodos className="my-3" /> <br />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  )
}

export default App
