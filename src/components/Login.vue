<template>
  <div class="container">
    <div class="card" style="max-width: 400px; margin: 100px auto;">
      <div class="text-center mb-4">
        <h1 style="font-size: 32px; color: #333; margin-bottom: 8px;">GymBuddies</h1>
        <p style="color: #666;">Find your perfect workout partner</p>
      </div>
      
      <form @submit.prevent="login">
        <div class="form-group">
          <label class="form-label" for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="form-input"
            placeholder="Enter your username"
            required
          />
        </div>
        
        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-input"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div v-if="error" class="alert" style="background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">
          {{ error }}
        </div>
        
        <button type="submit" class="btn btn-primary" style="width: 100%;">
          Login
        </button>
      </form>
      
      <div class="text-center mt-4" style="color: #666; font-size: 14px;">
        <p>Test credentials:</p>
        <p><strong>Username:</strong> testuser</p>
        <p><strong>Password:</strong> password123</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      // Hardcoded credentials for testing
      if (this.username === 'testuser' && this.password === 'password123') {
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('currentUser', this.username)
        this.$router.push('/profiles')
      } else {
        this.error = 'Invalid username or password. Please try again.'
      }
    }
  },
  mounted() {
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.$router.push('/profiles')
    }
  }
}
</script>


