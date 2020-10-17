<template>
  <v-app>
    <div>
    <v-app-bar clipped-left> 
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>桃按钮</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> </v-icon>
            </v-list-item-icon>
            <v-list-item-title>主页</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon> </v-icon>
            </v-list-item-icon>
            <v-list-item-title>哔哩哔哩</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon> </v-icon>
            </v-list-item-icon>
            <v-list-item-title>关于</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    drawer:false
  }),
};
</script>
