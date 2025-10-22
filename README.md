# GymBuddies - Vue.js Social Media App

A Vue.js application for finding workout partners and gym buddies. This app allows users to browse profiles, view detailed information, and send friend requests.

## Features

- **Login System**: Simple authentication with hardcoded credentials
- **Profile Browser**: View a list of user profiles with basic information
- **Detailed Profiles**: Click on any profile to see comprehensive details
- **Friend Requests**: Send friend requests with success notifications
- **Responsive Design**: Modern, mobile-friendly interface

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Test Credentials

- **Username**: `testuser`
- **Password**: `password123`

## Project Structure

```
src/
├── components/
│   ├── Login.vue          # Login page with authentication
│   ├── ProfileList.vue    # List of user profiles
│   └── ProfileDetail.vue  # Detailed profile view
├── data/
│   └── profiles.js        # Centralized profile data and helper functions
├── App.vue                # Main application component
├── main.js               # Application entry point
└── style.css             # Global styles
```




