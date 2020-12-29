<template>
  <div>
    <header class="is-clearfix">
      <div class="cats is-pulled-right has-text-right">
        <button class="button">Create</button>
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
            class="input"
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
            class="input"
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
      <!-- <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div> -->
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
