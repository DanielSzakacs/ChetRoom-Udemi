<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sing up</h3>
    <input
      type="text"
      required
      placeholder="Display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sing up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSingup from "../composables/useSignup";

export default {
  setup(props, context) {
    const { error, singup } = useSingup();

    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await singup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("User is singedup");
        context.emit("singup");
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
