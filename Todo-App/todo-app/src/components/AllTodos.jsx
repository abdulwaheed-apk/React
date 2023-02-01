import Todo from "./Todo"

const AllTodos = ({ allTodos, deleteTodo, toggleStatus }) => {
  return (
    <>
      {allTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleStatus={toggleStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  )
}

export default AllTodos
