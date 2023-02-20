// import { auth } from "../../firebaseConfig.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./index.css";
// import {motion} from "framer-motion";
import { auth, provider, db } from "../../firebaseConfig.js";
// import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import "./index.css";
import {
  doc,
  setDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { motion } from "framer-motion";

export default function SelectSide() {
  const [count, setCount] = useState({
    PC: 0,
    PS: 0,
  });

  const [psCNT, setPS] = useState(0);
  const [pcCNT, setPC] = useState(0);
  const [doReload, setReload] = useState(false);



  useEffect(() => {
    getCount();

  }, [doReload]);

  async function login() {
    const result = await signInWithPopup(auth, provider);
    setReload(true);
    setReload(false);
    return result.user;
  }

  async function getCount() {
    const q1 = query(collection(db, "users"), where("platform", "==", 'PS'));
    const players1 = await getDocs(q1);
    setPS(players1.size);

    const q2 = query(collection(db, "users"), where("platform", "==", 'PC'));
    const players2 = await getDocs(q2);
    setPC(players2.size);
    // return players.size;
  }

  const max_players = {
    PC: 195,
    PS: 12,
  };

  async function handleClick(platform) {
    let user;
    try {
      user = await login();
      console.log(user.email.search("@vitstudent.ac.in"));
      if (user.email.search("@vitstudent.ac.in") === -1) {
        alert("Use a VIT Email-id");
        return;
      }
    } catch (e) {
      console.log("Error while logging in: ", e);
    }
    try {
      const q = query(
        collection(db, "users"),
        where("platform", "==", platform)
      );
      const players = await getDocs(q);

      if (players.size >= max_players[platform]) {
        alert("Maximum Capacity Reached");
        return;
      }

      const docRef = await setDoc(doc(db, "users", user.email), {
        platform,
      });
      alert(user.email + " is successfully registered for " + platform);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <motion.div
      animate={{ y: [-100, 50] }}
      transition={{ type: "spring", stiffness: 400 }}
      className="mainContainer"
    >
      <div className="selectButtonLeft" onClick={() => handleClick("PS")}>
        <img className="buttonImageLeft" src="./Assets/ps5.png" />
        <div className="bruhmoment">{max_players.PS - psCNT} SEATS AVAILABLE</div>
      </div>
      
      <motion.div className="mobileSelectButtonLeft" onClick={()=>handleClick("PS")}>
        {/* <div className="mobileHeading">
          PS5
        </div> */}
        <img className="buttonImageLeft" src="./Assets/ps5.png" />
        <div className="bruhmoment">{max_players.PS - psCNT} SEATS AVAILABLE</div>
      </motion.div>

      <motion.div className="mainBody">
        <motion.div className="logoDiv">
          <img src="./Assets/tagLogo.png" className="tagLogo" alt="LOGO" />
        </motion.div>
        <motion.div
          animate={{ y: -50 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mainText"
        >
          CHOOSE YOUR PLATFORM
        </motion.div>
      </motion.div>
      <div className="selectButtonRight" onClick={() => handleClick("PC")}>
        <img className="buttonImageRight" src="./Assets/pc.png" />
        <div className="bruhmoment">{max_players.PC - pcCNT} SEATS AVAILABLE</div>
      </div>

      <motion.div className="mobileSelectButtonRight" onClick={()=>handleClick("PC")}>
        {/* <div className="mobileHeading">
          PC
        </div> */}
        <img className="buttonImageRight" src="./Assets/pc.png" />
        <div className="bruhmoment">{max_players.PC - pcCNT} SEATS AVAILABLE</div>
      </motion.div>

    </motion.div>
  );
}
