<template></template>


<script>
export default {
  name: "SiteIntegrations",
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
