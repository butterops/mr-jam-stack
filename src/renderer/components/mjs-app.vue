<template>
  <div id="wrapper1">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item logo">
          <span>MR. JAM STACK</span>
        </div>
        <a class="navbar-item is-tab">KGAURAV.ONLINE</a>
        <a class="navbar-item is-tab">BUTTEROPS.DEV</a>
        <a class="navbar-item is-tab is-active">+ NEW</a>
      </div>
    </nav>

    <div class="wrapper">
      <aside class="sidebar">
        <nav class="menu">
          <div class="menu-category">
            <header class="category-header">Dashboard</header>
            <ul class="menu-list">
              <li><a>Static</a></li>
              <li><a>Streaming</a></li>
            </ul>
          </div>
          <div class="menu-category">
            <header class="category-header">Components</header>
            <ul class="menu-list">
              <li><a>Panels</a></li>
              <li><a>Breadcrumb</a></li>
              <li><a>Panel</a></li>
              <li><a>Tabs</a></li>
            </ul>
          </div>
          <div class="menu-category">
            <header class="category-header">Pages</header>
            <ul class="menu-list">
              <li><a>Login</a></li>
              <li><a>Logout</a></li>
              <li><a>Page not found</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      <main class="main">
        <header class="is-clearfix">
          <div class="cats is-pulled-right has-text-right">
            <div class="field is-grouped">
              <div class="control">
                <button class="button">Submit</button>
              </div>
              <div class="control">
                <button class="button">Cancel</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Add New Website</h2>
            <small>Fill the form below</small>
          </div>
          <hr />
        </header>
        <article class="is-child">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
            </div>
            <p class="help is-success">This username is available</p>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question" />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="question" />
                No
              </label>
            </div>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>


<script>
import MjsSetupSite from "./mjs-setup-site.vue";

export default {
  name: "mjs-app",
  components: { MjsSetupSite },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
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

$sidebar-width: 13rem;
$header-height: 3.25rem;
$padding: 2rem;

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
    width: calc(#{$sidebar-width} - 2.5rem);
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
    color: $highlight-color;
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
  background-color: $highlight-color;
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
.button:hover {
  color: $highlight-color !important;
  border-color: $highlight-color !important;
}
</style>
