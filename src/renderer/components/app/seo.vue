<template>
  <h1>SEO</h1>
</template>


<script>
export default {
  name: "SiteSeo",
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
