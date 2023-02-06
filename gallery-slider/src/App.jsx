import { useEffect, useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import "./App.css"

function App() {
  const [profile, setProfile] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setProfile(data))
    // console.log(data)
    // console.log(profile)
    // console.log(response)
  }, [])

  return (
    <>
      <h2>Hello React</h2>
      <div className="d-flex justify-content-between align-items-center">
        <AiOutlineArrowLeft
          onClick={() =>
            index === 0 ? setIndex(profile.length - 1) : setIndex(index - 1)
          }
          className="arrow-icon"
        />
        <div>
          <img
            src={profile[index]?.url}
            alt={profile[index]?.title}
            className="rounded-pill w-auto"
          />
          <h4>{profile[index]?.title}</h4>
          <p>By User No: {profile[index]?.albumId}</p>
        </div>
        <AiOutlineArrowRight
          onClick={() =>
            index === profile.length - 1 ? setIndex(0) : setIndex(index + 1)
          }
          className="arrow-icon"
        />
      </div>
    </>
  )
}

export default App
