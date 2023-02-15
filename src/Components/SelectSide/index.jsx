import SelectButton from "./SelectButton";
import { db, auth, provider } from "../../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
    <div>
      <SelectButton label={"PC"} onClick={() => handleClick("PC")} />
      <SelectButton label={"PS"} onClick={() => handleClick("PS")} />
    </div>
  );
};

export default SelectSide;
