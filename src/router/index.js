import Vue from "vue";
import Router from "vue-router";

import Index from "@/pages/Index"
import Contact from "@/pages/Contact"

Vue.use(Router);

function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "Index",
        component: Index,
        meta: {
          title: "index.meta.title",
          metaTags: [
            {
              name: "description",
              content: "Richard Kubíček - home page.",
            },
            {
              property: "og:description",
              content: "Richard Kubíček - home page.",
            },
          ],
        },
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
          title: "contact.meta.title",
          metaTags: [
            {
              name: "description",
              content: "Richard Kubíček - contact page.",
            },
            {
              property: "og:description",
              content: "Richard Kubíček - contact page.",
            },
          ],
        },
      },
    ],
  });
}

const router = createRouter();

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

import i18n from '../i18n'

router.beforeEach((to, from, next) => {
  document.title = "" + i18n.t(to.meta.title) + " - Richard Kubíček" // meta.title is keypath of locale messages
  next()
})

export default function provideRouter() {
  return router;
}
