// ============================================================================
// 🗺️ MULTILEVEL / IELTS MAP LABELING MASHQLARI (Modulli — oson qo'shiladi!)
// ============================================================================
window.HT_MAPS = [
  {
    id: 'map_park',
    level: 'B1–B2 • Multilevel Part 2',
    title: 'Greenwood City Park & Library',
    subtitle: 'Audioni tinglang va har bir bino qaysi harfda (A–F) joylashganini tanlang.',
    script:
      "Welcome to Greenwood City Park! You are currently standing at the Main Entrance on South Road. " +
      "If you walk straight north along Central Path, immediately on your left before the fountain is the Visitor Information Center. " +
      "Now look to the far northeast corner of the park, right behind the pond — that large building is the New Public Library. " +
      "On the east side, directly opposite the fountain, we recently opened a cozy Park Cafe where students love to read. " +
      "Finally, if you head west from the fountain toward Oak Street, the building in the northwest corner is the Children's Science Museum.",
    svg: `
      <svg viewBox="0 0 640 400" class="map-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="400" rx="18" fill="#0b162c"/>
        <!-- Roads -->
        <rect x="0" y="345" width="640" height="36" fill="#1e293b"/>
        <text x="320" y="368" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">SOUTH ROAD</text>
        <rect x="20" y="0" width="32" height="345" fill="#1e293b"/>
        <text x="36" y="185" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="700" transform="rotate(-90 36 185)">OAK STREET</text>
        <!-- Central Path & Cross Path -->
        <rect x="304" y="50" width="32" height="295" fill="#334155"/>
        <text x="320" y="295" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="700" transform="rotate(-90 320 295)">CENTRAL PATH</text>
        <rect x="52" y="180" width="540" height="26" fill="#334155"/>
        <!-- Fountain & Pond -->
        <circle cx="320" cy="193" r="28" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
        <text x="320" y="197" text-anchor="middle" fill="#fff" font-size="11" font-weight="800">Fountain</text>
        <ellipse cx="475" cy="128" rx="48" ry="24" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="475" y="132" text-anchor="middle" fill="#e0f2fe" font-size="11" font-weight="700">Pond</text>
        <!-- Main Entrance -->
        <rect x="262" y="330" width="116" height="24" rx="8" fill="#10b981"/>
        <text x="320" y="346" text-anchor="middle" fill="#052e16" font-size="11" font-weight="900">MAIN ENTRANCE</text>
        <!-- Compass -->
        <g transform="translate(585,48)">
          <circle r="24" fill="#13223f" stroke="#475569" stroke-width="1.5"/>
          <text x="0" y="-9" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="900">N</text>
          <text x="0" y="18" text-anchor="middle" fill="#94a3b8" font-size="10">S</text>
          <text x="-14" y="4" text-anchor="middle" fill="#94a3b8" font-size="10">W</text>
          <text x="14" y="4" text-anchor="middle" fill="#94a3b8" font-size="10">E</text>
        </g>
        <!-- Pin Spots A-F -->
        <g class="pin"><rect x="105" y="42" width="110" height="58" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="160" y="78" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="900">A</text></g>
        <g class="pin"><rect x="445" y="28" width="105" height="54" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="497" y="62" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="900">B</text></g>
        <g class="pin"><rect x="175" y="242" width="105" height="56" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="227" y="277" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="900">C</text></g>
        <g class="pin"><rect x="445" y="166" width="105" height="56" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="497" y="201" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="900">D</text></g>
        <g class="pin"><rect x="372" y="242" width="105" height="56" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="424" y="277" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="900">E</text></g>
        <g class="pin"><rect x="105" y="114" width="105" height="52" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="157" y="147" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="900">F</text></g>
      </svg>
    `,
    options: ['A', 'B', 'C', 'D', 'E', 'F'],
    questions: [
      { label: '1. Visitor Information Center', ans: 'C', exp: '«Immediately on your left before the fountain» — Central Path bo‘ylab shimolga yurganda favvoradan oldin chapda (C).' },
      { label: '2. New Public Library', ans: 'B', exp: '«Far northeast corner, right behind the pond» — hovuz ortidagi shimoli-sharqiy burchak (B).' },
      { label: '3. Park Cafe', ans: 'D', exp: '«On the east side, directly opposite the fountain» — favvoraning to‘g‘risida sharq tomonda (D).' },
      { label: "4. Children's Science Museum", ans: 'A', exp: '«Northwest corner toward Oak Street» — Oak Street tomonidagi shimoli-g‘arbiy burchak (A).' },
    ],
  },
  {
    id: 'map_campus',
    level: 'B2 • IELTS / Multilevel Map',
    title: 'International University Campus',
    subtitle: 'Kampus xaritasini diqqat bilan kuzating va 4 ta joyni aniqlang.',
    script:
      "Hello new students! Let's orient ourselves on campus. From the Main Gate at the bottom, walk north up University Avenue. " +
      "The first building on your right is the Student Registration Office — make sure you visit it today. " +
      "Continue north past the Central Square. At the top center, facing the square directly, stands the Main Lecture Hall. " +
      "Now, if you turn left at Central Square, you'll see two buildings on the west side: the Sports Complex is the one further south, closer to the Main Gate, while the Modern Language Lab is in the northwest corner.",
    svg: `
      <svg viewBox="0 0 640 400" class="map-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="400" rx="18" fill="#0b162c"/>
        <rect x="302" y="110" width="36" height="240" fill="#334155"/>
        <rect x="90" y="186" width="460" height="30" fill="#334155"/>
        <rect x="265" y="164" width="110" height="72" rx="14" fill="#1e3a5f" stroke="#34d399" stroke-width="2.5"/>
        <text x="320" y="197" text-anchor="middle" fill="#a7f3d0" font-size="12" font-weight="800">CENTRAL</text>
        <text x="320" y="213" text-anchor="middle" fill="#a7f3d0" font-size="12" font-weight="800">SQUARE</text>
        <rect x="265" y="346" width="110" height="28" rx="8" fill="#fbbf24"/>
        <text x="320" y="365" text-anchor="middle" fill="#1e1b4b" font-size="12" font-weight="900">MAIN GATE</text>
        <g transform="translate(585,48)">
          <circle r="24" fill="#13223f" stroke="#475569" stroke-width="1.5"/>
          <text x="0" y="-9" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="900">N</text>
          <text x="0" y="18" text-anchor="middle" fill="#94a3b8" font-size="10">S</text>
          <text x="-14" y="4" text-anchor="middle" fill="#94a3b8" font-size="10">W</text>
          <text x="14" y="4" text-anchor="middle" fill="#94a3b8" font-size="10">E</text>
        </g>
        <rect x="255" y="34" width="130" height="62" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><text x="320" y="73" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="900">A</text>
        <rect x="70" y="56" width="115" height="62" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><text x="127" y="95" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="900">B</text>
        <rect x="70" y="246" width="115" height="62" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><text x="127" y="285" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="900">C</text>
        <rect x="405" y="256" width="125" height="62" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><text x="467" y="295" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="900">D</text>
        <rect x="445" y="88" width="115" height="62" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><text x="502" y="127" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="900">E</text>
      </svg>
    `,
    options: ['A', 'B', 'C', 'D', 'E'],
    questions: [
      { label: '1. Student Registration Office', ans: 'D', exp: '«First building on your right» — Main Gate’dan kirganda o‘ng tomondagi birinchi bino (D).' },
      { label: '2. Main Lecture Hall', ans: 'A', exp: '«At the top center, facing the square directly» — tepa markazda, maydonga qaragan bino (A).' },
      { label: '3. Sports Complex', ans: 'C', exp: '«West side, further south, closer to the Main Gate» — g‘arb tomonda janubroqdagi bino (C).' },
      { label: '4. Modern Language Lab', ans: 'B', exp: '«In the northwest corner» — shimoli-g‘arbiy burchakdagi bino (B).' },
    ],
  },
  {
    id: 'map_museum',
    level: 'B2–C1 • IELTS Listening Section 2',
    title: 'Samarkand Heritage Museum Floor Plan',
    subtitle: 'Muzey ichki rejasini tinglab, 4 ta zal joylashuvini toping.',
    script:
      "Welcome to the Samarkand Heritage Museum! You are entering through the Ticket Hall at the bottom center. " +
      "Directly straight ahead in the center of the museum is the Silk Road Dome. " +
      "If you go to the room on the far left of the Ticket Hall, before walking north, you'll find the Souvenir & Book Shop. " +
      "Upstairs in the top-left corner, overlooking the garden, is the Astronomy Gallery dedicated to Mirzo Ulugbek. " +
      "Finally, directly across from the Astronomy Gallery in the top-right corner is the Audio-Guide Cinema.",
    svg: `
      <svg viewBox="0 0 640 400" class="map-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="400" rx="18" fill="#0b162c"/>
        <rect x="60" y="36" width="520" height="328" rx="14" fill="#0f1d38" stroke="#475569" stroke-width="2"/>
        <circle cx="320" cy="196" r="52" fill="#134e4a" stroke="#10b981" stroke-width="3"/>
        <text x="320" y="192" text-anchor="middle" fill="#a7f3d0" font-size="12" font-weight="800">SILK ROAD</text>
        <text x="320" y="208" text-anchor="middle" fill="#a7f3d0" font-size="12" font-weight="800">DOME</text>
        <rect x="255" y="330" width="130" height="34" rx="8" fill="#10b981"/>
        <text x="320" y="352" text-anchor="middle" fill="#052e16" font-size="12" font-weight="900">TICKET HALL</text>
        <rect x="82" y="56" width="130" height="68" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="147" y="98" text-anchor="middle" fill="#34d399" font-size="24" font-weight="900">A</text>
        <rect x="428" y="56" width="130" height="68" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="493" y="98" text-anchor="middle" fill="#34d399" font-size="24" font-weight="900">B</text>
        <rect x="82" y="274" width="130" height="68" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="147" y="316" text-anchor="middle" fill="#34d399" font-size="24" font-weight="900">C</text>
        <rect x="428" y="274" width="130" height="68" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="493" y="316" text-anchor="middle" fill="#34d399" font-size="24" font-weight="900">D</text>
      </svg>
    `,
    options: ['A', 'B', 'C', 'D'],
    questions: [
      { label: '1. Souvenir & Book Shop', ans: 'C', exp: '«Far left of the Ticket Hall, before walking north» — pastki chap burchak (C).' },
      { label: '2. Astronomy Gallery (Ulugbek)', ans: 'A', exp: '«Top-left corner, overlooking the garden» — yuqori chap burchak (A).' },
      { label: '3. Audio-Guide Cinema', ans: 'B', exp: '«Across from the Astronomy Gallery in the top-right corner» — yuqori o‘ng burchak (B).' },
    ],
  },
];
