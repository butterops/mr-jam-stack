<template></template>


<script>
export default {
  name: "mjs-setup-site",
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
