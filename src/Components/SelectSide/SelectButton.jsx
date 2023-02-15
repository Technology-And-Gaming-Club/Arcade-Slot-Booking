import "./selectButton.css"
// import {motion} from "framer-motion"

function SelectButton({image, label, onClick }) {
  return <div className="selectButton" onClick={onClick}>{label}
  <img className="buttonImage" src={image}/>
  </div>;
}

export default SelectButton;
