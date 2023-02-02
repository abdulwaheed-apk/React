import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  // const handleClickFunc = () => {
  //   console.log("Clicked")
  // }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        bgColor={showAdd ? "#F2921D" : "green"}
        textColor={showAdd ? "black" : "white"}
        text={showAdd ? "Close" : "Add Me"}
        handleClick={onAdd}
      />
    </header>
  )
}

export default Header
