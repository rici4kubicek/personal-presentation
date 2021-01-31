<template>
  <div id="app">
        <router-view class="view"></router-view>
    <div class="footer">
      <router-link to="#">
        <span v-on:click="changeLocale('cs')">{{ $t("language.czech") }}</span>
      </router-link>
      |
      <router-link to="#">
        <span v-on:click="changeLocale('en')">{{
          $t("language.english")
        }}</span>
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
.md-list-item {
  padding: 4px;
  border: 2px solid rgba(#000, 0.12);
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
