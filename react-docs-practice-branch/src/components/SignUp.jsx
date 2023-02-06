import React from "react"

const SignUp = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert("Submitting!")
        }}
      >
        <input />
        <button>Send</button>
      </form>
    </>
  )
}

export default SignUp
