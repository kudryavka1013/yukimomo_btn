<template>
  <div class="ma-3">
    <introduction />
    <v-alert
      class="mt-3"
      dense
      rounded="lg"
      tran
      transition="scroll-x-transition"
      border="left"
      colored-border
      type="info"
      color="primary"
      elevation="2"
      dismissible
    >
      音量注意！
    </v-alert>
    <v-card class="mt-3" rounded="lg">
      <v-card-text>
        <voicebtn />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import introduction from "../components/introduction";
import voicebtn from "../components/voicebtn";
export default {
  name: "Home",
  components: {
    introduction,
    voicebtn,
  },
};
</script>

<style>
</style>