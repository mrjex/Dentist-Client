<template>
  <b-form-group label="Clinic">
    <b-form-select :value="clinic" @change="setClinic" :options="clinics"></b-form-select>
  </b-form-group>
</template>

<script>
import { Api } from '../Api'
export default {
  props: ['clinic', 'setClinic'],
  data: function () {
    return {
      clinics: [
        {
          text: 'Clinic 1',
          value: '6578330dd7a5ee0db838d532'
        },
        {
          text: 'Clinic 2',
          value: 'Test'
        }
      ]
    }
  },
  async mounted() {
    try {
      /* Expect data in the form [{value: string, text: string}] */
      const { data } = await Api.get('/clinics')
      this.clinics = data.clinics.map(parseClinic)
    } catch (error) {
      console.error(error)
    }
  }
}

function parseClinic(clinic) {
  return {
    text: clinic.clinic_name,
    value: clinic._id
  }
}
</script>
