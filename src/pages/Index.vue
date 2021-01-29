<template>
  <div class="index">
    <h1>{{ $t("index.title") }}</h1>
    <h3>{{ $t("index.work.header") }}</h3>
    <div class="md-alignment-center">
      <md-list>
        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">{{ $t("index.work.item1") }}</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">{{ $t("index.work.item2") }}</span>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-list {
  margin: 15px 0 0;
  text-align: center;
}
h3 {
  margin: 15px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
