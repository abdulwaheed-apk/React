// import PropTypes from "prop-types"

const Button = ({ bgColor, textColor, text, handleClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

// Button.defaultProps = {
//   color: "stealblue",
// }
// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   textColor: PropTypes.string,
// }
export default Button
