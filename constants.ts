import { Project, Language } from './types';

export const PROJECTS: Project[] = [
  {
  id: 1,
  name: {
    EN: 'Students VS Misadventures',
    RU: 'Студенты против Злоключений'
  },
  shortDescription: {
    EN: 'A Tower Defense game about surviving university exams.',
    RU: 'Tower Defense игра о выживании в сессии.'
  },
  fullDescription: {
    EN: 'This is a Tower Defense game inspired by the classic Plants vs. Zombies, but with a unique university theme. The player must defend their student record book from waves of "misfortunes"—enemies that personify the challenges of student life.\n\nThe core gameplay involves strategically placing different types of student defenders, each with unique abilities (shooters, AoE, support units), to automatically fend off advancing enemies.',
    RU: 'Эта игра — Tower Defense, созданная по мотивам классической Plants vs. Zombies, но с уникальным студенческим сеттингом. Игроку предстоит защищать свою зачетку от волн «злоключений» — врагов, олицетворяющих трудности студенческой жизни.\n\nОсновной геймплей заключается в стратегической расстановке различных студентов-защитников, каждый из которых обладает уникальными способностями (стрелки, АОЕ, юниты поддержки), чтобы автоматически отбиваться от наступающих врагов.'
  },
  keyFeatures: {
    EN: [
      'Gameplay is divided into two phases: preparation and battle.',
      'Before each battle, use "scholarship" to permanently upgrade your units\' stats.',
      'Pre-place neural networks as a last line of defense.',
      'During the battle, spend "coffee" to place student defenders on the field.',
      'Units attack enemies automatically, while you manage resources and placement.',
      'Beware of calamities! They appear suddenly during battle, applying temporary effects to enemies and heroes.',
      'Defeat all waves of "misfortunes" to successfully pass the level.'
    ],
    RU: [
      'Игровой процесс разделен на две фазы: подготовку и бой.',
      'Перед боем используйте «стипендию» для перманентного улучшения характеристик юнитов.',
      'Заранее расставьте нейросети для последнего рубежа защиты',
      'Во время боя расходуйте «кофе», чтобы выставлять студентов-защитников на поле.',
      'Юниты атакуют врагов автоматически, а вы управляете ресурсами и расстановкой.',
      'Берегитесь напастей! Они приходят внезано во время боя и накладывают временные эффекты на врагов и героев',
      'Отразите все волны «злоключений», чтобы успешно пройти уровень.'
    ]
  },
  techStack: {
    EN: [
      'Python 3.8+',
      'Pygame'
    ],
    RU: [
      'Python',
      'Pygame'
    ]
  },
  team: {
    EN: [
      'Solo Developer (Game Design, Code, UI)'
    ],
    RU: [
      'Индивидуальная разработка (гейм-дизайн, код, UI)'
    ]
  },
  additionalInfo: {
    EN: [
      'You can download the game using the button on the right. The file is checked and completely safe.'
    ],
    RU: [
      'Игру можно скачать по кнопке справа. Файл проверен и полностью безопасен.'
    ]
  },
  githubUrl: 'kattywife/Students-VS-Misadventures',
  downloadUrl: 'https://github.com/kattywife/Students-VS-Misadventures/releases/download/v1.0/StudentsVSMisadventures.exe',
  logoUrl: `https://i.imgur.com/pe4DL4d.png`,
  imageUrls: [
    `https://i.imgur.com/UnQALQZ.jpeg`,
    `https://i.imgur.com/CVeTuof.jpeg`,
    `https://i.imgur.com/nR4rxdQ.jpeg`,
    `https://i.imgur.com/rN6fhMM.jpeg`,
    `https://i.imgur.com/35pxNXJ.jpeg`,
    `https://i.imgur.com/9Lm1ceW.jpeg`,
  ],
  },
  {
  "id": 2,
  "name": {
    "EN": "SkinSight AI",
    "RU": "SkinSight AI"
  },
  "shortDescription": {
    "EN": "An AI assistant for doctors for the early diagnosis of skin cancer from images of skin lesions.",
    "RU": "AI-помощник для врачей для ранней диагностики рака кожи по фотографиям новообразований."
  },
  "fullDescription": {
    "EN": "SkinSight is a desktop application for medical professionals that uses artificial intelligence to speed up and improve the accuracy of diagnosing melanoma and other skin neoplasms. Following the analysis, the app generates a malignancy assessment and a list of possible diagnoses with their respective probabilities. It serves as a powerful decision-support tool for dermatologists and oncologists within a full client-server ecosystem with a REST API and a web-based demo.",
    "RU": "SkinSight — это десктопное приложение для врачей, использующее ИИ для ускорения и повышения точности диагностики меланомы и других новообразований кожи. По результатам анализа приложение предоставляет оценку злокачественности и список возможных диагнозов с их процентной вероятностью. Оно служит мощным инструментом поддержки принятия решений для дерматологов и онкологов и представляет собой полноценную клиент-серверную экосистему с REST API и веб-демоверсией."
  },
  "keyFeatures": {
    "EN": [
      "Fast AI analysis (<15 sec)",
      "Provides malignancy assessment and probabilistic diagnoses by class",
      "High accuracy (~95%, AUC 0.94 for Melanoma)",
      "Patient and analysis history management",
      "Tracking of neoplasm dynamics over time",
      "Model retraining mechanism based on physician verification",
      "Secure desktop client with offline capabilities",
      "Intuitive and modern QML interface",
      "The model was trained on the public ISIC 2019 dataset of over 24,000 images."
    ],
    "RU": [
      "Быстрый AI-анализ (<15 сек)",
      "Оценка злокачественности и вероятностные диагнозы по классам",
      "Высокая точность (~95%, AUC 0.94 для меланомы)",
      "Управление карточками пациентов и историей анализов",
      "Отслеживание динамики новообразований во времени",
      "Механизм дообучения модели на основе верификации врача",
      "Безопасный десктоп-клиент с частичным офлайн-доступом",
      "Интуитивный и современный интерфейс на QML",
      "Модель обучена на публичном датасете ISIC 2019 (более 24 000 изображений)."
    ]
  },
  "techStack": {
    "EN": [
      "Desktop App: Python, PySide6, QML",
      "REST API Server: Python, FastAPI/Flask",
      "Web Demo: React",
      "Machine Learning: TensorFlow, Keras (EfficientNetB0)",
      "Database: MySQL",
      "Testing & CI: Pytest, GitHub"
    ],
    "RU": [
      "Десктопное приложение: Python, PySide6, QML",
      "REST API сервер: Python, FastAPI/Flask",
      "Веб-демоверсия: React",
      "Машинное обучение: TensorFlow, Keras (EfficientNetB0)",
      "База данных: MySQL",
      "Тестирование и CI: Pytest, GitHub"
    ]
  },
  "team": {
    "EN": [
      "Team Lead / Frontend Developer: Dana Kirichenko",
      "Backend Developer: Ekaterina Khikhlushka",
      "AI/ML Specialist: Anton Osipov"
    ],
    "RU": [
      "Team Lead / Frontend Developer: Кириченко Дана",
      "Backend Developer: Хихлушка Екатерина",
      "AI/ML Specialist: Осипов Антон"
    ]
  },
  "additionalInfo": {
    "EN": [
      "Disclaimer: This is an educational project and not a licensed medical device. It should not be used for real medical diagnostics.",
      "You can go to the demo site by clicking the button on the right. There you can download the full version of the application if necessary."
    ],
    "RU": [
      "Внимание: Этот проект является учебным и не является лицензированным медицинским устройством. Его не следует использовать для реальной медицинской диагностики.",
      "Вы можете перейти на сайт с демоверсией по кнопке справа. Там вы можете скачать полную версию приложения при необходимости."
    ]
  },
  "githubUrl": "https://github.com/kattywife/MoleAnalizerAI",
  "websiteUrl": "https://skinsight-d6396.web.app/",
  logoUrl: `https://i.imgur.com/QGZTHjO.jpeg`,
  "imageUrls": [
    "https://i.imgur.com/O5yLO6c.jpeg",
    "https://i.imgur.com/DdFLCbi.jpeg",
    "https://i.imgur.com/JdGiAVJ.jpeg",
    'https://i.imgur.com/v5DJB2P.jpeg',
    'https://i.imgur.com/RA8F9Zm.jpeg',
    'https://i.imgur.com/8uEWEa1.jpeg',
    'https://i.imgur.com/gT6H1m9.jpeg',
    'https://i.imgur.com/kTXXCsk.jpeg',
    'https://i.imgur.com/lkkWUGd.jpeg',
    'https://i.imgur.com/NhNwFDO.jpeg',
  ]
  },
];

export const CONTENT = {
  header: {
    about: { EN: 'ABOUT ME', RU: 'ОБО МНЕ' },
    works: { EN: 'MY WORKS', RU: 'МОИ РАБОТЫ' },
    contacts: { EN: 'CONTACTS', RU: 'КОНТАКТЫ' },
  },
  about: {
    name: { EN: 'DANA KIRICHENKO', RU: 'ДАНА КИРИЧЕНКО' },
    description: {
      EN: "I'm a beginner developer and I like to create beautiful and interesting things. I haven't decided what I'll specialize in yet. Check out my work and let's create something amazing together.",
      RU: 'Я начинающий разработчик, и мне нравится создавать красивые и интересные вещи. Я пока что не решила, на чем я специализируюсь. Изучите мои работы, и давайте вместе создадим что-то потрясающее.'
    }
  },
  contacts: {
    telegram: { EN: 'Telegram', RU: 'Telegram' },
    email: { EN: 'E-mail', RU: 'E-mail' },
    github: { EN: 'Github', RU: 'Github' },
    telegramUser: { EN: '@asmodeykaa', RU: '@asmodeykaa'},
    emailAddress: { EN: 'dkzlatoust@gmail.com', RU: 'dkzlatoust@gmail.com' },
    githubUrl: { EN: 'https://github.com/kattywife', RU: 'https://github.com/kattywife' }
  },
  projectDetail: {
    description: { EN: 'Description:', RU: 'Описание:' },
    keyFeatures: { EN: 'Key Features', RU: 'Ключевые функции' },
    techStack: { EN: 'Tech Stack', RU: 'Стек разработки' },
    team: { EN: 'Team', RU: 'Команда' },
    additionalInfo: { EN: 'Additional Info', RU: 'Дополнительно' },
    gallery: { EN: 'gallery here', RU: 'это галерея' },
    back: { EN: 'Back', RU: 'Назад' },
    download: { EN: 'Download', RU: 'Download' },
    visitSite: { EN: 'Visit Site', RU: 'Перейти на сайт' },
    copied: { EN: 'Copied!', RU: 'Скопировано!' },
  },
  footer: {
    name: { EN: 'Kirichenko Dana', RU: 'Kirichenko Dana' },
    portfolio: { EN: 'Personal portfolio', RU: 'Personal portfolio' },
    contacts: { EN: 'Contacts', RU: 'Контакты' }
  }
};