<template>
  <div class="container">
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h1 style="font-size: 28px; color: #333;">GymBuddies</h1>
        <button @click="logout" class="btn btn-secondary">Logout</button>
      </div>
      
      <h2 style="font-size: 24px; color: #333; margin-bottom: 16px;">Find Your Workout Partners</h2>
      <p style="color: #666; margin-bottom: 24px;">Connect with fellow fitness enthusiasts and find your perfect gym buddy!</p>
      
      <div class="profile-grid">
        <div 
          v-for="profile in profiles" 
          :key="profile.id"
          class="profile-card"
          @click="viewProfile(profile.id)"
        >
          <img 
            :src="profile.avatar" 
            :alt="profile.name"
            class="profile-avatar"
          />
          <h3 class="profile-name">{{ profile.name }}</h3>
          <p class="profile-title">{{ profile.title }}</p>
          <p class="profile-bio">{{ profile.bio }}</p>
          <div class="profile-stats">
            <div class="stat">
              <div class="stat-number">{{ profile.workouts }}</div>
              <div class="stat-label">Workouts</div>
            </div>
            <div class="stat">
              <div class="stat-number">{{ profile.friends }}</div>
              <div class="stat-label">Friends</div>
            </div>
            <div class="stat">
              <div class="stat-number">{{ profile.experience }}</div>
              <div class="stat-label">Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllProfiles } from '../data/profiles.js'

export default {
  name: 'ProfileList',
  data() {
    return {
      profiles: getAllProfiles()
    }
  },
  methods: {
    viewProfile(id) {
      this.$router.push(`/profile/${id}`)
    },
    logout() {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('currentUser')
      this.$router.push('/login')
    }
  },
  mounted() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      this.$router.push('/login')
    }
  }
}
</script>

