import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "./counterSlice"

export default function Counter() {
  const count = useSelector((state) => state)
  console.log("-----cont----", count)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button>{count}</button>
      <button onClick={() => dispatch(increment())}>increment</button>
    </>
  )
}
