import { Ionicons } from "@expo/vector-icons";

export const FRIENDS = [
  {
    id: 1,
    username: "Wizkidayo",
    image: require('./assets/friends/wizkid.png'),
    status: "Yo! check your iMessage",
    level: "amature",
    availability: "online",
    chats: [
      { id: 1, sender: "Wizkidayo", message: "Just finished rehearsing for the show!", time: "02:00 PM" },
      { id: 2, sender: "You", message: "You’re gonna kill it bro 🔥", time: "02:03 PM" },
      { id: 3, sender: "Wizkidayo", message: "Thanks my G! Pull up if you can.", time: "02:05 PM" },
      { id: 4, sender: "You", message: "Wouldn’t miss it!", time: "02:06 PM" },
    ],
  },
  {
    id: 2,
    username: "Lionel Messi",
    image: require('./assets/friends/lionel-messi.png'),
    status: "Just won the world cup",
    level: "expert",
    availability: "online",
    chats: [
      { id: 1, sender: "Lionel Messi", message: "We did it again 🇦🇷🏆", time: "09:00 AM" },
      { id: 2, sender: "You", message: "GOAT energy only!", time: "09:02 AM" },
      { id: 3, sender: "Lionel Messi", message: "Gracias amigo 🙏", time: "09:03 AM" },
    ],
  },
  {
    id: 3,
    username: "Bill Gates",
    image: require('./assets/friends/bill-gates.png'),
    status: "I'm in a meeting",
    level: "novice",
    availability: "online",
    chats: [
      { id: 1, sender: "Bill Gates", message: "Having a tech talk soon.", time: "10:00 AM" },
      { id: 2, sender: "You", message: "Will it be streamed?", time: "10:02 AM" },
      { id: 3, sender: "Bill Gates", message: "Yes, I’ll share the link.", time: "10:03 AM" },
    ],
  },
  {
    id: 4,
    username: "Tiger Woods",
    image: require('./assets/friends/tiger-woods.png'),
    status: "The greated thing about tomorrow is it will be better than",
    level: "master",
    availability: "online",
    chats: [
      { id: 1, sender: "Tiger Woods", message: "Just hit a new record!", time: "08:00 AM" },
      { id: 2, sender: "You", message: "Congrats, champ! ⛳", time: "08:02 AM" },
    ],
  },
  {
    id: 5,
    username: "Lewis Hamilton",
    image: require('./assets/friends/lewis-hamilton.png'),
    status: "I was born to race and to win.",
    level: "professional",
    availability: "online",
    chats: [
      { id: 1, sender: "Lewis Hamilton", message: "Race weekend’s here!", time: "11:00 AM" },
      { id: 2, sender: "You", message: "All the best 🏎️💨", time: "11:01 AM" },
    ],
  },
  {
    id: 6,
    username: "Lebron James",
    image: require('./assets/friends/lebron-james.png'),
    status: "I like criticism, it make me strong.",
    level: "senior",
    availability: "online",
    chats: [
      { id: 1, sender: "You", message: "Ice bath time 😅", time: "07:02 PM" },
      { id: 2, sender: "You", message: require('./assets/house-one.png'), time: "07:02 PM" },
      { id: 3, sender: "Lebron James", message: "Post-game recovery time.", time: "07:00 PM" },
      { id: 4, sender: "Lebron James", message: require('./assets/house-two.png'), time: "07:00 PM" },
    ],
  },
  {
    id: 7,
    username: "Tems",
    image: require('./assets/friends/tems.png'),
    status: "Lagos concerts for the the gangs this December",
    level: "veteran",
    availability: "online",
    chats: [
      { id: 1, sender: "Tems", message: "Studio vibes all night 🎶", time: "03:00 PM" },
      { id: 2, sender: "You", message: "Drop that new track already 😍", time: "03:02 PM" },
    ],
  },
  {
    id: 8,
    username: "Wole Shoyinka",
    image: require('./assets/friends/wole-shoyinka.png'),
    status: "I am a very curious person, I'll always ask.",
    level: "master",
    availability: "online",
    chats: [
      { id: 1, sender: "Wole Shoyinka", message: "Reading a new manuscript.", time: "01:00 PM" },
      { id: 2, sender: "You", message: "Would love to read your next work.", time: "01:02 PM" },
    ],
  },
  {
    id: 9,
    username: "Tasty Pastries",
    image: require('./assets/friends/tasty-pastries.png'),
    status: "Your order is ready!",
    level: "novice",
    availability: "online",
    chats: [
      { id: 1, sender: "Tasty Pastries", message: "Freshly baked for you!", time: "12:00 PM" },
      { id: 2, sender: "You", message: "On my way to pick it up 🍰", time: "12:02 PM" },
    ],
  },
  {
    id: 10,
    username: "Jackie Chan",
    image: require('./assets/friends/jackie-chan.png'),
    status: "Yo! check your iMessage",
    level: "amature",
    availability: "away",
    chats: [
      { id: 1, sender: "Jackie Chan", message: "Just wrapped a stunt scene.", time: "02:00 PM" },
      { id: 2, sender: "You", message: "Still doing your own stunts? Legend!", time: "02:02 PM" },
      { id: 3, sender: "Jackie Chan", message: "Always! Keeps me young 😄", time: "02:04 PM" },
      { id: 4, sender: "You", message: "You make it look effortless.", time: "02:06 PM" },
      { id: 5, sender: "Jackie Chan", message: "It’s all practice and timing.", time: "02:08 PM" },
      { id: 6, sender: "You", message: "Respect! True martial arts master.", time: "02:10 PM" },
      { id: 7, sender: "Jackie Chan", message: "Discipline is everything.", time: "02:12 PM" },
      { id: 8, sender: "You", message: "Can’t wait for your next movie!", time: "02:14 PM" },
    ],
  },
  {
    id: 11,
    username: "Lionel Messi",
    image: require('./assets/friends/lionel-messi.png'),
    status: "Just won the world cup",
    level: "expert",
    availability: "away",
    chats: [
      { id: 1, sender: "Lionel Messi", message: "Taking a little vacation.", time: "09:00 PM" },
      { id: 2, sender: "You", message: "Well deserved, champ!", time: "09:02 PM" },
    ],
  },
  {
    id: 12,
    username: "Bill Gates",
    image: require('./assets/friends/bill-gates.png'),
    status: "I'm in a meeting",
    level: "novice",
    availability: "away",
    chats: [
      { id: 1, sender: "Bill Gates", message: "Conference starts soon.", time: "10:00 AM" },
      { id: 2, sender: "You", message: "Good luck!", time: "10:01 AM" },
    ],
  },
  {
    id: 13,
    username: "Tiger Woods",
    image: require('./assets/friends/tiger-woods.png'),
    status: "The greated thing about tomorrow is it will be better than",
    level: "master",
    availability: "away",
    chats: [
      { id: 1, sender: "Tiger Woods", message: "Long day at the course.", time: "08:00 PM" },
      { id: 2, sender: "You", message: "Rest well, legend.", time: "08:02 PM" },
    ],
  },
  {
    id: 14,
    username: "Lewis Hamilton",
    image: require('./assets/friends/lewis-hamilton.png'),
    status: "I was born to race and to win.",
    level: "professional",
    availability: "away",
    chats: [
      { id: 1, sender: "Lewis Hamilton", message: "Tomorrow’s qualifying day.", time: "11:00 PM" },
      { id: 2, sender: "You", message: "You got this 💪", time: "11:02 PM" },
    ],
  },
  {
    id: 15,
    username: "Lebron James",
    image: require('./assets/friends/lebron-james.png'),
    status: "I like criticism, it make me strong.",
    level: "senior",
    availability: "away",
    chats: [
      { id: 1, sender: "Lebron James", message: "Post-game recovery time.", time: "07:00 PM" },
      { id: 2, sender: "Lebron James", message: require('./assets/house-one.png'), time: "07:00 PM" },
      { id: 3, sender: "You", message: "Ice bath time 😅", time: "07:02 PM" },
      { id: 4, sender: "You", message: "Ice bath time 😅", time: "07:02 PM" },
    ],
  },
  {
    id: 16,
    username: "Tems",
    image: require('./assets/friends/tems.png'),
    status: "Lagos concerts for the the gangs this December",
    level: "veteran",
    availability: "away",
    chats: [
      { id: 1, sender: "Tems", message: "Heading to rehearsals.", time: "03:00 PM" },
      { id: 2, sender: "You", message: "Smash it as always 🎤", time: "03:01 PM" },
    ],
  },
  {
    id: 17,
    username: "Wole Shoyinka",
    image: require('./assets/friends/wole-shoyinka.png'),
    status: "I am a very curious person, I'll always ask.",
    level: "master",
    availability: "away",
    chats: [
      { id: 1, sender: "Wole Shoyinka", message: "Working on new literature.", time: "01:00 PM" },
      { id: 2, sender: "You", message: "Can't wait to read it.", time: "01:01 PM" },
    ],
  },
  {
    id: 18,
    username: "Tasty Pastries",
    image: require('./assets/friends/tasty-pastries.png'),
    status: "Your order is ready!",
    level: "novice",
    availability: "away",
    chats: [
      { id: 1, sender: "Tasty Pastries", message: "Fresh doughnuts just arrived!", time: "12:00 PM" },
      { id: 2, sender: "You", message: "Save me six 😋", time: "12:02 PM" },
    ],
  },
];

export const DEMO_USER = {
  image: require('./assets/friends/user-pics.png'),
  username: 'Zaza',
  groupName: 'Rosco321',
  progress: 84.1,
  email: 'Zaza321@gmail.com',
  tel: '09012637588',
  numberOfRooms: 7,
  friends: '12/36'
}

export const howToLevelUp = [
  'Spending more time on 2go',
  'Cheating in rooms and adding new friends',
  'Purchasing Go credits from the store settings'
]

export const stars = [
  {
    star: require('./assets/icons/novice.png'),
    name: 'Novice'
  },
  {
    star: require('./assets/icons/amateur.png'),
    name: 'Amateur'
  },
  {
    star: require('./assets/icons/senior.png'),
    name: 'Senior'
  },
  {
    star: require('./assets/icons/enthusiast.png'),
    name: 'Enthusiast'
  },
  {
    star: require('./assets/icons/professional.png'),
    name: 'Professional'
  },
  {
    star: require('./assets/icons/expert.png'),
    name: 'Expert'
  },
  {
    star: require('./assets/icons/leader.png'),
    name: 'Leader'
  },
  {
    star: require('./assets/icons/veteran.png'),
    name: 'Veteran'
  },
  {
    star: require('./assets/icons/master.png'),
    name: 'Master'
  },
  {
    star: require('./assets/icons/ultimate.png'),
    name: 'Ultimate'
  }
]
  
  
        
          
            

// const others = [
//   {
//     icon: <Ionicons name="person-outline" size = { 24} color = "white" />,
//     name: 'My profile'
//   },
//   {
//     icon: <Ionicons name="settings" size = { 24} color = "white" />,
//     name: 'Settings'
//   },
//   {
//     icon: <Ionicons name="notifications-outline" size = { 24} color = "white" />,
//     name: 'Notification'
//   },
//   {
//     icon: <Ionicons name="calendar" size = { 24} color = "white" />,
//     name: 'Calendar'
//   },
//   {
//     icon: <Ionicons name="lock-closed-outline" size = { 24} color = "white" />,
//     name: 'Privacy'
//   },
//   {
//     icon: <Ionicons name="star-outline" size = { 24} color = "white" />,
//     name: 'Starred'
//   },
// ]