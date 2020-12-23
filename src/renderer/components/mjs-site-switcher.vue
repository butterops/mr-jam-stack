<template></template>


<script>
export default {
  name: "mjs-site-switcher",
  components: {},
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
  },
};
</script>

<style>
</style>
