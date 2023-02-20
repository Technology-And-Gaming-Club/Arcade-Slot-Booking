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

  useEffect(() => {
    setCount(async () => {
      const PC = await getCount("PC");
      const PS = await getCount("PS");
      return { PC, PS };
    });
  }, []);

  async function login() {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  }

  async function getCount(platform) {
    const q = query(collection(db, "users"), where("platform", "==", platform));
    const players = await getDocs(q);
    return players.size;
  }

  async function handleClick(platform) {
    let user;
    try {
      user = await login();
      console.log(user.email.search("@vitstudent.ac.in"));
      if (user.email.search("@vitstudent.ac.in") === -1) {
        alert("Use a Vit Email id");
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

      const max_players = {
        PC: 100,
        PS: 12,
      };

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
      </div>
      ;
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
      </div>
      ;
    </motion.div>
  );
}
