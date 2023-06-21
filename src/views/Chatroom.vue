<template>
  <div class="container">
    <Navbar></Navbar>
    <ChetWindow></ChetWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import { watch } from "vue";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import NewChatForm from "@/components/NewChatForm.vue";
import ChetWindow from "@/components/ChetWindow.vue";

export default {
  name: "Chatroom",
  components: { Navbar, NewChatForm, ChetWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
