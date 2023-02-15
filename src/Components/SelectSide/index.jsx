import SelectButton from "./SelectButton";
import { auth, provider } from "../../firebaseConfig.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SelectSide = () => {
  async function handlePcClick() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      const user = result.user;
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <SelectButton label={"PC"} onClick={handlePcClick} />
      <SelectButton label={"PS"} />
    </div>
  );
};

export default SelectSide;
