<template>
  <nav class="menu">
    <site-switcher></site-switcher>

    <ul class="menu-list">
      <br />
      <br />
      <li><a>Site Options</a></li>
      <li><a>Contents</a></li>
      <li><a>SEO</a></li>
      <li><a>Analytics</a></li>
      <li><a>Integrations</a></li>
      <br />
      <li><a>Preferences</a></li>
      <li><a>Help</a></li>
      <li><a>Submit a bug</a></li>
    </ul>
  </nav>
</template>

<script>
import SiteSwitcher from "./_switcher.vue";

export default {
  name: "AppMenu",
  components: {
    SiteSwitcher,
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
  },
};
</script>

<style>
</style>
