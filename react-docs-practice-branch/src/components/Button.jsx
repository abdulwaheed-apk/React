// ? Button Component which returns browser HTML(default) button tag
// ? on button tag's onClick Event we pass a prop called  onClickAsProp which goes to its any parent and we can call any function on this prop

const Button = ({ btnText, onClickAsProp }) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClickAsProp()
        }}
        className="my"
      >
        {btnText}
      </button>
    </>
  )
}

export default Button
