<template>
  <v-container>
    <v-app-bar clipped-left dark color="deep-purple">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>桃按钮</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer absolute v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> ... </v-icon>
            </v-list-item-icon>
            <v-list-item-title>主页</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon> ... </v-icon>
            </v-list-item-icon>
            <v-list-item-title>哔哩哔哩</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon> ... </v-icon>
            </v-list-item-icon>
            <v-list-item-title>关于</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
  export default {
    name: "Navigator",
    data: () => ({
      drawer: false,
    }),
  };
</script>

<style>
</style>