<template>
  <div>
    <article class="is-child">
      <div class="field">
        <label class="label">Select Site Generator</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Hugo (recommended)</option>
              <option>Next</option>
              <option>Gatsby</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Name of the theme</label>
        <div class="control">
          <!-- <input
            class="input"
            type="email"
            placeholder="Email input"
            value="ankel"
          /> -->
        </div>
        <p class="help is-link">
          <a href="https://themes.gohugo.io/">Browse themes</a>
        </p>
      </div>
      <div class="field">
        <label class="label">Select a CMS</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Netify CMS (recommended)</option>
              <option>Dato CMS</option>
            </select>
          </div>
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
  </div>
</template>


<script>
export default {
  name: "SiteOptions",
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
