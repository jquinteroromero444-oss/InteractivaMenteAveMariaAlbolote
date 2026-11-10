// =============================================================================
// INTERACTIVAMENTE: Base de datos y Almacenamiento Local (localStorage)
// Red Escolar de Lectura Activa · Colegio Ave María Albolote
// =============================================================================

const STORAGE_KEY_REVIEWS = 'interactivamente_reviews_v1';
const STORAGE_KEY_WISHLIST = 'interactivamente_wishlist_v1';
const STORAGE_KEY_LIKES = 'interactivamente_likes_v1';
const STORAGE_KEY_DRAFT = 'interactivamente_draft_v1';
const STORAGE_KEY_SETTINGS = 'interactivamente_settings_v1';

// Catálogo de libros predeterminado
const DEFAULT_BOOKS = [
  {
    id: 'asesinato-para-principiantes',
    title: 'Asesinato para principiantes',
    originalTitle: "A Good Girl's Guide to Murder",
    author: 'Holly Jackson',
    publisher: 'Crossbooks / Destino',
    series: 'Primer libro de la trilogía Pip Fitz-Amobi',
    isSequel: false,
    pages: 448,
    isbn: '978-84-08-22345-0',
    stage: 'Secundaria',
    ageRange: '14',
    ageLabel: '14+ ESO (3º y 4º ESO)',
    genre: 'misterio',
    genreLabel: 'Misterio e investigación',
    tags: ['Misterio juvenil', 'Investigación deductiva', 'Juicio crítico escolar'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO8QUkek0inUNJ9UOvftBUPmycFVb0bK-VskXGGjH-9diV6oKUFScA64AaJzKnKxGGIS8Tctuii5lD26cuTDkV2K6UaiTNZyFfnQk0NpPls2c44roIuZgFaYMbtnnb940alcnMWCakgiLkgTLhFrdsAF3Ai88R_A97LT0BShUdjYtVJiE0d-307y0DXzGquk8PE5J5jUQNvau0J9YZwspxBb94-ViSmLvXIMTXiB0pD6rHHG8Z1NkrBw',
    libraryCopies: 3,
    pedagogicalGuide: 'Lectura muy recomendada para 3º y 4º de ESO. Fomenta el razonamiento lógico, el pensamiento deductivo y el hábito de lectura autónoma mediante una estructura atractiva y contemporánea.',
    department: 'Departamento de Lengua y Literatura'
  },
  {
    id: 'el-nino-con-el-pijama-de-rayas',
    title: 'El niño con el pijama de rayas',
    originalTitle: 'The Boy in the Striped Pyjamas',
    author: 'John Boyne',
    publisher: 'Salamandra',
    series: 'Obra autoconclusiva',
    isSequel: false,
    pages: 224,
    isbn: '978-84-9838-079-8',
    stage: 'Secundaria',
    ageRange: '12',
    ageLabel: '12+ ESO (1º y 2º ESO)',
    genre: 'historia',
    genreLabel: 'Historia y drama',
    tags: ['Novela histórica', 'Empatía y valores', 'Memoria histórica'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2x8LPnF4PRYgVbocftOsUgcr5WkGpwLgkW1srv-8wgzpB_fMrSqjHfg2NyISuLPn36veRNh7fbPIIJMRwgVvq-dpi70s-1D8yzbVmC5FcwchGqyr-aw3w_Fv6kYsNFMdgU7X5MT8TUAjXPTROkUjyajK71DW4-dD8pRsnORv52B86H1b4qUCgh55OqYZhoiMbN17YuZiMInZhhZ8qrxx8WV6lT0fhjsmRyX_Frg-Wrp4kIdR4KT5Mjg',
    libraryCopies: 4,
    pedagogicalGuide: 'Una obra fundamental para trabajar la empatía, el contexto de la Segunda Guerra Mundial y las consecuencias del odio desde una mirada infantil libre de prejuicios.',
    department: 'Departamento de Ciencias Sociales y Lengua'
  },
  {
    id: 'powerless',
    title: 'Powerless',
    originalTitle: 'Powerless',
    author: 'Lauren Roberts',
    publisher: 'Alfaguara Juvenil',
    series: 'Trilogía Powerless (Libro 1)',
    isSequel: false,
    pages: 520,
    isbn: '978-84-204-7652-1',
    stage: 'Secundaria',
    ageRange: '14',
    ageLabel: '14+ ESO (3º y 4º ESO)',
    genre: 'fantasia',
    genreLabel: 'Fantasía y aventuras',
    tags: ['Fantasía juvenil', 'Aventuras y magia', 'Superación personal'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUcUyuR-BOF3WkKhkY633rQzoQhrMG0xGCOAPNaijLQXxn2PRRYyUlociNcCvJGD_t46TN8BlBF--WzrNq_1_XBhK7r-pK-Hl3ukApUk8dEl_GCmnoRv4WOKW3_dcKRG-nC9vBN1QbBeYbe24r2vyMdLeRKk0e6nDQeuI7xPYcs9aQ1CgYDJxIe5x59OK_hpHvcpt_aSJFZT3Ce2iclH9m1dCNeyJP32HnOfQwUQgMU1U1dyVMSvYZJw',
    libraryCopies: 2,
    pedagogicalGuide: 'Estimula la imaginación narrativa y el análisis de estructuras de poder en reinos ficticios, con dilemas sobre la equidad y la resistencia pacífica.',
    department: 'Departamento de Lengua y Literatura'
  },
  {
    id: 'invisible',
    title: 'Invisible',
    originalTitle: 'Invisible',
    author: 'Eloy Moreno',
    publisher: 'Nube de Tinta',
    series: 'Novela autoconclusiva',
    isSequel: false,
    pages: 304,
    isbn: '978-84-16588-43-5',
    stage: 'Secundaria',
    ageRange: '12',
    ageLabel: '12+ ESO (Toda Secundaria)',
    genre: 'bullying',
    genreLabel: 'Convivencia escolar',
    tags: ['Convivencia escolar', 'Prevención del acoso', 'Empatía y valores'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEQ3JXc-ilM7Zp-x-lET_2BQF2Pre3m5sNbXi3OnLvGwn42bRPyNsK7iXd_eXqjTAcYv9nfvbVSHVMpQuoc4n42M9E6SjTPI3-kInilvEidFWflb4ZY7mR-dU5M1-LEXY0ZkNQVeyCkJIhvwnDuDry2ddq2rp2qFK8LnFo9yiOXleiJOLFgbB1ixqrEIpUIYs_c1Q5jvacwAuGGoMqbeaJiGUMJE7Y4_TXl349dkRqpUz9mYJU2qeVVw',
    libraryCopies: 5,
    pedagogicalGuide: 'Lectura imprescindible para reflexionar sobre la importancia de no callar ante el acoso escolar y el papel decisivo de los testigos en el aula.',
    department: 'Equipo de Orientación y Tutorías'
  },
  {
    id: 'el-cazador-de-estrellas',
    title: 'El cazador de estrellas',
    originalTitle: 'El cazador de estrellas',
    author: 'Ricardo Gómez',
    publisher: 'Edelvives / Ala Delta',
    series: 'Autoconclusivo',
    isSequel: false,
    pages: 168,
    isbn: '978-84-263-5982-7',
    stage: 'Secundaria',
    ageRange: '12',
    ageLabel: '12+ ESO (1º y 2º ESO)',
    genre: 'social',
    genreLabel: 'Drama social y solidaridad',
    tags: ['Drama social', 'Solidaridad', 'Resiliencia y poesía'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgmZL8OE2mi0J2KSVPwfkbr7lU-SVcEoKsRFM3GeJo-l7_31BlCGh7hDN23KCA9x-0PdUVowbfwDa4hupAYyIs_NLKopTnIRm2QQM1J409vzf9xumL1PxhY3tBIiyn32fGqDmV6GRz1NveLCWqPzU6MhL34rTqYP1V9pZFsC8IVEK4CWk9nKQSCGqNRZLO6XkwUZ_ssoPnfSirVl39OkZpeFA2ylu64mhc3mttgZIecye2QQzgQ4sWVA',
    libraryCopies: 3,
    pedagogicalGuide: 'Sensibiliza sobre la realidad de los refugiados saharauis a través de una prosa lírica y accesible para los primeros cursos de ESO.',
    department: 'Departamento de Lengua y Cooperación'
  },
  {
    id: 'venganza-para-victimas',
    title: 'Venganza para víctimas',
    originalTitle: 'As Good as Dead',
    author: 'Holly Jackson',
    publisher: 'Crossbooks / Destino',
    series: 'Tercer libro de la trilogía Pip Fitz-Amobi',
    isSequel: true,
    pages: 496,
    isbn: '978-84-08-25123-1',
    stage: 'Secundaria',
    ageRange: '14',
    ageLabel: '14+ ESO (3º y 4º ESO / Bachillerato)',
    genre: 'misterio',
    genreLabel: 'Misterio e investigación',
    tags: ['Trilogía Pip Fitz', 'Suspense psicológico', 'Dilema ético'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs5yi9n7A3lT5tEmnji0NfR2J94yn5pcEkO3tWi_JzjeVbFtzB7pLgSBf8lNg8hmU9-q_hZy4Wok9HOc-z9VXstnneZ7MCh7eN8Hwkpw_dV8ZUtSFCdv1eXhjIzSFjJdb7uuBpYQ8Wnh-7PnHxpfQCo9i_uLdnY_vUn87l9BvbnzVMSn5L5XDFtcETgdOvenKs_fvqhFQSHWXR0m4HtxOqAy5zYcJ9i45o7q3ntKsyk_aCGQYIK7yaAw',
    libraryCopies: 2,
    pedagogicalGuide: 'Cierre de la aclamada trilogía juvenil que plantea intensos debates sobre la justicia por mano propia y las secuelas emocionales de la investigación.',
    department: 'Departamento de Lengua Castellana'
  },
  {
    id: 'nazari',
    title: 'Nazarí',
    originalTitle: 'Nazarí',
    author: 'Mario Villén Lucena',
    publisher: 'Almuzara',
    series: 'Novela histórica de Granada',
    isSequel: false,
    pages: 384,
    isbn: '978-84-17558-82-6',
    stage: 'Secundaria',
    ageRange: '14',
    ageLabel: '14+ ESO (3º y 4º ESO)',
    genre: 'historia',
    genreLabel: 'Historia y drama',
    tags: ['Patrimonio local', 'Reino de Granada', 'Novela histórica'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXzQQBETZHwmnQrA41oS15hbUsttgGZ7P_YdQj0FdpDwTfUb6WLUyM0SWPl3NeMIYMsk7W5tIfSL9W6AaDmj3euo5vep3xEeUrfiOQOdNqYpjpM9kLtWjsy40XJAO-pdJ4SrVcMjH3g2NfFsJRYy6aWuVtHE066ZJidLx2gonCfdnUZHdzpce2JAlkDlg221lXVUBSjGYsVwUH-MbG8CV4cpeqlRd9674OTR483ODiZkdPKxUH3Y-Gw',
    libraryCopies: 4,
    pedagogicalGuide: 'Magnífico enlace con el currículo de Geografía e Historia para conectar al alumnado de Albolote con el rico pasado medieval de la vega y el Reino de Granada.',
    department: 'Departamento de Geografía e Historia'
  },
  {
    id: 'heartstopper',
    title: 'Heartstopper: Dos chicos juntos',
    originalTitle: 'Heartstopper: Volume 1',
    author: 'Alice Oseman',
    publisher: 'Crossbooks / Planeta',
    series: 'Volumen 1',
    isSequel: false,
    pages: 288,
    isbn: '978-84-08-20735-1',
    stage: 'Secundaria',
    ageRange: '12',
    ageLabel: '12+ ESO (1º-4º ESO)',
    genre: 'social',
    genreLabel: 'Drama social y solidaridad',
    tags: ['Cómic juvenil', 'Afectividad y diversidad', 'Amistad sincera'],
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGjCpWSsEphUqH3lIeWu2fVVmo2EY6BYYhlpLrsA_RtJkaQKSC9DvTogm9qMKfBW7CW1aikheSbFZGVecrLlMQaI-VHBArKNxKGmnjpBiT8BU8HghQykzwboQTKrPo_Rg86XriggJV0AlqVWaf9AJlegzb2qPturZ1nF6CRPK1fsYWRIU2Dup5GXu6MK3A5laie7ujeHTPdSTWUgel1ZooVQU43k3M618ucK42gZc2tlZysffRgn2tCg',
    libraryCopies: 6,
    pedagogicalGuide: 'Novela gráfica que aborda de manera sana, luminosa y comprensiva la diversidad afectiva, la lealtad entre amigos y la salud emocional.',
    department: 'Equipo de Orientación Escolar'
  }
];

// Reseñas iniciales
const DEFAULT_REVIEWS = [
  {
    id: 'rev-asesinato-1',
    bookId: 'asesinato-para-principiantes',
    bookTitle: 'Asesinato para principiantes',
    author: 'Holly Jackson',
    studentName: 'A.',
    studentGrade: '4º ESO',
    studentRole: 'Alumno',
    studentInitial: 'A',
    rating: 5,
    ratingDecimal: '4.9',
    ratingLabel: 'Excelente',
    dateText: 'Publicada hace una semana',
    synopsis: 'Andie Bell fue asesinada por su novio, Sal Singh. O eso dice todo el mundo. Cinco años después, Pippa Fitz-Amobi elige el caso como proyecto final de curso escolar para demostrar que el verdadero asesino sigue en libertad.',
    reviewText: 'Una novela policíaca juvenil completamente adictiva. La forma en que la protagonista recopila transcripciones, entrevistas y notas crea una experiencia muy dinámica. Te mantiene haciendo conjeturas hasta la última página. Recomendadísima para toda la etapa de Secundaria y Bachillerato.',
    highlightVerdict: 'Lectura ágil e inteligente',
    tags: ['Misterio juvenil', 'Investigación deductiva', 'Juicio crítico escolar'],
    likesCount: 14,
    commentsCount: 2,
    stage: 'secundaria',
    ageRange: '14',
    genre: 'misterio',
    comments: [
      {
        id: 'c-1',
        studentName: 'L.',
        studentGrade: '3º ESO',
        studentInitial: 'L',
        dateText: 'Ayer a las 17:40',
        content: '¡Me encantó este libro! Los giros del final son increíbles y la lectura se pasa volando.'
      },
      {
        id: 'c-2',
        studentName: 'M.',
        studentGrade: '3º ESO',
        studentInitial: 'M',
        dateText: 'Hace tres días',
        content: 'Totalmente de acuerdo con el análisis. El personaje de Pippa está muy bien construido y el caso engancha desde la primera página.'
      }
    ]
  },
  {
    id: 'rev-asesinato-2',
    bookId: 'asesinato-para-principiantes',
    bookTitle: 'Asesinato para principiantes',
    author: 'Holly Jackson',
    studentName: 'L.',
    studentGrade: '3º ESO',
    studentRole: 'Alumna',
    studentInitial: 'L',
    rating: 5,
    ratingDecimal: '5.0',
    ratingLabel: 'Excelente',
    dateText: 'Hace 2 días',
    synopsis: 'Pippa Fitz-Amobi decide desenterrar el caso de asesinato de su pequeño pueblo para su proyecto de investigación escolar.',
    reviewText: 'Una trama adictiva y llena de giros inesperados. Pip investiga un caso cerrado del pueblo con una valentía tremenda. Te mantiene con intriga en cada página. No puedes parar de sospechar de cada pista.',
    highlightVerdict: 'Insuperable ritmo narrativo',
    tags: ['Misterio e investigación', 'Juvenil'],
    likesCount: 19,
    commentsCount: 1,
    stage: 'secundaria',
    ageRange: '14',
    genre: 'misterio',
    comments: [
      {
        id: 'c-3',
        studentName: 'P.',
        studentGrade: '2º ESO',
        studentInitial: 'P',
        dateText: 'Hace 1 día',
        content: 'Me lo apunto para la biblioteca escolar, tiene muy buena pinta.'
      }
    ]
  },
  {
    id: 'rev-pijama-rayas',
    bookId: 'el-nino-con-el-pijama-de-rayas',
    bookTitle: 'El niño con el pijama de rayas',
    author: 'John Boyne',
    studentName: 'P.',
    studentGrade: '2º ESO',
    studentRole: 'Alumno',
    studentInitial: 'P',
    rating: 5,
    ratingDecimal: '5.0',
    ratingLabel: 'Sobresaliente',
    dateText: 'Hace 4 días',
    synopsis: 'Bruno, un niño de nueve años, se traslada con su familia a una casa aislada junto a una gran valla alambrada donde conoce a Shmuel.',
    reviewText: 'Una novela histórica conmovedora sobre la inocencia infantil. La amistad entre Bruno y Shmuel te hace reflexionar sobre la empatía y la historia. Aunque el final es muy duro, enseña lecciones que nunca deberíamos olvidar.',
    highlightVerdict: 'Conmovedora y formativa',
    tags: ['Historia y valores', 'Lectura reflexiva'],
    likesCount: 16,
    commentsCount: 2,
    stage: 'secundaria',
    ageRange: '12',
    genre: 'historia',
    comments: [
      {
        id: 'c-4',
        studentName: 'A.',
        studentGrade: '4º ESO',
        studentInitial: 'A',
        dateText: 'Hace 2 días',
        content: 'Lo leímos en 2º ESO y todavía lo recuerdo. Deja una huella enorme.'
      }
    ]
  },
  {
    id: 'rev-powerless',
    bookId: 'powerless',
    bookTitle: 'Powerless',
    author: 'Lauren Roberts',
    studentName: 'M.',
    studentGrade: '3º ESO',
    studentRole: 'Alumno',
    studentInitial: 'M',
    rating: 5,
    ratingDecimal: '5.0',
    ratingLabel: 'Muy adictivo',
    dateText: 'Hace 5 días',
    synopsis: 'En el reino de Ilya, aquellos que no poseen poderes son considerados una amenaza y expulsados o perseguidos.',
    reviewText: 'Para fans de aventuras juveniles con romance, pruebas de valor y magia. Paedyn sobrevive en un reino donde los ordinarios son perseguidos. Es muy entretenida y el ritmo de los capítulos te atrapa.',
    highlightVerdict: 'Ritmo trepidante',
    tags: ['Fantasía juvenil', 'Aventuras'],
    likesCount: 11,
    commentsCount: 1,
    stage: 'secundaria',
    ageRange: '14',
    genre: 'fantasia',
    comments: [
      {
        id: 'c-5',
        studentName: 'L.',
        studentGrade: '3º ESO',
        studentInitial: 'L',
        dateText: 'Hace 3 días',
        content: '¡Súper recomendado! La segunda parte también merece la pena.'
      }
    ]
  },
  {
    id: 'rev-invisible',
    bookId: 'invisible',
    bookTitle: 'Invisible',
    author: 'Eloy Moreno',
    studentName: 'L.',
    studentGrade: '2º ESO',
    studentRole: 'Alumna',
    studentInitial: 'L',
    rating: 5,
    ratingDecimal: '5.0',
    ratingLabel: 'Imprescindible',
    dateText: 'Hace 1 mes',
    synopsis: '¿Quién no ha deseado alguna vez ser invisible? ¿Quién no ha deseado alguna vez dejar de serlo? Un chico con un poder que nadie más puede ver.',
    reviewText: 'Un libro imprescindible para Secundaria. Habla de la importancia de no mirar hacia otro lado y apoyar a quien sufre acoso. Muestra cómo el silencio de los demás pesa tanto como las agresiones y cómo la amistad sincera puede rescatar a alguien.',
    highlightVerdict: 'Lectura que cambia la mirada',
    tags: ['Convivencia escolar', 'Prevención del acoso'],
    likesCount: 27,
    commentsCount: 3,
    stage: 'secundaria',
    ageRange: '12',
    genre: 'bullying',
    comments: [
      {
        id: 'c-6',
        studentName: 'M.',
        studentGrade: '3º ESO',
        studentInitial: 'M',
        dateText: 'Hace 2 semanas',
        content: 'Todos en el colegio deberíamos leerlo. Es muy emocionante.'
      }
    ]
  },
  {
    id: 'rev-cazador-estrellas',
    bookId: 'el-cazador-de-estrellas',
    bookTitle: 'El cazador de estrellas',
    author: 'Ricardo Gómez',
    studentName: 'A.',
    studentGrade: '4º ESO',
    studentRole: 'Alumno',
    studentInitial: 'A',
    rating: 4,
    ratingDecimal: '4.5',
    ratingLabel: 'Muy emotiva',
    dateText: 'Hace 1 semana',
    synopsis: 'Bachir no puede caminar y vive en un campamento de refugiados en el desierto. Pasa sus días escuchando el viento y observando la inmensidad del cielo nocturno.',
    reviewText: 'Una historia poética en un campamento de refugiados saharauis. Bachir no puede caminar pero su abuelo le enseña a cazar estrellas y escuchar el viento. Muestra una resiliencia conmovedora ante las dificultades del exilio.',
    highlightVerdict: 'Sensibilidad y superación',
    tags: ['Drama social', 'Solidaridad'],
    likesCount: 9,
    commentsCount: 0,
    stage: 'secundaria',
    ageRange: '12',
    genre: 'social',
    comments: []
  },
  {
    id: 'rev-venganza',
    bookId: 'venganza-para-victimas',
    bookTitle: 'Venganza para víctimas',
    author: 'Holly Jackson',
    studentName: 'L.',
    studentGrade: '3º ESO',
    studentRole: 'Alumna',
    studentInitial: 'L',
    rating: 5,
    ratingDecimal: '5.0',
    ratingLabel: 'Final magistral',
    dateText: 'Hace 2 semanas',
    synopsis: 'Pip Fitz-Amobi está a punto de ir a la universidad cuando un acosador anónimo empieza a enviarle mensajes amenazantes.',
    reviewText: 'El cierre de la saga juvenil de suspense. Plantea dilemas morales muy interesantes sobre la verdad y las consecuencias de nuestras decisiones. Un final de trilogía con mucha fuerza que genera debate en clase de Lengua.',
    highlightVerdict: 'Cierre inolvidable',
    tags: ['Misterio', 'Trilogía Pip Fitz'],
    likesCount: 15,
    commentsCount: 1,
    stage: 'secundaria',
    ageRange: '14',
    genre: 'misterio',
    comments: [
      {
        id: 'c-7',
        studentName: 'A.',
        studentGrade: '4º ESO',
        studentInitial: 'A',
        dateText: 'Hace 5 días',
        content: '¡No me esperaba ese giro final! Holly Jackson se lució.'
      }
    ]
  },
  {
    id: 'rev-nazari',
    bookId: 'nazari',
    bookTitle: 'Nazarí',
    author: 'Mario Villén Lucena',
    studentName: 'A.',
    studentGrade: '4º ESO',
    studentRole: 'Alumno',
    studentInitial: 'A',
    rating: 4,
    ratingDecimal: '4.0',
    ratingLabel: 'Gran recreación histórica',
    dateText: 'Hace 3 semanas',
    synopsis: 'En la Granada del siglo XIV, bajo el mandato de Yusuf I, las intrigas palaciegas y la construcción de la Alhambra marcan el destino de sus habitantes.',
    reviewText: 'Una recreación de Granada y su historia medieval adaptada para el curso de Geografía e Historia. Muy interesante para conocer nuestras raíces andaluzas y el patrimonio de nuestra tierra.',
    highlightVerdict: 'Historia viva de nuestra tierra',
    tags: ['Histórico', 'Patrimonio local'],
    likesCount: 8,
    commentsCount: 1,
    stage: 'secundaria',
    ageRange: '14',
    genre: 'historia',
    comments: [
      {
        id: 'c-8',
        studentName: 'P.',
        studentGrade: '2º ESO',
        studentInitial: 'P',
        dateText: 'Hace 1 semana',
        content: 'Visitar la Alhambra después de leer este libro fue genial.'
      }
    ]
  }
];

// Clase Store para gestión reactiva y persistente
class InteractivamenteStore {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEY_REVIEWS)) {
      localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
    }
    if (!localStorage.getItem(STORAGE_KEY_WISHLIST)) {
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(['invisible', 'heartstopper']));
    }
    if (!localStorage.getItem(STORAGE_KEY_LIKES)) {
      localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(['rev-asesinato-1', 'rev-invisible']));
    }
  }

  // Obtener todos los libros
  getBooks() {
    return DEFAULT_BOOKS;
  }

  getBookById(id) {
    return DEFAULT_BOOKS.find(b => b.id === id) || null;
  }

  getBookByTitle(title) {
    if (!title) return null;
    const clean = title.trim().toLowerCase();
    return DEFAULT_BOOKS.find(b => b.title.toLowerCase() === clean || clean.includes(b.title.toLowerCase())) || null;
  }

  // Obtener todas las reseñas
  getReviews() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_REVIEWS);
      return data ? JSON.parse(data) : DEFAULT_REVIEWS;
    } catch (e) {
      console.error('Error leyendo reseñas:', e);
      return DEFAULT_REVIEWS;
    }
  }

  getReviewById(id) {
    const reviews = this.getReviews();
    return reviews.find(r => r.id === id) || null;
  }

  getReviewsByBook(title) {
    const reviews = this.getReviews();
    const clean = title.trim().toLowerCase();
    return reviews.filter(r => r.bookTitle.toLowerCase() === clean || r.bookTitle.toLowerCase().includes(clean));
  }

  // Agregar nueva reseña
  addReview(newReview) {
    const reviews = this.getReviews();
    const id = 'rev-' + Date.now();
    const createdReview = {
      id,
      dateText: 'Hoy, hace un momento',
      likesCount: 0,
      commentsCount: 0,
      comments: [],
      studentName: 'L.',
      studentGrade: '3º ESO',
      studentRole: 'Alumna',
      studentInitial: 'L',
      ...newReview
    };

    reviews.unshift(createdReview);
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(reviews));
    return createdReview;
  }

  // Agregar comentario a una reseña
  addComment(reviewId, commentText, studentName = 'L.', studentGrade = '3º ESO') {
    const reviews = this.getReviews();
    const review = reviews.find(r => r.id === reviewId);
    if (!review) return false;

    if (!review.comments) review.comments = [];
    const newComment = {
      id: 'c-' + Date.now(),
      studentName,
      studentGrade,
      studentInitial: studentName.charAt(0).toUpperCase(),
      dateText: 'Ahora mismo',
      content: commentText
    };

    review.comments.push(newComment);
    review.commentsCount = review.comments.length;
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(reviews));
    return newComment;
  }

  // Me gusta (Like)
  isLiked(reviewId) {
    try {
      const likes = JSON.parse(localStorage.getItem(STORAGE_KEY_LIKES) || '[]');
      return likes.includes(reviewId);
    } catch (e) {
      return false;
    }
  }

  toggleLike(reviewId) {
    let likes = [];
    try {
      likes = JSON.parse(localStorage.getItem(STORAGE_KEY_LIKES) || '[]');
    } catch (e) {}

    const reviews = this.getReviews();
    const review = reviews.find(r => r.id === reviewId);
    let isNowLiked = false;

    if (likes.includes(reviewId)) {
      likes = likes.filter(id => id !== reviewId);
      if (review && review.likesCount > 0) review.likesCount--;
      isNowLiked = false;
    } else {
      likes.push(reviewId);
      if (review) review.likesCount = (review.likesCount || 0) + 1;
      isNowLiked = true;
    }

    localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(likes));
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(reviews));
    return { isLiked: isNowLiked, count: review ? review.likesCount : 0 };
  }

  // Lista de deseos (Wishlist)
  getWishlist() {
    try {
      const list = JSON.parse(localStorage.getItem(STORAGE_KEY_WISHLIST) || '[]');
      return list.map(id => this.getBookById(id)).filter(Boolean);
    } catch (e) {
      return [];
    }
  }

  isWishlisted(bookId) {
    try {
      const list = JSON.parse(localStorage.getItem(STORAGE_KEY_WISHLIST) || '[]');
      return list.includes(bookId);
    } catch (e) {
      return false;
    }
  }

  toggleWishlist(bookId) {
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(STORAGE_KEY_WISHLIST) || '[]');
    } catch (e) {}

    let isAdded = false;
    if (list.includes(bookId)) {
      list = list.filter(id => id !== bookId);
      isAdded = false;
    } else {
      list.push(bookId);
      isAdded = true;
    }

    localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(list));
    return isAdded;
  }

  // Borradores
  saveDraft(draftData) {
    localStorage.setItem(STORAGE_KEY_DRAFT, JSON.stringify({
      ...draftData,
      updatedAt: new Date().toISOString()
    }));
  }

  getDraft() {
    try {
      const d = localStorage.getItem(STORAGE_KEY_DRAFT);
      return d ? JSON.parse(d) : null;
    } catch (e) {
      return null;
    }
  }

  clearDraft() {
    localStorage.removeItem(STORAGE_KEY_DRAFT);
  }

  // Estadísticas globales del colegio
  getGlobalStats() {
    const reviews = this.getReviews();
    const uniqueBooks = new Set(reviews.map(r => r.bookTitle.toLowerCase())).size;
    const uniqueStudents = new Set(reviews.map(r => r.studentName + r.studentGrade)).size;
    return {
      totalReviews: reviews.length,
      totalBooks: uniqueBooks || 17,
      totalReaders: Math.max(uniqueStudents, 5)
    };
  }

  // Restablecer valores de prueba
  resetDefaults() {
    localStorage.removeItem(STORAGE_KEY_REVIEWS);
    localStorage.removeItem(STORAGE_KEY_WISHLIST);
    localStorage.removeItem(STORAGE_KEY_LIKES);
    this.init();
  }
}

// Instancia global
window.appStore = new InteractivamenteStore();
