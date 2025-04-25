# Хади Строй - Строителна компания

Модерен уебсайт за строителна компания, изграден с Next.js и TypeScript.

## Функционалности

- 🏠 Модерен и отзивчив дизайн
- 🌐 Поддръжка на български език
- 📱 Оптимизиран за мобилни устройства
- ⚡️ Бързо зареждане
- 📧 Контактна форма
- 🗺️ Google Maps интеграция
- 📸 Галерия с проекти

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- ESLint

## Предварителни изисквания

- Node.js 18.0.0 или по-нова версия
- npm или yarn

## Инсталация

1. Клонирайте репозиторито:
```bash
git clone https://github.com/hsynrsd/hadi-stroi.git
cd hadi-stroi
```

2. Инсталирайте зависимостите:
```bash
npm install
# или
yarn install
```

3. Стартирайте development сървъра:
```bash
npm run dev
# или
yarn dev
```

4. Отворете [http://localhost:3000](http://localhost:3000) във вашия браузър.

## Деployment

### GitHub Pages

1. Създайте нов репозиторий в GitHub.

2. Конфигурирайте `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/hadi-stroi', // Ако използвате GitHub Pages с custom domain, премахнете този ред
}

module.exports = nextConfig
```

3. Създайте GitHub Actions workflow файл (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          folder: out
          branch: gh-pages
```

4. Push към GitHub:
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/hadi-stroi.git
git push -u origin main
```

5. В GitHub репозиторито, отидете на Settings > Pages и изберете `gh-pages` branch като source.

## Конфигурация

- За да промените контактната информация, редактирайте `src/app/contact/page.tsx`
- За да добавите нови проекти, редактирайте `src/app/projects/page.tsx`
- За да промените услугите, редактирайте `src/app/services/page.tsx`

## Лиценз

MIT
