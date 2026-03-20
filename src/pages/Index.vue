<template>
  <div class="index">
    <img alt="logo" src="../assets/face.png" />
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

    <h3>{{ $t("contact.title") }}</h3>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Email</div>
          <!--- <div class="md-subhead">It also have a ripple</div> --->
        </md-card-header>

        <md-card-content
          ><div @click="onEmailClick()">
            <p>
              <md-icon>alternate_email</md-icon>
            </p>
            rici.kubicek+web@gmail.com
          </div>
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">GitHub</div>
          <!--- <div class="md-subhead">It also have a ripple</div> --->
        </md-card-header>

        <md-card-content
          ><div @click="onGithubClick()">
            <p>
              <img
                alt="GitHub logo"
                src="../assets/contact/github.png"
                width="32px"
              />
            </p>
            github.com/rici4kubicek
          </div>
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
          ><div @click="onLinkedinClick()">
            <p>
              <img
                alt="LinkedIn logo"
                src="../assets/contact/linkedin.png"
                width="32px"
              />
            </p>
            LinkedIn bio
          </div>
        </md-card-content>
      </md-ripple>
    </md-card>

    <h3>{{ $t("index.projects.header") }}</h3>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ $t("index.projects.statistics.title") }}</div>
        </md-card-header>

        <md-card-content>
          <div @click="onStatisticsLibraryClick()">
            <p>
              <img
                alt="GitHub logo"
                src="../assets/contact/github.png"
                width="32px"
              />
            </p>
            {{ $t("index.projects.statistics.description") }}
          </div>
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ $t("index.projects.softwareTimer.title") }}</div>
        </md-card-header>

        <md-card-content>
          <div @click="onSoftwareTimerLibraryClick()">
            <p>
              <img
                alt="GitHub logo"
                src="../assets/contact/github.png"
                width="32px"
              />
            </p>
            {{ $t("index.projects.softwareTimer.description") }}
          </div>
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ $t("index.projects.superfaktura.title") }}</div>
        </md-card-header>

        <md-card-content>
          <div @click="onSuperfakturaClientClick()">
            <p>
              <img
                alt="GitHub logo"
                src="../assets/contact/github.png"
                width="32px"
              />
            </p>
            {{ $t("index.projects.superfaktura.description") }}
          </div>
        </md-card-content>
      </md-ripple>
    </md-card>

    <h4>{{ $t("index.projects.contributionsHeader") }}</h4>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ $t("index.projects.hardpy.title") }}</div>
        </md-card-header>

        <md-card-content>
          <div @click="onHardpyClick()">
            <p>
              <img
                alt="GitHub logo"
                src="../assets/contact/github.png"
                width="32px"
              />
            </p>
            {{ $t("index.projects.hardpy.description") }}
          </div>
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import { page } from 'vue-analytics'

export default {
  name: "Index",
  methods: {
    track () {
      page('/')
    },
    onGithubClick() {
      window.open("https://github.com/rici4kubicek", "_blank");
    },
    onLinkedinClick() {
      window.open(
        "https://www.linkedin.com/in/richard-kub%C3%AD%C4%8Dek-119635aa/",
        "_blank"
      );
    },
    onEmailClick() {
      window.open("mailto:rici.kubicek+web@gmail.com");
    },
    onStatisticsLibraryClick() {
      window.open(
        "https://github.com/rici4kubicek?tab=repositories&q=statistics",
        "_blank"
      );
    },
    onSoftwareTimerLibraryClick() {
      window.open(
        "https://github.com/rici4kubicek?tab=repositories&q=software+timer",
        "_blank"
      );
    },
    onSuperfakturaClientClick() {
      window.open("https://github.com/Eledio/superfaktura-client", "_blank");
    },
    onHardpyClick() {
      window.open("https://github.com/everypinio/hardpy", "_blank");
    },
  },
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
h4 {
  margin: 10px 0 0;
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
