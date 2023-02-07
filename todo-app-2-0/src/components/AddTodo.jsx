import { useState } from "react"

const AddTodo = ({ getTextValue }) => {
  const [text, setText] = useState([])
  const [textArr, setTextArr] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTextArr(text)
  }
  getTextValue(textArr)
  return (
    <>
      <div className="border border-black rounded p-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo-text" className="my-2 font-medium">
            Task Text
          </label>{" "}
          <br />
          <input
            className="border border-black rounded px-3 py-2 my-2"
            type="text"
            name="todo-text"
            placeholder="Add Task Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus="on"
            autoComplete="off"
          />{" "}
          <br />
          <input
            type="submit"
            value="Add Task"
            className="bg-black text-white px-3 rounded my-2 py-2 ml-2 min-w-full"
          />
        </form>
      </div>
    </>
  )
}

export default AddTodo
