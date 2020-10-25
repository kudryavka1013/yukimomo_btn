<template>
  <v-card rounded="lg" hover>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
        <slot/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "voiceCard",
  props:{
      title: String,
  }
};
</script>

<style>
</style>