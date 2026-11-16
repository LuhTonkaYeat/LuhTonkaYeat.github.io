# Личная страница Антона Смирнова

Одностраничный сайт-портфолио студента СПбГУ: учёба, увлечения, проекты и контакты.
Тёмная тема с фиолетово-оранжевыми акцентами, переключение цветовых схем и светлого режима,
адаптивная вёрстка и публикация на GitHub Pages.

**Сайт:** https://luhtonkayeat.github.io/

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)

---

## О проекте

Сайт рассказывает обо мне в формате, удобном для быстрого просмотра:

- **Hero** — имя, фото, вуз, направление и краткое описание;
- **Обо мне** — короткая биография и карточка с основными данными;
- **Увлечения** — разработка, open source, пет-проекты, музыка и игры;
- **Проекты** — участие в учебном проекте `spla`, пет-проекты и эта страница;
- **Контакты** — Telegram, почта, GitHub и кнопка копирования ника.

### Особенности

- Тёмная тема по умолчанию, светлая — переключателем в навбаре.
- Три акцентные схемы: фиолетово-оранжевая, фиолетовая и оранжевая.
- Выбранные темы сохраняются в `localStorage` и применяются до первой отрисовки —
  без «вспышки» белого экрана.
- Анимации появления секций, подсветка активного пункта меню, плавный скролл.
- Поддержка `prefers-reduced-motion`, alt-тексты, skip-link и доступные подписи кнопок.
- Адаптивность: проверено на 390, 768 и 1440 px.
- Фото оптимизировано: JPEG 139 КБ + WebP 98 КБ вместо исходных 3,5 МБ.
- Open Graph-метаданные и favicon.

## Технологии

| Слой | Что используется |
|---|---|
| Разметка | HTML5, семантические теги |
| Стили | Bootstrap 5.3 (CDN) + кастомная тема на CSS-переменных |
| Иконки | Bootstrap Icons |
| Шрифты | Unbounded (заголовки), Manrope (текст) — Google Fonts |
| Скрипты | Vanilla JS: темы, `IntersectionObserver`, навигация, clipboard |
| Хостинг | GitHub Pages |

Сборщик не нужен: проект состоит из статических файлов.

## Структура

```
.
├── index.html            # разметка и весь контент страницы
├── assets/
│   ├── css/
│   │   └── style.css     # тема, цветовые схемы, компоненты, адаптив
│   ├── js/
│   │   └── main.js       # переключение тем, анимации, навигация
│   └── img/
│       ├── anton.jpg     # фото, 880×1100
│       ├── anton.webp    # фото в WebP
│       └── favicon.svg   # иконка сайта
├── .nojekyll             # отключение Jekyll на GitHub Pages
└── README.md
```

## Запуск

Достаточно открыть `index.html` в браузере. Для корректной работы с относительными
путями и кэшем удобнее поднять локальный сервер:

```bash
python3 -m http.server 8000
# затем открыть http://localhost:8000
```

## Публикация

Сайт размещён на GitHub Pages из ветки `main`, папка `/ (root)`.
Изменения публикуются автоматически после `git push`:

```bash
git add .
git commit -m "Обновление контента"
git push
```

## Настройка

- **Тексты, проекты, контакты** — в `index.html` (секции `about`, `interests`, `projects`, `contact`).
- **Фото** — заменить `assets/img/anton.jpg` и `anton.webp` (портрет 4:5, ~880×1100).
- **Цвета** — переменные `--accent-1` и `--accent-2` в начале `assets/css/style.css`.
  Акцентные схемы задаются атрибутом `data-accent` у `<html>`.
- **Темы** — `data-bs-theme="dark"` / `"light"`.

## Автор

**Смирнов Антон Игоревич** — СПбГУ, «Программная инженерия», 2 курс.

- Telegram: [@theG82](https://t.me/theG82)
- Почта: [antony01s@mail.ru](mailto:antony01s@mail.ru)
- GitHub: [@LuhTonkaYeat](https://github.com/LuhTonkaYeat)
