export interface Messageformat {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

export const chatData: Messageformat[] = [
  { id: 1, sender: "Alice", content: "Hi there!", timestamp: "2024-03-19T08:00:00" },
  { id: 2, sender: "Bob", content: "Hey Alice, how are you?", timestamp: "2024-03-19T08:05:00" },
  { id: 3, sender: "Alice", content: "I'm doing well, thanks for asking!", timestamp: "2024-03-19T08:10:00" },
  { id: 4, sender: "Bob", content: "That's good to hear!", timestamp: "2024-03-19T08:15:00" },
  { id: 5, sender: "Bob", content: "What are you up to today?", timestamp: "2024-03-19T08:20:00" },
  { id: 6, sender: "Alice", content: "Just working on some projects. How about you?", timestamp: "2024-03-19T08:25:00" },
  { id: 7, sender: "Bob", content: "I'm studying for exams. It's been quite stressful.", timestamp: "2024-03-19T08:30:00" },
  { id: 8, sender: "Alice", content: "Hang in there! You'll do great.", timestamp: "2024-03-19T08:35:00" },
  { id: 9, sender: "Bob", content: "Thanks, Alice. Your words mean a lot.", timestamp: "2024-03-19T08:40:00" },
  { id: 10, sender: "Bob", content: "By the way, have you tried that new restaurant downtown?", timestamp: "2024-03-19T08:45:00" },
  { id: 11, sender: "Alice", content: "Not yet, but I've heard good things about it. Let's go together sometime! The restaurant's ambience exudes warmth and elegance, creating a delightful atmosphere for a memorable dining experience. Their exquisite culinary creations tantalize the taste buds, showcasing a perfect harmony of flavors and presentation.", timestamp: "2024-03-19T08:50:00" },
  { id: 12, sender: "Bob", content: "Sounds like a plan!", timestamp: "2024-03-19T08:55:00" },
  { id: 13, sender: "Alice", content: "Great! Let me know when you're free.", timestamp: "2024-03-19T09:00:00" },
  { id: 14, sender: "Bob", content: "Will do. I'll check my schedule and get back to you.", timestamp: "2024-03-19T09:05:00" },
  { id: 15, sender: "Bob", content: "Gotta go now. Talk to you later!", timestamp: "2024-03-19T09:10:00" },
  // Add more messages as needed...
];
