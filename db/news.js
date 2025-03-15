const newsList = [
  {
    id: 1,
    title: 'Nagrada Good Design Award Avstralija za projekt KCDM',
    date: '2025-04-15',
  },
  {
    id: 2,
    title: 'Nagrada Good Design Award Avstralija za projekt KCDM',
    date: '2025-02-07',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor lorem ipsum',
    date: '2024-02-28',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor',
    date: '2025-03-11',
  },
  {
    id: 5,
    title: 'Inovativnosti namenjamo premalo časa in prostora',
    date: '2025-07-12',
  },
  {
    id: 6,
    title: 'Poletni raziskovalni simpozij',
    date: '2025-06-20',
  },
  {
    id: 7,
    title: 'Nove tehnologije v medicini',
    date: '2025-05-18',
  },
  {
    id: 8,
    title: 'Mednarodni festival inovacij',
    date: '2025-04-22',
  },
  {
    id: 9,
    title: 'Napredek pri trajnostnem razvoju',
    date: '2025-03-15',
  },
  {
    id: 10,
    title: 'Nov raziskovalni center',
    date: '2025-02-28',
  },
  {
    id: 11,
    title: 'Umetna inteligenca v vsakdanjem življenju',
    date: '2025-01-17',
  },
  {
    id: 12,
    title: 'Podnebne spremembe in njihov vpliv',
    date: '2024-12-10',
  },
  {
    id: 13,
    title: 'Digitalizacija izobraževanja',
    date: '2024-11-05',
  },
  {
    id: 14,
    title: 'Razvoj kvantnega računalništva',
    date: '2024-10-22',
  },
  {
    id: 15,
    title: 'Svetovni dan znanosti',
    date: '2024-10-10',
  },
  {
    id: 16,
    title: 'Nove metode recikliranja',
    date: '2025-05-05',
  },
  {
    id: 17,
    title: 'Prihodnost mobilnosti',
    date: '2024-11-28',
  },
  {
    id: 18,
    title: 'Inovativni pristopi k urbanemu načrtovanju',
    date: '2025-01-30',
  },
  {
    id: 19,
    title: 'Nova odkritja v vesolju',
    date: '2024-12-15',
  },
  {
    id: 20,
    title: 'Tehnološki napredek v kmetijstvu',
    date: '2025-02-10',
  },
  {
    id: 21,
    title: 'Napredek pri zdravljenju raka',
    date: '2025-04-05',
  },
  {
    id: 22,
    title: 'Razvoj obnovljivih virov energije',
    date: '2025-03-20',
  },
  {
    id: 23,
    title: 'Nove tehnologije v gradbeništvu',
    date: '2025-06-12',
  },
  {
    id: 24,
    title: 'Napredek pri umetni inteligenci',
    date: '2024-10-30',
  },
  {
    id: 25,
    title: 'Mednarodno znanstveno sodelovanje',
    date: '2025-05-25',
  },
  {
    id: 26,
    title: 'Nove metode učenja',
    date: '2025-01-05',
  },
  {
    id: 27,
    title: 'Napredek pri zdravljenju nevrodegenerativnih bolezni',
    date: '2024-11-15',
  },
  {
    id: 28,
    title: 'Trajnostni razvoj mest',
    date: '2025-06-05',
  },
  {
    id: 29,
    title: 'Nove metode shranjevanja energije',
    date: '2024-12-28',
  },
  {
    id: 30,
    title: 'Napredek pri tehnologiji virtualne resničnosti',
    date: '2025-04-28',
  },
  {
    id: 31,
    title: 'Inovacije v tekstilni industriji',
    date: '2025-03-08',
  },
  {
    id: 32,
    title: 'Napredek pri genskem inženiringu',
    date: '2024-11-22',
  },
  {
    id: 33,
    title: 'Nove tehnologije v transportu',
    date: '2025-02-15',
  },
  {
    id: 34,
    title: 'Razvoj pametnih mest',
    date: '2025-05-15',
  },
  {
    id: 35,
    title: 'Napredek pri zdravljenju sladkorne bolezni',
    date: '2024-10-15',
  },
  {
    id: 36,
    title: 'Inovacije v prehranski industriji',
    date: '2025-01-22',
  },
  {
    id: 37,
    title: 'Nove metode za čiščenje oceanov',
    date: '2025-06-28',
  },
  {
    id: 38,
    title: 'Napredek pri robotiki',
    date: '2024-12-05',
  },
  {
    id: 39,
    title: 'Razvoj novih materialov',
    date: '2025-03-28',
  },
  {
    id: 40,
    title: 'Napredek pri zdravljenju srčno-žilnih bolezni',
    date: '2025-02-22',
  },
  {
    id: 41,
    title: 'Inovacije v farmacevtski industriji',
    date: '2024-11-10',
  },
  {
    id: 42,
    title: 'Nove tehnologije za čiščenje zraka',
    date: '2025-04-10',
  },
  {
    id: 43,
    title: 'Napredek pri obnovljivi energiji',
    date: '2025-05-10',
  },
  {
    id: 44,
    title: 'Razvoj novih metod za recikliranje',
    date: '2024-10-25',
  },
  {
    id: 45,
    title: 'Napredek pri tehnologiji baterij',
    date: '2025-01-10',
  },
  {
    id: 46,
    title: 'Inovacije v vodni industriji',
    date: '2025-06-15',
  },
  {
    id: 47,
    title: 'Nove metode za zdravljenje duševnih motenj',
    date: '2024-12-22',
  },
  {
    id: 48,
    title: 'Napredek pri umetni inteligenci v zdravstvu',
    date: '2025-03-05',
  },
  {
    id: 49,
    title: 'Razvoj novih metod za proizvodnjo hrane',
    date: '2024-11-30',
  },
  {
    id: 50,
    title: 'Napredek pri tehnologiji zajemanja ogljika',
    date: '2025-02-05',
  },
  {
    id: 51,
    title: 'Inovacije v avtomobilski industriji',
    date: '2025-05-22',
  },
  {
    id: 52,
    title: 'Nove metode za proizvodnjo energije',
    date: '2024-10-20',
  },
  {
    id: 53,
    title: 'Napredek pri tehnologiji 3D tiskanja',
    date: '2025-04-20',
  },
  {
    id: 54,
    title: 'Razvoj novih metod za shranjevanje podatkov',
    date: '2025-01-15',
  },
  {
    id: 55,
    title: 'Napredek pri zdravljenju avtoimunskih bolezni',
    date: '2024-12-15',
  },
  {
    id: 56,
    title: 'Inovacije v energetski industriji',
    date: '2025-06-10',
  },
  {
    id: 57,
    title: 'Nove metode za čiščenje tal',
    date: '2024-11-25',
  },
  {
    id: 58,
    title: 'Napredek pri tehnologiji kvantnega računalništva',
    date: '2025-03-15',
  },
  {
    id: 59,
    title: 'Razvoj novih metod za trajnostno kmetijstvo',
    date: '2025-02-28',
  },
  {
    id: 60,
    title: 'Napredek pri tehnologiji pametnih domov',
    date: '2024-10-28',
  },
  {
    id: 61,
    title: 'Inovacije v transportni industriji',
    date: '2025-05-28',
  },
  {
    id: 62,
    title: 'Nove metode za proizvodnjo vodika',
    date: '2024-12-28',
  },
  {
    id: 63,
    title: 'Napredek pri tehnologiji obnovljive energije',
    date: '2025-04-15',
  },
  {
    id: 64,
    title: 'Razvoj novih metod za diagnozo bolezni',
    date: '2025-01-28',
  },
  {
    id: 65,
    title: 'Napredek pri tehnologiji pametnih mest',
    date: '2024-11-20',
  },
  {
    id: 66,
    title: 'Inovacije v telekomunikacijski industriji',
    date: '2025-03-22',
  },
  {
    id: 67,
    title: 'Nove metode za proizvodnjo materialov',
    date: '2024-10-15',
  },
  {
    id: 68,
    title: 'Napredek pri tehnologiji umetne inteligence',
    date: '2025-06-22',
  },
  {
    id: 69,
    title: 'Razvoj novih metod za zdravljenje bolezni',
    date: '2025-02-15',
  },
  {
    id: 70,
    title: 'Napredek pri tehnologiji obnovljive energije',
    date: '2024-12-10',
  },
  {
    id: 71,
    title: 'Inovacije v farmacevtski industriji',
    date: '2025-05-15',
  },
  {
    id: 72,
    title: 'Nove metode za čiščenje vode',
    date: '2024-11-15',
  },
  {
    id: 73,
    title: 'Napredek pri tehnologiji električnih vozil',
    date: '2025-04-22',
  },
  {
    id: 74,
    title: 'Razvoj novih metod za proizvodnjo energije',
    date: '2025-01-20',
  },
  {
    id: 75,
    title: 'Napredek pri tehnologiji avtonomnih vozil',
    date: '2024-10-22',
  },
  {
    id: 76,
    title: 'Inovacije v tekstilni industriji',
    date: '2025-03-10',
  },
  {
    id: 77,
    title: 'Nove metode za recikliranje plastike',
    date: '2024-12-22',
  },
  {
    id: 78,
    title: 'Napredek pri tehnologiji obnovljive energije',
    date: '2025-06-28',
  },
  {
    id: 79,
    title: 'Razvoj novih metod za zdravljenje raka',
    date: '2025-02-22',
  },
  {
    id: 80,
    title: 'Napredek pri tehnologiji 5G',
    date: '2024-11-28',
  },
  {
    id: 81,
    title: 'Inovacije v avtomobilski industriji',
    date: '2025-04-28',
  },
  {
    id: 82,
    title: 'Nove metode za proizvodnjo materialov',
    date: '2025-01-15',
  },
  {
    id: 83,
    title: 'Napredek pri tehnologiji nanomaterialov',
    date: '2024-10-28',
  },
  {
    id: 84,
    title: 'Razvoj novih metod za proizvodnjo energije',
    date: '2025-05-10',
  },
  {
    id: 85,
    title: 'Napredek pri tehnologiji pametnih domov',
    date: '2024-12-15',
  },
  {
    id: 86,
    title: 'Inovacije v energetski industriji',
    date: '2025-03-28',
  },
  {
    id: 87,
    title: 'Nove metode za čiščenje zraka',
    date: '2024-11-10',
  },
  {
    id: 88,
    title: 'Napredek pri tehnologiji obnovljive energije',
    date: '2025-07-05',
  },
  {
    id: 89,
    title: 'Razvoj novih metod za zdravljenje bolezni',
    date: '2025-02-10',
  },
  {
    id: 90,
    title: 'Napredek pri tehnologiji umetne inteligence',
    date: '2024-10-15',
  },
  {
    id: 91,
    title: 'Inovacije v telekomunikacijski industriji',
    date: '2025-05-22',
  },
  {
    id: 92,
    title: 'Nove metode za recikliranje elektronskih odpadkov',
    date: '2024-12-28',
  },
  {
    id: 93,
    title: 'Napredek pri tehnologiji virtualne resničnosti',
    date: '2025-04-15',
  },
  {
    id: 94,
    title: 'Razvoj novih metod za diagnozo bolezni',
    date: '2025-01-28',
  },
  {
    id: 95,
    title: 'Napredek pri tehnologiji kvantnega računalništva',
    date: '2024-11-05',
  },
]

export default newsList
