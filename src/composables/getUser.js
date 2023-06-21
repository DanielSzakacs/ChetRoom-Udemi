import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);

//it use a call beck function , will run every time when there is an update i nthe authentication
projectAuth.onAuthStateChanged((_user) => {
  console.log("User state change. Current user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
