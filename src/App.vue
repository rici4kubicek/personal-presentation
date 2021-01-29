<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ $t("app.title") }}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">{{
          $t("menu.navigation")
        }}</md-toolbar>

        <md-list>
          <router-link to="/">
            <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text">{{ $t("menu.home") }}</span>
            </md-list-item>
          </router-link>

          <router-link to="/contact">
            <md-list-item>
              <md-icon>contact_mail</md-icon>
              <span class="md-list-item-text">{{ $t("menu.contact") }}</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <router-view class="view"></router-view>
      </md-app-content>
    </md-app>
    <div class="footer">
    <router-link to="/">
      <span v-on:click="changeLocale('cs')">{{ $t("language.czech") }}</span>
    </router-link>
    |
    <router-link to="/">
      <span v-on:click="changeLocale('en')">{{ $t("language.english") }}</span>
    </router-link>
    </div>
  </div>
</template>

<script>
import i18n from "@/i18n";
export default {
  name: "App",
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4%;
  color: #2c3e50;
  text-align: center;
}
.md-app {
  border: 2px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
