<template>
  <div class="select">
    <select>
      <option>+ new website</option>
      <option>kgaurav.online</option>
      <option>butterops.dev</option>
    </select>
  </div>
</template>


<script>
export default {
  name: "site-switcher",
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
