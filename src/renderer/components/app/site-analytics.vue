<template></template>


<script>
export default {
  name: "SiteAnalytics",
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
