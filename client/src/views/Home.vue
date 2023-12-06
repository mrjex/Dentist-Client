<template>
  <div>
    <b-container v-if="this.loading" class="mx-auto text-center" id="loading-container">
      <img src="../assets/tooth.png" id="loading-img" class="d-block m-auto" />
      <h3>Brushing teeth...</h3>
    </b-container>
    <div v-else>
      <vue-cal style="height: 650px" class="vuecal--blue-theme" :disable-views="['years', 'year', 'month']" hide-weekends
        :time-cell-height="50" :events="appointments" :onEventClick="setEvent">
      </vue-cal>

      <!-- Render all appointments -->
      <!-- <b-list-group>
      <b-list-group-item v-for="(appointment, index) in appointments" :key="index">
        {{ appointment.date }} from {{ appointment.startTime }} to {{ appointment.endTime }} - {{ appointment.booked ? 'Booked' : 'Available' }}
        <div class="ml-auto">
        <b-button @click="deleteAppointment(index)" variant="danger">Delete</b-button>
        </div>
      </b-list-group-item>
    </b-list-group> -->
      <add-slot :publishSlot="publishTimeSlot" />
      <add-clinic :publishClinic="publishClinic" />
      <manage-slot :selected-event="selectedEvent" :delete-event="deleteAppointment" />
      <b-button variant="primary" class="my-3" v-b-modal.add-slot>Add Timeslot</b-button>
      <br />
      <b-button variant="primary" class="my-3" v-b-modal.add-clinic>Add Clinic</b-button>
      <!-- show all messages in notifications -->
      <b-alert show variant="info" dismissible fade v-show="notifications.length > 0">
        <div v-for="(notification, index) in notifications" :key="index">{{ notification }}</div>
      </b-alert>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import AddSlot from '../components/AddSlot.vue'
import ManageSlot from '../components/ManageSlot.vue'
import AddClinic from '../components/AddClinic.vue'
import { Api } from '../Api'

export default {
  data() {
    return {
      // newAppointment: { date: '', startTime: '', endTime: '' }, // this depends on how the DB will look like
      appointments: [], // Appointments fetched from API will be stored here
      notifications: [], // Notifications fetched from API will be stored here
      selectedEvent: null,
      loading: true // Set to false once data is fetched from API
    }
  },
  components: { VueCal, AddSlot, ManageSlot, AddClinic },
  methods: {
    publishTimeSlot(appointment) {
      // Simulate API call to publish time slot
      // Add logic to handle the API response if needed
      this.appointments.push({
        id: Math.random(),
        title: 'Free Slot',
        start: `${appointment.date} ${appointment.startTime}`,
        end: `${appointment.date} ${appointment.endTime}`,
        class: 'free-slot'
      })
      this.$bvModal.hide('add-slot')
      // TODO: Implement API for publishing appointments
      // Clear the form
      // this.newAppointment = { date: '', startTime: '', endTime: '' }
    },
    publishClinic(clinic) {
      // Simulate API call to publish time slot
      // Add logic to handle the API response if needed
      console.log(clinic)
      Api.post('/clinics', clinic).then(response => {
        this.$bvModal.hide('add-clinic')
      })
        .catch(error => {
          console.error(error)
        })
      // TODO: Implement API for publishing appointments
      // Clear the form
      // this.newAppointment = { date: '', startTime: '', endTime: '' }
    },
    deleteAppointment() {
      // Simulate API call to delete time slot
      const index = this.appointments.findIndex(event => event.id === this.selectedEvent.id)
      this.appointments.splice(index, 1)
      this.$bvModal.hide('selectedEvent')
      // Notify that the dentist has canceled an appointment
      // TODO: Implement API for deleting appointment and notify patients
    },
    setEvent(event) {
      this.selectedEvent = event
      this.$bvModal.show('selectedEvent')
    },
    fetchAppointments() {
      this.appointments = [
        {
          id: Math.random(),
          title: 'Free Slot',
          start: '2023-12-01 09:00',
          end: '2023-12-01 10:00',
          booked: false,
          class: 'free-slot'
        },
        {
          id: Math.random(),
          title: 'Booked Slot',
          start: '2023-12-04 09:00',
          end: '2023-12-04 11:00',
          booked: true,
          class: 'booked-slot'
        },
        {
          id: Math.random(),
          title: 'Free Slot',
          start: '2023-12-05 08:00',
          end: '2023-12-05 09:00',
          booked: false,
          class: 'free-slot'
        }
      ]

      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  },
  // Fetch appointments and notifications from API on component mount
  mounted() {
    // Simulate fetching appointments from API
    // Replace this with actual API call when implemented
    this.fetchAppointments()
    // TODO: fetch information using API to populate fields
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
