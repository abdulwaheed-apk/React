import Button from "./Button"

const Header = ({ title }) => {
  const handleClickFunc = () => {
    console.log("Clicked")
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        bgColor="#F2921D"
        textColor="black"
        text="Add Task"
        handleClick={handleClickFunc}
      />
    </header>
  )
}

export default Header
