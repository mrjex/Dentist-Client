<template>
  <div>
    <b-container v-if="this.loading" class="mx-auto text-center" id="loading-container">
      <img src="../assets/tooth.png" id="loading-img" class="d-block m-auto" />
      <h3>Brushing Teeth...</h3>
    </b-container>
    <div v-else>
      <vue-cal style="height: 650px" class="vuecal--blue-theme" :disable-views="['years', 'year', 'month']" hide-weekends
        :time-cell-height="50" :events="appointments">
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
      <b-button variant="primary" class="my-3" v-b-modal.add-slot>Add Timeslot</b-button>
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

export default {
  data() {
    return {
      // newAppointment: { date: '', startTime: '', endTime: '' }, // this depends on how the DB will look like
      appointments: [], // Appointments fetched from API will be stored here
      notifications: [], // Notifications fetched from API will be stored here
      loading: true // Set to false once data is fetched from API
    }
  },
  components: { VueCal, AddSlot },
  methods: {
    publishTimeSlot(appointment) {
      // Simulate API call to publish time slot
      // Add logic to handle the API response if needed
      this.appointments.push({
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
    deleteAppointment(index) {
      // Simulate API call to delete time slot
      this.appointments.splice(index, 1)
      // Notify that the dentist has canceled an appointment
      // TODO: Implement API for deleting appointment and notify patients
    }
  },
  // Fetch appointments and notifications from API on component mount
  mounted() {
    // Simulate fetching appointments from API
    // Replace this with actual API call when implemented
    this.appointments = [
      {
        title: 'Free Slot',
        start: '2023-12-01 09:00',
        end: '2023-12-01 10:00',
        booked: false,
        class: 'free-slot'
      },
      {
        title: 'Booked Slot',
        start: '2023-12-04 09:00',
        end: '2023-12-04 10:00',
        booked: true,
        class: 'booked-slot'
      },
      {
        title: 'Free Slot',
        start: '2023-12-05 08:00',
        end: '2023-12-05 09:00',
        booked: false,
        class: 'free-slot'
      }
    ]

    setTimeout(() => {
      this.loading = false
    }, 1000)
    // TODO: fetch information using API to populate fields
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
