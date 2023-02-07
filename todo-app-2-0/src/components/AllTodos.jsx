import Todo from "./Todo"
const AllTodos = ({ passToAll }) => {
  return (
    <div className="text-xl 	border border-black p-10 rounded">
      <h4>All Todos</h4>
      <div className="font-light">
        <ul>
          {/* {" "}
          {[passToAll].map((h, i) => (
            <Todo key={i} textTD={h} />
          ))} */}
        </ul>
      </div>
    </div>
  )
}

export default AllTodos
