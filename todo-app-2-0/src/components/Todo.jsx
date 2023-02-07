import { AiOutlineBorder } from "react-icons/ai"
import { BsCheckSquareFill } from "react-icons/bs"

const Todo = ({ textTD }) => {
  return (
    <>
      <div>
        <h3>{textTD}</h3>
        {/* <AiOutlineBorder />
        <BsCheckSquareFill /> */}
      </div>
    </>
  )
}

export default Todo
