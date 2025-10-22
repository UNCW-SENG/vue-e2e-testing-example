export const profiles = [
  {
    id: 1,
    name: 'Alex Johnson',
    title: 'Personal Trainer & Bodybuilder',
    bio: 'Passionate about helping others achieve their fitness goals. Specialized in strength training and muscle building.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    workouts: 156,
    friends: 89,
    experience: 5,
    achievements: 12,
    about: 'Alex has been in the fitness industry for over 5 years, helping hundreds of clients achieve their goals. He specializes in strength training, muscle building, and nutrition coaching. His approach combines scientific training methods with practical lifestyle changes.',
    goals: [
      'Help 1000+ people achieve their fitness goals',
      'Compete in natural bodybuilding competitions',
      'Develop a comprehensive fitness app',
      'Open a personal training studio'
    ],
    workoutTimes: 'Early morning (6:00 AM - 8:00 AM) and evening (6:00 PM - 8:00 PM)'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Yoga Instructor & Wellness Coach',
    bio: 'Love combining yoga with strength training. Always looking for workout partners who share my passion for holistic fitness.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    workouts: 203,
    friends: 124,
    experience: 7,
    achievements: 18,
    about: 'Sarah is a certified yoga instructor and wellness coach with over 7 years of experience. She believes in a holistic approach to fitness that combines physical exercise with mental wellness and proper nutrition.',
    goals: [
      'Complete advanced yoga teacher training',
      'Develop a wellness retreat program',
      'Write a book on holistic fitness',
      'Create online wellness courses'
    ],
    workoutTimes: 'Morning (7:00 AM - 9:00 AM) and afternoon (2:00 PM - 4:00 PM)'
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    title: 'CrossFit Athlete',
    bio: 'CrossFit enthusiast looking for training partners. Love high-intensity workouts and pushing limits together.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    workouts: 189,
    friends: 67,
    experience: 4,
    achievements: 8,
    about: 'Mike is a dedicated CrossFit athlete who loves the community aspect of fitness. He enjoys challenging workouts and helping others push their limits while maintaining proper form and safety.',
    goals: [
      'Qualify for CrossFit Games',
      'Become a CrossFit Level 2 trainer',
      'Open a CrossFit affiliate',
      'Mentor new CrossFit athletes'
    ],
    workoutTimes: 'Early morning (5:30 AM - 7:30 AM) and evening (7:00 PM - 9:00 PM)'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    title: 'Marathon Runner & Cardio Specialist',
    bio: 'Long-distance runner who loves cardio and endurance training. Looking for running and cycling partners.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    workouts: 234,
    friends: 156,
    experience: 6,
    achievements: 15,
    about: 'Emma is an accomplished marathon runner with multiple race completions under her belt. She specializes in endurance training and loves helping others discover the joy of long-distance running.',
    goals: [
      'Complete a sub-3 hour marathon',
      'Run marathons on all 7 continents',
      'Qualify for Boston Marathon',
      'Start a running club for beginners'
    ],
    workoutTimes: 'Early morning (5:00 AM - 7:00 AM) and weekend long runs'
  },
  {
    id: 5,
    name: 'David Kim',
    title: 'Powerlifter & Strength Coach',
    bio: 'Competitive powerlifter with a focus on raw strength. Always happy to help others with their lifting technique.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    workouts: 178,
    friends: 92,
    experience: 8,
    achievements: 22,
    about: 'David is a competitive powerlifter with multiple state records. He has a deep understanding of strength training principles and loves sharing his knowledge with others.',
    goals: [
      'Set a new state deadlift record',
      'Compete at national powerlifting championships',
      'Become a certified strength coach',
      'Develop a powerlifting training program'
    ],
    workoutTimes: 'Evening (6:00 PM - 9:00 PM) and weekend sessions'
  },
  {
    id: 6,
    name: 'Lisa Thompson',
    title: 'Fitness Model & Nutrition Expert',
    bio: 'Balancing fitness with nutrition for optimal health. Love sharing meal prep ideas and workout routines.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    workouts: 167,
    friends: 203,
    experience: 5,
    achievements: 14,
    about: 'Lisa is a fitness model and nutrition expert who believes in sustainable lifestyle changes. She combines her knowledge of nutrition with practical fitness routines to help others achieve lasting results.',
    goals: [
      'Launch a nutrition coaching business',
      'Develop a meal prep service',
      'Create fitness and nutrition content',
      'Help 500+ people with their nutrition goals'
    ],
    workoutTimes: 'Morning (8:00 AM - 10:00 AM) and evening (5:00 PM - 7:00 PM)'
  }
]

// Helper function to get a profile by ID
export const getProfileById = (id) => {
  return profiles.find(profile => profile.id === parseInt(id))
}

// Helper function to get all profiles
export const getAllProfiles = () => {
  return profiles
}

