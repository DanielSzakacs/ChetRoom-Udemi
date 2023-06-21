import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  //real time listener
  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log("snapshot");
      let result = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && result.push({ ...doc.data(), id: doc.id });
      });
      documents.value = result;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      document.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
