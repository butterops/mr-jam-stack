<template>
  <div id="wrapper">
    <!-- <aside class="menu" style="width: 200px">
      <ul class="menu-list">
        <li><a class="is-active">Untitled Website</a></li>
      </ul>
    </aside> -->
    <mjs-setup-site></mjs-setup-site>
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

<style>
</style>
