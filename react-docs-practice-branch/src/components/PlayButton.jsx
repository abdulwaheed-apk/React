import Button from "./Button"

const PlayButton = ({ handleClick, btnText }) => {
  function handleClick() {
    return console.log("Movie Played")
  }
  return (
    <>
      <Button btnText={btnText} onClickAsProp={handleClick} />
    </>
  )
}

export default PlayButton
