# News Feed Project Structure

This project has been reorganized for better maintainability and scalability.

## Project Structure

```
news-feed/
├── public/                 # Static public assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/            # Images, icons, fonts, and other static assets
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Header, Footer, etc.)
│   │   │   ├── HeaderInfo.js
│   │   │   └── index.js  # Barrel export
│   │   ├── news/         # News-related components
│   │   │   ├── NationalNewsInfo.js
│   │   │   ├── ListOfNews.js
│   │   │   ├── NewsCategory.js
│   │   │   └── index.js  # Barrel export
│   │   └── index.js      # Main barrel export for all components
│   ├── styles/           # CSS files
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js            # Main App component
│   ├── App.test.js       # App tests
│   ├── index.js          # App entry point
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
└── README.md
```

## Folder Descriptions

### `/src/components`

Contains all reusable React components, organized by feature or function:

- **layout/**: Components that define the page structure (headers, footers, navigation)
- **news/**: News-specific components (news lists, categories, articles)

### `/src/styles`

All CSS files are centralized here for easier styling management.

### `/src/assets`

Place for images, icons, fonts, and other static assets.

## Import Pattern

The project uses barrel exports (index.js files) for cleaner imports:

```javascript
// ✅ Clean import using barrel exports
import { HeaderInfo } from "./components/layout";
import { NationalNewsInfo, ListOfNews, NewsCategory } from "./components/news";

// ❌ Old verbose imports
import HeaderInfo from "./components/layout/HeaderInfo";
import NationalNewsInfo from "./components/news/NationalNewsInfo";
```

## Running the Project

```bash
npm start       # Start development server
npm test        # Run tests
npm run build   # Build for production
```
