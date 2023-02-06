const ColorSwitch = ({ onChangeColor }) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onChangeColor()
        }}
      >
        Change color
      </button>
    </>
  )
}

export default ColorSwitch
