import SelectButton from "./SelectButton";
// import { auth } from "../../firebaseConfig.js";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./index.css"
import {motion} from "framer-motion";

const SelectSide = () => {
  async function handlePcClick() {
    // try {
    //   const result = await signInWithPopup(auth, GoogleAuthProvider());
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   console.log(credential);
    //   const user = result.user;
    //   console.log(user);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <motion.div animate={{ y: [-100,50] }} transition={{ type: "spring", stiffness: 400 }} className="mainContainer">
      <SelectButton image = {"./Assets/ps5.png"} label={"PC"} onClick={handlePcClick} />
      <motion.div className="mainBody">
        <motion.div className="logoDiv">
          <img src="./Assets/tagLogo.png" className="tagLogo"/>
        </motion.div>
        <motion.div animate={{ y: -50 }} transition={{ type: "spring", stiffness: 200 }}className="mainText">
          CHOOSE YOUR PLATFORM
        </motion.div>
      </motion.div>
      <SelectButton image = {"./Assets/pc.png"} label={"PS"} />
    </motion.div>
  );
};

export default SelectSide;
