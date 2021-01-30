<template>
  <div class="index">
    <h1>{{ $t("index.title") }}</h1>
    <h3>{{ $t("index.work.header") }}</h3>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ $t("index.work.item1") }}</div>
          <!--- <div class="md-subhead">It also have a ripple</div> --->
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque
          ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ $t("index.work.item2") }}</div>
          <!--- <div class="md-subhead">It also have a ripple</div> --->
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque
          ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-ripple>
    </md-card>
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
.md-card {
  max-width: 500px;
  margin: 40px;
  display: inline-block;
  vertical-align: top;
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
