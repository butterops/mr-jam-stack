<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item" href="">
          <img src="" width="50" />
        </span>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> kgaurav.online </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> butterops.dev </a>
              <a class="navbar-item"> 40fy.live </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> + new website </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="button is-text"
                data-show="quickview"
                data-target="quickviewDefault"
              >
                more ...
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- <aside v-if="sidebar === true">
      <site-options />
    </aside> -->
    <div id="quickviewDefault" class="quickview">
      <header
        class="quickview-header"
        style="min-height: unset !important; height: 2.5rem !important"
      >
        <p>... about this website</p>
        <span class="delete" data-dismiss="quickview"></span>
      </header>

      <div class="quickview-body" style="padding: 10px">
        <div class="quickview-block">
          <dl>
            <dt>SSG</dt>
            <dd>Hugo Static Site Generator</dd>
            <dt>Theme</dt>
            <dd>Ankle theme by Hugo</dd>
            <dt>CMS</dt>
            <dd>Netlify CMS</dd>
          </dl>
        </div>
      </div>

      <footer
        class="quickview-footer"
        style="min-height: unset !important; height: 2.5rem !important"
      >
        <button class="button is-text">Delete this website</button>
      </footer>
    </div>
    <main class="main">
      <site-cms />
    </main>
  </div>
</template>

<script>
import bulmaQuickview from "bulma-quickview/dist/js/bulma-quickview.min.js";
import SiteOptions from "./options";
import SiteCms from "./cms.vue";
import AppMenu from "./_menu.vue";

export default {
  name: "AppLayout",
  components: {
    SiteOptions,
    SiteCms,
    AppMenu,
  },
  mounted: function () {
    var quickviews = bulmaQuickview.attach(); // quickviews now contains an array of all Quickview instances
  },
  data() {
    return {
      sidebar: true,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  -webkit-app-region: drag !important;
  min-height: unset !important;
  height: 2.5rem !important;
}
.quickview {
  width: 300px !important;
}

dt {
  padding-top: 10px !important;
  font-weight: bold !important;
}
dl {
  padding-left: 5px;
}
</style>