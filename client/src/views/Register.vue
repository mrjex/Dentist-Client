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
                <b-form-input type="password" v-model="form.password" required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
import { Api } from '../Api'
import router from '../router'

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
        // clinic: {
        //   name: '',
        //   position: '57.18,12.12'
        // }
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      Api.post('/users/register', this.form).then(response => {
        console.log(response)
        router.push('/')
      })
        .catch(error => {
          console.log(error)
        })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>
