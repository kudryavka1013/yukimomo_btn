<template>
  <div class="ma-3">
    <introduction />
    <div class="mt-3">
      <voicebtn />
    </div>
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