import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const singup = async (email, password, displayName) => {
  error.value = null; // just to make suere this value is null

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete the singup");
    }
    // save username
    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(err.message);
  }
};

const useSingup = () => {
  return { error, singup };
};

export default useSingup;
