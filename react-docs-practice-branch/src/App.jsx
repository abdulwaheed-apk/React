import "./App.css"
import PlayButton from "./components/PlayButton"
import UploadButton from "./components/UploadButton"
import SignUp from "./components/SignUp"
import ColorSwitch from "./components/ColorSwitch"
import { useState } from "react"

function App() {
  const [clicks, setClicks] = useState(0)

  function handleClickOutside() {
    setClicks((c) => c + 1)
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random())
    let g = 150 + Math.round(100 * Math.random())
    let b = 150 + Math.round(100 * Math.random())
    return `rgb(${r}, ${g}, ${b})`
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style
    bodyStyle.backgroundColor = getRandomLightColor()
  }

  function handleOnClickApp() {
    return alert("Clicked On App ")
  }
  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={handleClickOutside}
      >
        <ColorSwitch onChangeColor={handleChangeColor} />
        <br />
        <br />
        <h2>Clicks on the page: {clicks}</h2>
      </div>
      <div className="d-flex bg-dark" onClick={handleOnClickApp}>
        <PlayButton btnText="Play Button" />
        <UploadButton btnText="Upload Button" />
      </div>
      <SignUp />
    </>
  )
}

export default App
