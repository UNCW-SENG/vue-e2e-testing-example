# GymBuddies - Vue.js Social Media App

A Vue.js application for finding workout partners and gym buddies. This app allows users to browse profiles, view detailed information, and send friend requests.

## Quick Setup

**Install Node.js**: 
- **Windows (with admin)**: Download the LTS version from [nodejs.org](https://nodejs.org) → Run the installer → Restart terminal
- **Windows (no admin)**: 
  1. Download the LTS version from [nodejs.org](https://nodejs.org)
  2. Extract to `C:\nodejs\` (or any folder you have write access to)
  3. Add to PATH: `Win+R` → `sysdm.cpl` → Advanced → Environment Variables → User Variables → Path → New → Add `C:\nodejs\`
  4. Restart terminal and verify with `node --version`
- **macOS**: `brew install node` or download from [nodejs.org](https://nodejs.org)


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




