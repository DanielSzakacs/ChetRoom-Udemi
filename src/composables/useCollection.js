import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    console.log(doc);
    error.value = null;
    try {
      console.log(collection);
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
    }
  };

  return { addDoc, error };
};

export default useCollection;
