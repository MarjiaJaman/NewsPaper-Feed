# NewsFeed - Modern News Portal

A clean, modern news feed application built with React. Features a responsive design with no dependency on external images.

## Features

- 📰 **Featured News Section** - Highlighted top stories with detailed previews
- 📋 **News Grid** - Organized news cards with categories and metadata
- 🎯 **Category Navigation** - Click any category to view category-specific news
- 🔀 **React Router** - Smooth navigation between pages without page reloads
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, professional design with gradient accents
- ⚡ **Fast Performance** - Optimized React components with no image dependencies

## Navigation

- **Home** - View all featured news, latest updates, and trending stories
- **National** - National and domestic news coverage
- **World** - International news and global events
- **Business** - Markets, economy, and business developments
- **Technology** - Tech innovations, gadgets, and digital trends
- **Sports** - Athletics, championships, and sporting events
- **Entertainment** - Movies, music, celebrities, and pop culture

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── HeaderInfo.js       # Navigation header with routing links
│   ├── news/
│   │   ├── NationalNewsInfo.js # Featured news section
│   │   ├── ListOfNews.js       # News grid with cards
│   │   └── NewsCategory.js     # Category-based news
│   └── index.js                # Component exports
├── pages/
│   ├── HomePage.js             # Main landing page
│   ├── CategoryPage.js         # Dynamic category pages
│   └── index.js                # Page exports
├── styles/
│   ├── App.css                 # Main styles
│   └── index.css               # Global styles
└── App.js                      # App with routing setup
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Available Commands

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm start`     | Start development server with hot reload |
| `npm test`      | Run test suite in watch mode             |
| `npm run build` | Build optimized production bundle        |

## Technologies Used

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern gradients and animations
- **Create React App** - Build tooling and configuration

## How It Works

1. **Home Page** displays featured news, latest articles grid, and trending stories
2. **Category Pages** show 6 curated news articles for each category
3. **Navigation** uses React Router for instant page transitions
4. **Responsive Layout** adapts to desktop, tablet, and mobile screens

## Customization

### Adding More Categories

Edit [CategoryPage.js](src/pages/CategoryPage.js) to add new categories in the `categoryNews` object.

### Styling Changes

Main styles are in [App.css](src/styles/App.css). The design uses:

- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS transitions for smooth interactions

### API Integration (Future)

Replace static data in components with API calls:

```javascript
// Example: Fetch news from API
useEffect(() => {
  fetch("https://api.example.com/news")
    .then((res) => res.json())
    .then((data) => setNews(data));
}, []);
```

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using React
