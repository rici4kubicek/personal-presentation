<template>
  <div class="contact">
    <h1>{{ $t("contact.title") }}</h1>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">GitHub</div>
          <!--- <div class="md-subhead">It also have a ripple</div> --->
        </md-card-header>

        <md-card-content
          ><p>
            <img
              alt="GitHub logo"
              src="../assets/contact/github.png"
              width="32px"
            />
          </p>
          <a href="https://github.com/rici4kubicek" target="_blank"> github.com/rici4kubicek</a>
        </md-card-content>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">LinkedIn</div>
          <!--- <div class="md-subhead">It also have a ripple</div> --->
        </md-card-header>

        <md-card-content
          ><p>
            <img
              alt="LinkedIn logo"
              src="../assets/contact/linkedin.png"
              width="32px"
            />
          </p>
          <a
            href="https://www.linkedin.com/in/richard-kub%C3%AD%C4%8Dek-119635aa/" target="_blank"
          >
            LinkedIn bio</a
          >
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
  min-width: 250px;
  margin: 10px;
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
