import courseOratoryCover from '@/assets/course-oratory-cover.jpg';

export interface CourseGroup {
  dates: string;
  schedule: string;
  color: string;
}

export interface Course {
  name: string;
  badge?: string;
  color: string;
  isCombined?: boolean;
  groups?: CourseGroup[];
  features?: string[];
  topics?: string[];
  spots?: string;
  description?: string;
  promoBadge?: string;
  oldPrice?: string;
  newPrice?: string;
  buttonLink?: string;
  isOnlinePromo?: boolean;
  image?: string;
  locationLabel?: string;
  cardPrice?: string;
  cardOldPrice?: string;
  isStorytellingCard?: boolean;
  formatLabel?: string;
  tagline?: string;
  aboutPoints?: string[];
  uniqueness?: string[];
  results?: string[];
  audience?: string[];
  startDate?: string;
  startDate2?: string;
  duration?: string;
  schedule?: string;
  schedule2?: string;
  isCoaching?: boolean;
  isCorporate?: boolean;
  isTheater?: boolean;
  externalLink?: string;
  type?: string;
  subtitle?: string;
  isDayGroup?: boolean;
  isSpecial?: boolean;
  benefits?: string[];
}

export const courses: Course[] = [
  {
    name: 'Курс «Ораторское искусство с нуля»',
    color: 'from-primary to-secondary',
    isCombined: true,
    groups: [
      {
        dates: '26 августа — 30 сентября',
        schedule: 'дневная группа · пн/ср\n14:00–16:00',
        color: 'purple'
      }
    ],
    features: [
      'Групповые и индивидуальные занятия',
      'Финальное выступление при реальных зрителях',
      'Онлайн курс «Речевая креативность за 7 дней» в подарок'
    ],
    topics: [
      'Самопрезентация. Управление страхом публичных выступлений. Уверенность в себе.',
      'Умение подать себя. Невербальная коммуникация с аудиторией. Позы оратора.',
      'Речевая визитка. Голос как сильная сторона бренда.',
      'Импровизация в речи.',
      'Структура и логика речи.',
      'Секреты оратора. Крючки внимания. Ответы на вопросы. Взаимодействие с трудными слушателями.',
      'Критерии успешности оратора. Алгоритм подготовки к публичному выступлению.',
      'Практика. Выступление перед реальной аудиторией.'
    ],
    spots: 'Идёт набор',
    image: courseOratoryCover,
    locationLabel: 'Оффлайн-курс в Краснодаре',
    cardPrice: '22 500 ₽',
    cardOldPrice: '24 000 ₽'
  },
  {
    name: 'Ораторский курс "Речевая креативность (онлайн)"',
    description: 'Для тех, кто хочет научиться быстро находить слова в любой ситуации. Будет полезно тем, кому сложно спонтанно выступать на публике, у кого страх блокирует словесный поток, кому не хватает смелости выступать без подготовки.',
    features: [
      'Книга-тренинг с дополнительными упражнениями',
      'Видеоуроки по диагностике речевого уровня',
      'Практика словесной импровизации',
      'Обратная связь в чате курса лично от педагога',
      'Доступ — навсегда'
    ],
    promoBadge: 'АКЦИЯ ТРИ ДНЯ',
    oldPrice: '2450 руб.',
    newPrice: '990 руб.',
    buttonLink: 'https://kuzikova.robo.market/pro100reche',
    color: 'from-blue-600 to-blue-800',
    isOnlinePromo: true,
    image: 'https://cdn.poehali.dev/projects/982ce877-171e-45ff-91a1-ae753687e607/bucket/1ae62ab0-0911-43a1-9d91-e300c8d94b90.png'
  },
  {
    name: 'Курс «Импровизация: личный сторителлинг»',
    color: 'from-secondary to-primary',
    isStorytellingCard: true,
    formatLabel: 'Индивидуальный формат',
    tagline: '6 трансформационных занятий на стыке ораторского искусства, психологии и бизнеса.',
    aboutPoints: [
      'Это не тренинг ораторского мастерства в классическом понимании — это глубокая проработка вашей личности через призму сцены.',
      'Мы учимся не просто говорить красиво, а рассказывать истории так, чтобы менять реальность слушателя.',
      'Главный инструмент курса — ваша биография.'
    ],
    uniqueness: [
      'Сплав трех дисциплин: Техника речи (как сказать) + Режиссура (как показать) + Психология (как прожить и отпустить).',
      'Трансформация негативного опыта. Превращаем уязвимость в мощный ресурс для влияния на аудиторию.',
      'Практика импровизации (чтобы выдать гениальный ответ в любой стрессовой ситуации).',
      'Индивидуальная психологическая работа на протяжении всего курса.',
      'Финальное выступление перед реальными зрителями.'
    ],
    results: [
      'Свободное тело и звучащий, объемный голос.',
      'Способность выкрутиться из любой неловкой паузы.',
      'Готовый 20-минутный моноспектакль.',
      'Способность продавать что угодно (себя, идеи, продукты) через проживание эмоций, а не через сухие характеристики.'
    ],
    audience: [
      'Руководителям и предпринимателям, которым нужно вдохновлять команду и партнеров.',
      'Специалистам помогающих профессий (врачи, юристы, психологи), чтобы клиенты чувствовали их уверенность.',
      'Творческим людям, которые ищут свой уникальный «голос» и хотят избавиться от страха сцены.'
    ],
    spots: 'Идёт набор'
  },
  {
    name: 'Индивидуальный ораторский коучинг',
    startDate: 'Онлайн',
    startDate2: 'Офлайн',
    duration: 'Программа корректируется по запросу',
    schedule: 'По согласованию',
    spots: 'Набор открыт',
    color: 'from-orange to-primary',
    isCoaching: true
  },
  {
    name: 'Тренинги для корпоративных заказчиков',
    description: 'Курс ораторского искусства и импровизации для менеджеров, руководителей и всех специалистов, которые занимаются продажами, проводят презентации, выступают перед партнерами и клиентами.',
    duration: 'От 4 до 16+ академических часов',
    schedule: 'Однодневные/двухдневные тренинги с 10:00 до 17:00',
    spots: 'Формат по запросу',
    color: 'from-green-600 to-teal-600',
    isCorporate: true
  },
  {
    name: 'Актерский психологический курс "Перформанс-терапия"',
    description: 'Решаем психологические задачи творческим самовыражением через публичное выступление',
    duration: '4 месяца',
    spots: 'Набор открыт',
    color: 'from-primary to-secondary',
    isTheater: true,
    externalLink: 'https://performance-therapy-landing--preview.poehali.dev/'
  }
];