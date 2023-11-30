<template>
  <b-modal id="add-slot" title="Add Slot" hide-footer>
    <b-form @submit.prevent="publishTimeSlot">
      <b-form-group label="Date:" label-for="dateInput">
        <b-form-input v-model="appointment.date" type="date" required id="dateInput"></b-form-input>
      </b-form-group>
      <b-form-group label="Start Time:" label-for="startTimeInput">
        <b-form-input v-model="appointment.startTime" type="time" required id="startTimeInput"></b-form-input>
      </b-form-group>
      <b-form-group label="End Time:" label-for="endTimeInput">
        <b-form-input v-model="appointment.endTime" type="time" required id="endTimeInput"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Publish Time Slot</b-button>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      appointment: {
        date: '',
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    publishTimeSlot() {

    }
  }
}
</script>
