<template>
  <div>
    <aside class="sidebar">
      <app-menu />
    </aside>
    <main class="main">
      <site-options v-if="activeTab === 'options'" />
      <site-cms v-if="activeTab === 'cms'" />
      <site-seo v-if="activeTab === 'seo'" />
      <site-integrations v-if="activeTab === 'integrations'" />
      <site-analytics v-if="activeTab === 'analytics'" />
    </main>
  </div>
</template>

<script>
import SiteAnalytics from "./analytics.vue";
import SiteCms from "./cms.vue";
import SiteIntegrations from "./integrations.vue";
import SiteOptions from "./options";
import SiteSeo from "./seo.vue";
import AppMenu from "./_menu.vue";

export default {
  name: "AppLayout",
  components: {
    SiteOptions,
    SiteCms,
    SiteSeo,
    SiteIntegrations,
    SiteAnalytics,
    AppMenu,
  },
  methods: {},
  data() {
    return {
      activeTab: "options",
    };
  },
};
</script>

<style lang="scss">
$font-color: #ffffff;
$font-dark-color: #949ba2;
$font-darker-color: #5b646d;
$highlight-color: #ffa500;
$main-color: #2e323b;

$light-color: lighten($main-color, 3%);
$dark-color: darken($main-color, 3%);
$lighter-color: lighten($main-color, 6%);
$darker-color: darken($main-color, 6%);

$gradient-color-start: $light-color;
$gradient-color-end: $dark-color;

$sidebar-width: 10.2rem;
$header-height: 0rem; //3.25rem
$padding: 1rem;

html {
  overflow-y: auto;
}

body {
  color: $font-color !important;
  background-color: transparent;
}

.sidebar {
  padding-left: calc(#{$padding} - 0.75rem);
  padding-right: calc(#{$padding} - 0.75rem);
  position: absolute;
  .category-header {
    padding: 0.5em 0.75em;
  }
  .menu {
    position: fixed;
    // width: calc(#{$sidebar-width} - 2.5rem);
    width: $sidebar-width;
    max-width: inherit;
  }
  .menu-list a {
    font-size: 0.875rem;
    line-height: 24px;
    color: $font-dark-color;
  }
}
.sidebar:before {
  content: "";
  background-color: $darker-color;
  width: $sidebar-width;
  position: fixed;
  border-right: dotted 1px black;
}

.sidebar,
.sidebar:before {
  top: 0;
  bottom: 0;
  left: 0;
}

.main {
  margin-left: $sidebar-width;
  position: relative;
  padding-left: $padding;
  padding-right: $padding;
  header {
    line-height: 18px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
    hr {
      background-color: transparent;
      border-top: 1px solid $lighter-color;
    }
    small {
      color: $font-dark-color;
      text-align: right;
    }
  }
}
.main:before {
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: -2;
  left: 0;
  right: 0;
  background-image: -webkit-radial-gradient(
    top,
    circle cover,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-image: -moz-radial-gradient(
    center,
    circle cover,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-image: -o-radial-gradient(
    center,
    circle cover,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-image: radial-gradient(
    center,
    circle cover,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-position: 50%, 50%;
}

.sidebar,
.main {
  margin-top: $header-height;
  padding-top: $padding;
}

.navbar {
  box-shadow: 0px 0px 21px $darker-color;
  background-color: $dark-color !important;
}
.navbar-brand {
  width: $sidebar-width;
  margin-right: calc(#{$padding} - 0.75rem);
  .navbar-item {
    padding-left: $padding;
    color: $font-dark-color;
  }
  .navbar-item:hover {
    padding-left: $padding;
  }
}

.box {
  hr {
    background-color: $lighter-color;
  }
}
.box.transparent {
  background-color: transparent;
}
.box.accent {
  background-color: $highlight-color;
  .subtitle {
    color: $font-color;
  }
}

.box {
  background-color: transparent !important;
  box-shadow: none !important;
  border-radius: 3px;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6,
.title,
.tile {
  color: $font-color;
}

.subtitle {
  color: $font-dark-color;
}

.navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: $highlight-color;
}

.navbar-item.is-tab {
  border-bottom: 3px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}

a.navbar-item:hover {
  color: $darker-color;
}

.logo {
  background-color: $font-color;
  width: $sidebar-width;
  border-right: solid 1px black;
  span {
    color: $dark-color !important;
    font-weight: bold;
  }
}

#switcher {
  display: inline !important;
}
.field {
  background-color: transparent;
}
label,
.label {
  color: $font-color !important;
}
.select select,
.input,
.textarea,
.button {
  background-color: $dark-color !important;
  border-color: #dbdbdb;
  color: $font-dark-color !important;
  max-width: 100%;
  width: 100%;
}
.navbar-item.is-tab.is-active,
.navbar-item.is-tab:hover {
  color: $font-color !important;
  border-color: $font-color !important;
}
</style>
