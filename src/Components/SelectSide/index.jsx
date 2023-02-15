import SelectButton from "./SelectButton";
import { auth } from "../../firebaseConfig.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./index.css"
import {motion} from "framer-motion";

const SelectSide = () => {

  async function login() {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  }

  async function handleClick(platform) {
    let user;
    try {
      user = await login();
    } catch (e) {
      console.log("Error while logging in: ", e);
    }
    try {
      const docRef = await setDoc(doc(db, "users", user.email), {
        platform,
      });
      // const docRef = await addDoc(collection(db, "users"), {
      //   id: user.email,
      //   platform,
      // });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  return (
    <motion.div animate={{ y: [-100,50] }} transition={{ type: "spring", stiffness: 400 }} className="mainContainer">
      <SelectButton image = {"./Assets/ps5.png"} label={"PC"} onClick={() => handleClick("PC")} />
      <motion.div className="mainBody">
        <motion.div className="logoDiv">
          <img src="./Assets/tagLogo.png" className="tagLogo"/>
        </motion.div>
        <motion.div animate={{ y: -50 }} transition={{ type: "spring", stiffness: 200 }}className="mainText">
          CHOOSE YOUR PLATFORM
        </motion.div>
      </motion.div>
      <SelectButton image = {"./Assets/pc.png"} label={"PS"} onClick={() => handleClick("PS")}/>
    </motion.div>
};

export default SelectSide;
