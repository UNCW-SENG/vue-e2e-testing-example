<template>
  <div class="container">
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <button @click="goBack" class="btn btn-secondary">← Back to Profiles</button>
        <button @click="logout" class="btn btn-secondary">Logout</button>
      </div>
      
      <div v-if="profile" class="detail-header">
        <img 
          :src="profile.avatar" 
          :alt="profile.name"
          class="detail-avatar"
        />
        <div class="detail-info">
          <h1>{{ profile.name }}</h1>
          <p class="detail-title">{{ profile.title }}</p>
          <p class="detail-bio">{{ profile.bio }}</p>
        </div>
      </div>
      
      <div v-if="profile" class="detail-stats">
        <div class="stat-card">
          <div class="stat-number">{{ profile.workouts }}</div>
          <div class="stat-label">Total Workouts</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ profile.friends }}</div>
          <div class="stat-label">Friends</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ profile.experience }}</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ profile.achievements }}</div>
          <div class="stat-label">Achievements</div>
        </div>
      </div>
      
      <div v-if="profile" style="margin-top: 32px;">
        <h3 style="font-size: 20px; color: #333; margin-bottom: 16px;">About {{ profile.name }}</h3>
        <p style="color: #666; line-height: 1.6; margin-bottom: 24px;">{{ profile.about }}</p>
        
        <h3 style="font-size: 20px; color: #333; margin-bottom: 16px;">Fitness Goals</h3>
        <ul style="color: #666; line-height: 1.6; margin-bottom: 24px; padding-left: 20px;">
          <li v-for="goal in profile.goals" :key="goal" style="margin-bottom: 8px;">{{ goal }}</li>
        </ul>
        
        <h3 style="font-size: 20px; color: #333; margin-bottom: 16px;">Preferred Workout Times</h3>
        <p style="color: #666; line-height: 1.6; margin-bottom: 32px;">{{ profile.workoutTimes }}</p>
      </div>
      
      <div v-if="showSuccessMessage" class="alert alert-success">
        Friend request sent successfully! {{ profile.name }} will be notified.
      </div>
      
      <div v-if="profile" class="text-center">
        <button 
          @click="sendFriendRequest" 
          class="btn btn-primary"
          :disabled="friendRequestSent"
        >
          {{ friendRequestSent ? 'Friend Request Sent' : 'Make Friend Request' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfileById } from '../data/profiles.js'

export default {
  name: 'ProfileDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      profile: null,
      friendRequestSent: false,
      showSuccessMessage: false
    }
  },
  methods: {
    goBack() {
      this.$router.push('/profiles')
    },
    logout() {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('currentUser')
      this.$router.push('/login')
    },
    sendFriendRequest() {
      this.friendRequestSent = true
      this.showSuccessMessage = true
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false
      }, 5000)
    }
  },
  mounted() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      this.$router.push('/login')
      return
    }
    
    // Get the profile by ID from the imported data
    this.profile = getProfileById(this.id)
    
    if (!this.profile) {
      this.$router.push('/profiles')
    }
  }
}
</script>

