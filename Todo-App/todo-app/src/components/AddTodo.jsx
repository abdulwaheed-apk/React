const AddTodo = () => {
  return (
    <>
      <form className="add-form">
        <div className="form-control">
          <label htmlFor="todo">Todo</label>
          <input type="text" placeholder="Add Todo" />
        </div>

        <div className="form-control">
          <label>Day & Time</label>
          <input type="text" placeholder="Add Day $ Time" />
        </div>

        <div className="form-control form-control-check">
          <label>Set Status</label>
          <input type="checkbox" />
        </div>

        <input type="submit" value="Save Todo" className="btn btn-block" />
      </form>
    </>
  )
}

export default AddTodo
