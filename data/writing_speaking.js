// ============================================================================
// 📝 MULTILEVEL WRITING LAB & 🎙️ SPEAKING SIMULATOR (Modulli baza)
// ============================================================================
window.HT_WRITING = [
  {
    id: 'w_t1_letter',
    task: 'Task 1 • Letter (150+ so‘z)',
    minWords: 150,
    title: 'Requesting Information About an English Course',
    prompt:
      'You want to take an intensive B2–C1 English course this summer. Write an email to the academy director:\n' +
      '• Explain your current level and goal\n' +
      '• Ask about schedule, fees, and online/offline options\n' +
      '• Ask if there is a free trial lesson available.',
    model:
      "Dear Director,\n\nI am writing to inquire about your upcoming intensive B2–C1 English course this summer. Currently, I hold a B1 level and aim to achieve a C1 Multilevel certificate before university admissions.\n\nCould you please provide details regarding the weekly timetable, tuition fees, and whether classes are offered both offline and online? Additionally, I heard that your academy provides a mobile app and parent progress bot, which sounds extremely motivating.\n\nFinally, I would be grateful if you could let me know whether a free trial lesson is available this week.\n\nI look forward to hearing from you soon.\n\nBest regards,\nAli Valiyev",
  },
  {
    id: 'w_t2_essay',
    task: 'Task 2 • Essay (250+ so‘z)',
    minWords: 250,
    title: 'Smartphones in Education: Distraction or Powerful Tool?',
    prompt:
      'Some people believe that smartphones distract teenagers from studying, while others argue that mobile apps make learning faster and more effective. Discuss both views and give your own opinion.',
    model:
      "In the digital age, smartphones have become an inseparable part of teenagers' daily lives. While many parents worry that mobile devices reduce concentration, others contend that well-designed educational apps can dramatically accelerate learning. In my view, smartphones are highly beneficial when paired with clear study discipline.\n\nOn the one hand, unregulated phone usage undoubtedly harms academic focus. Social media platforms and mobile games are engineered to capture attention for hours, often leaving students exhausted before they even open their textbooks. Without parental oversight, teenagers may struggle to balance entertainment with homework.\n\nOn the other hand, modern educational technology transforms a smartphone into a personal tutor. Interactive grammar games, offline audio lessons, and spaced-repetition flashcards allow learners to practice English anywhere — even during a 15-minute commute. Moreover, when an app automatically tracks study streaks and notifies parents about excessive gaming, the device reinforces positive habits rather than breaking them.\n\nIn conclusion, although uncontrolled screen time poses a genuine threat to concentration, smartphones themselves are not the enemy. With structured daily goals and transparent monitoring, mobile learning can empower students to achieve fluency faster than ever before.",
  },
];

window.HT_LINKING_WORDS = [
  { en: 'Moreover,', uz: 'Bundan tashqari' },
  { en: 'However,', uz: 'Biroq / Lekin' },
  { en: 'On the one hand,', uz: 'Bir tomondan' },
  { en: 'On the other hand,', uz: 'Ikkinchi tomondan' },
  { en: 'Consequently,', uz: 'Natijada' },
  { en: 'Nevertheless,', uz: 'Shunga qaramay' },
  { en: 'In my view,', uz: 'Mening fikrimcha' },
  { en: 'For instance,', uz: 'Masalan' },
  { en: 'In conclusion,', uz: 'Xulosa qilib aytganda' },
  { en: 'Owing to the fact that', uz: '...sababli (rasmiy)' },
];

window.HT_SPEAKING = [
  {
    id: 'sp_p1',
    part: 'Part 1 • Kundalik savollar (30–45 soniya)',
    prepSec: 10,
    speakSec: 45,
    title: 'Learning Languages & Daily Routine',
    cue: [
      '1. How long have you been learning English?',
      '2. What part of English is the most challenging for you?',
      '3. Do you prefer studying with a mobile app or a textbook? Why?',
    ],
    model:
      "I've been learning English consistently for about two years now. At first, listening to fast native speakers was quite challenging, so I started practicing shadowing and dictation for 15 minutes every morning. Personally, I prefer combining a structured mobile app with live teacher feedback because it keeps my daily streak alive and makes grammar feel like a game.",
  },
  {
    id: 'sp_p2',
    part: 'Part 2 • Cue Card (1 min tayyorlanish → 2 min gapirish)',
    prepSec: 60,
    speakSec: 120,
    title: 'Describe a Skill You Learned That Helped You a Lot',
    cue: [
      '• What the skill is',
      '• How and where you learned it',
      '• How long it took you to become good at it',
      '• And explain why this skill is so useful in your life.',
    ],
    model:
      "One of the most valuable skills I have ever developed is speaking English confidently. I began learning seriously about a year ago using a structured 450-day system with my teacher. At the beginning, I used to hesitate because I was afraid of making grammar mistakes. However, by practicing 20 minutes every day — listening to audios on my way to school and speaking aloud — I gradually built fluency. Today, this skill allows me to read international books, watch educational lectures without subtitles, and aim for a high Multilevel certificate.",
  },
  {
    id: 'sp_p3',
    part: 'Part 3 • Chuqur muhokama (1–1.5 daqiqa)',
    prepSec: 15,
    speakSec: 75,
    title: 'Technology & Future of Education',
    cue: [
      '• Will artificial intelligence replace human teachers in the future?',
      '• How can parents help children use smartphones productively?',
    ],
    model:
      "While artificial intelligence is a remarkable assistant for instant practice and grammar feedback, I firmly believe it will never completely replace human teachers. A great teacher inspires students, notices their emotions, and builds real discipline. As for parents, the key is not banning phones altogether, but guiding children with transparent daily goals and praising their consistent effort.",
  },
];
