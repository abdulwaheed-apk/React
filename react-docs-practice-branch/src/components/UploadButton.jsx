import Button from "./Button"

const UploadButton = ({ btnText }) => {
  const handleClick = () => alert("Upload Movie")
  return (
    <>
      <Button btnText={btnText} onClickAsProp={handleClick} />
    </>
  )
}

export default UploadButton
