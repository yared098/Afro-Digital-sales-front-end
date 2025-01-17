# Getting Started with Create React App
afro-digital-sales/
├── public/
│   └── index.html
├── src/
│   ├── assets/               # Static assets (images, icons, etc.)
│   ├── components/           # Reusable components
│   │   ├── Navbar.js         # Navbar component
│   │   ├── Footer.js         # Footer component
│   │   └── Button.js         # Reusable button component
│   ├── config/               # Configuration for various data sources
│   │   ├── constants.js      # Constants for data source and auth mechanism
│   │   ├── firebaseConfig.js # Firebase configuration
│   │   ├── mongoConfig.js    # MongoDB configuration
│   │   ├── mysqlConfig.js    # MySQL configuration
│   │   └── index.js          # Unified export
│   ├── pages/                # Main pages
│   │   ├── Home/             # Home page
│   │   │   ├── Home.js       # Home page component
│   │   │   └── Home.module.css # Optional module-specific styles
│   │   ├── Profile/          # Profile page
│   │   │   ├── Profile.js    # Profile page component
│   │   │   └── Profile.module.css
│   │   ├── Menu/             # Menu page
│   │   │   ├── Menu.js       # Menu page component
│   │   │   └── Menu.module.css
│   ├── hooks/                # Custom hooks
│   │   ├── useAuth.js        # Hook for authentication
│   │   └── useFetch.js       # Generic data-fetching hook
│   ├── services/             # Core services for data handling
│   │   ├── baseService.js    # Abstract base service
│   │   ├── firebaseService.js
│   │   ├── mongoService.js
│   │   ├── mysqlService.js
│   │   └── serviceManager.js # Dynamic data source manager
│   ├── state/                # State management using React Query
│   │   ├── queryClient.js    # React Query Client setup
│   │   └── queries.js        # Centralized queries
│   ├── styles/               # Global and Tailwind styles
│   │   ├── index.css         # Tailwind CSS import
│   │   └── variables.css     # Custom CSS variables or global overrides
│   ├── App.js                # Main App component
│   ├── index.js              # Entry point for the React app
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Project metadata and dependencie
