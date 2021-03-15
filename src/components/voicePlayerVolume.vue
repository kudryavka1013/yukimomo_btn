<template>
  <div class="wrapper">
    <v-btn icon @click="toggleMute" color="cyan" class="vol-btn my-auto">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <v-slider
      class="progress-bar"
      hide-details="true"
      v-model="volume"
      @input="updateVolume(volume)"
      min="0"
      max="1"
      step="0.05"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: "voicePlayerVolume",
  data: () => ({
    volume: 1,
    muted: false,
  }),
  computed: {
    icon: function () {
      if (this.muted) {
        return "mdi-volume-mute";
      }
      if (this.volume == 0) {
        return "mdi-volume-low";
      } else if (this.volume <= 0.5) {
        return "mdi-volume-medium";
      } else {
        return "mdi-volume-high";
      }
    },
  },
  methods: {
    updateVolume(volume) {
      this.$audio.volume = volume;
      // console.log('volume: ' + this.$audio.volume)
      this.volume = volume;
      this.$audio.muted = false
      this.mute = false
    },
    toggleMute() {
      this.$audio.muted = !this.$audio.muted;
      console.log('muted is ' + this.$audio.muted);
      this.muted = !this.muted;
    },
  },
};
</script>

<style>
.vol-btn {
  display: inline;
  float: left;
}
.progress-bar {
  width: 100px;
  display: inline;
  float: left;
}
</style>