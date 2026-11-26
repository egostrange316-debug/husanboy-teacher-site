// ============================================================================
// 🎧 MULTILEVEL LISTENING & 📖 CEFR READING MASHQLARI
// ============================================================================
window.HT_LISTENING = [
  {
    id: 'ml_1',
    level: 'B1–B2 • Multilevel Part 1 (Chalg‘ituvchilar)',
    title: 'Booking an English Course',
    script:
      "Receptionist: Good morning, Husanboy Teacher Academy. How can I help you? " +
      "Caller: Hi! I'd like to join the evening B2 course. Does it start on Monday? " +
      "Receptionist: Well, the A2 group starts on Monday, and the B1 group on Tuesday. Our new B2 group actually begins on Wednesday at 6:30 PM. " +
      "Caller: Great, Wednesday works! And how much is the monthly fee? I saw 500 thousand sums on an old poster. " +
      "Receptionist: That was for the individual plan. The regular group fee is 420 thousand sums, and if you register before Friday, you get a free placement book!",
    questions: [
      { q: '1. On which day does the new B2 course start?', opts: ['Monday', 'Tuesday', 'Wednesday'], ans: 2, exp: 'Dushanba (A2) va Seshanba (B1) — chalg‘ituvchi! B2 kursi «Wednesday» (Chorshanba) boshlanadi.' },
      { q: '2. How much is the regular monthly group fee?', opts: ['500,000 sums', '420,000 sums', '350,000 sums'], ans: 1, exp: '500 ming — individual tarif (chalg‘ituvchi). Guruh narxi — 420,000 so‘m.' },
      { q: '3. What bonus do students get if they register before Friday?', opts: ['A free placement book', 'A 50% discount', 'A free tablet'], ans: 0, exp: '«If you register before Friday, you get a free placement book!»' },
    ],
  },
  {
    id: 'ml_2',
    level: 'B2–C1 • Multilevel Part 3 (Academic)',
    title: 'Why Short Daily Study Beats Long Weekend Sessions',
    script:
      "Many students believe that studying English for five hours every Sunday is enough to become fluent. " +
      "However, cognitive scientists have found that the human brain builds stronger language pathways through spaced repetition — " +
      "meaning 20 focused minutes every single day. When you study daily, your brain reviews words right before you forget them, " +
      "especially during deep sleep. That is why students who practice 15 to 20 minutes daily outperform weekend crammers by nearly forty percent.",
    questions: [
      { q: '1. According to cognitive scientists, what builds the strongest language pathways?', opts: ['5-hour Sunday sessions', 'Spaced repetition (20 min daily)', 'Reading dictionaries overnight'], ans: 1, exp: 'Olimlar fikricha, «spaced repetition» — har kuni 20 daqiqa tizimli mashq eng kuchli natija beradi.' },
      { q: '2. When does the brain especially consolidate newly learned words?', opts: ['During deep sleep', 'While watching TV', 'Only in the morning'], ans: 0, exp: '«Especially during deep sleep» — miya yangi so‘zlarni aynan chuqur uyqu paytida mustahkamlaydi.' },
      { q: '3. By roughly how much do daily learners outperform weekend crammers?', opts: ['About 15%', 'Nearly 40%', 'Over 80%'], ans: 1, exp: '«Outperform weekend crammers by nearly forty percent.»' },
    ],
  },
];

window.HT_READING = [
  {
    id: 'rd_1',
    level: 'B1–B2 • CEFR Reading (True / False / Not Given)',
    title: 'The Rise of Smart Cities in Central Asia',
    passage:
      "Over the past decade, several cities in Central Asia have begun investing heavily in smart infrastructure. " +
      "In Tashkent and Samarkand, digital traffic lights now adjust their timing based on real-time vehicle flow, reducing congestion during rush hours by up to 18 percent. " +
      "Public buses are increasingly equipped with GPS trackers, allowing commuters to check exact arrival times on their smartphones. " +
      "However, urban planners emphasize that technology alone cannot solve every city challenge. " +
      "Expanding green parks and encouraging residents to walk or cycle remain equally vital for cleaner air and healthier communities.",
    questions: [
      { q: '1. Digital traffic lights in Tashkent and Samarkand help reduce rush-hour traffic jams.', opts: ['TRUE', 'FALSE', 'NOT GIVEN'], ans: 0, exp: 'TRUE: Matnda «reducing congestion during rush hours by up to 18 percent» deyilgan.' },
      { q: '2. All public buses in Central Asia are now completely electric.', opts: ['TRUE', 'FALSE', 'NOT GIVEN'], ans: 2, exp: 'NOT GIVEN: Matnda avtobuslarda GPS borligi aytilgan, lekin elektr ekani haqida ma’lumot yo‘q.' },
      { q: '3. Urban planners believe technology by itself is enough to fix all urban problems.', opts: ['TRUE', 'FALSE', 'NOT GIVEN'], ans: 1, exp: 'FALSE: «Technology alone cannot solve every city challenge» (faqat texnologiya yetarli emas).' },
    ],
  },
  {
    id: 'rd_2',
    level: 'B2–C1 • Multilevel Reading (Comprehension)',
    title: 'Al-Khwarizmi and the Language of Modern Science',
    passage:
      "More than a thousand years ago, the scholar Muhammad ibn Musa al-Khwarizmi worked at the House of Wisdom in Baghdad. " +
      "His groundbreaking book on systematic equations introduced the term 'algebra', derived from the Arabic word 'al-jabr'. " +
      "Equally remarkable, when his treatises were translated into Latin in medieval Europe, his own name was rendered as 'Algorismi', " +
      "which eventually gave English the word 'algorithm'. Today, every search engine, smartphone app, and artificial intelligence model relies on the logical step-by-step thinking he pioneered.",
    questions: [
      { q: '1. Where did the English word "algorithm" originate from?', opts: ['A Latin translation of Al-Khwarizmi’s name', 'An ancient Greek city', 'A modern computer company'], ans: 0, exp: 'Yevropada lotincha tarjimada uning ismi «Algorismi» deb yozilgan va shundan «algorithm» kelib chiqqan.' },
      { q: '2. What does the passage imply about Al-Khwarizmi’s legacy?', opts: ['It is only studied by historians', 'It still underpins modern digital technology', 'It was lost before the 19th century'], ans: 1, exp: 'Bugungi qidiruv tizimlari, mobil ilovalar va AI uning mantiqiy qadam-baqadam fikrlashiga tayanadi.' },
    ],
  },
];
