<<<<<<< Updated upstream
import SelectButton from "./SelectButton";
// import { auth } from "../../firebaseConfig.js";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./index.css"
import {motion} from "framer-motion";
=======

import { auth, provider, db } from "../../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import "./index.css";
import { doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <motion.div animate={{ y: [-100,50] }} transition={{ type: "spring", stiffness: 400 }} className="mainContainer">
      <SelectButton image = {"./Assets/ps5.png"} label={"PC"} onClick={handlePcClick} />
=======
    <motion.div
      animate={{ y: [-100, 50] }}
      transition={{ type: "spring", stiffness: 400 }}
      className="mainContainer"
    >
      <div className="selectButtonLeft" onClick={() => handleClick("PS")}>
          <img className="buttonImageLeft" src="./Assets/ps5.png"/>
      </div>;

>>>>>>> Stashed changes
      <motion.div className="mainBody">
        <motion.div className="logoDiv">
          <img src="./Assets/tagLogo.png" className="tagLogo"/>
        </motion.div>
        <motion.div animate={{ y: -50 }} transition={{ type: "spring", stiffness: 200 }}className="mainText">
          CHOOSE YOUR PLATFORM
        </motion.div>
      </motion.div>
<<<<<<< Updated upstream
      <SelectButton image = {"./Assets/pc.png"} label={"PS"} />
=======
      <div className="selectButtonRight" onClick={() => handleClick("PC")}>
          <img className="buttonImageRight" src="./Assets/pc.png"/>
      </div>;
>>>>>>> Stashed changes
    </motion.div>
  );
};

export default SelectSide;
