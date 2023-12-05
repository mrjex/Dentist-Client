<template>
    <div style="background-color: white; padding: 20px; border-radius: 10px; color: black;">
        <b-form @submit="onSubmit" @reset="onReset">

            <div class="text-center">
                <img src="../assets/tooth.png" width="200px" />
            </div>
            <b-form-group label="Username:" label-for="Username:">
                <b-form-input id="input-2" v-model="form.username" required></b-form-input>
            </b-form-group>

            <b-form-group label="Password:" label-for="Password:">
                <b-form-input type="password" v-model="form.password"  required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>
