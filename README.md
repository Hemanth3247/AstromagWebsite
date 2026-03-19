# 🚀 Astromag Website

> An interactive web platform showcasing the wonders of astronomy and space exploration.

## ✨ Features

- 🎨 **Beautiful UI** - Responsive design with modern CSS styling
- ⚡ **Fast Performance** - Built with Vite for rapid development and optimized production builds
- 🔧 **Backend API** - Node.js Express server for data management
- 📱 **Mobile Friendly** - Fully responsive across all devices
- 🎯 **Interactive Components** - React-powered dynamic functionality

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend Build | Vite |
| UI Framework | React |
| Styling | CSS3 |
| Server | Node.js & Express |
| Middleware | body-parser, accepts |

## 📦 Project Organization

```
AstromagWebsite/
├── frontend/              # React + Vite application
│   ├── src/              # Source files
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
├── backend/              # Node.js server
│   ├── routes/          # API endpoints
│   ├── middleware/      # Express middleware
│   ├── package.json     # Backend dependencies
│   └── server.js        # Main server file
├── LICENSE              # Project license
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14.0+
- npm or yarn

### 1️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

API will be available at `http://localhost:3000` (or configured port).

## 📝 Available Commands

### Frontend
```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

### Backend
```bash
npm start        # Run the server
npm run dev      # Run with auto-reload (nodemon)
```

## 🎨 Styling Architecture

The project uses **54% CSS** for comprehensive styling including:
- Layout & Grid systems
- Component styles
- Animations & transitions
- Responsive breakpoints
- Theme management

## 🔌 API Integration

### Available Endpoints
The backend provides various endpoints for:
- Data retrieval
- User interactions
- Content management

### Request/Response Format
- **Request Body Parsing**: JSON and URL-encoded formats supported
- **Content Negotiation**: Automatic media type detection

## 🌍 Environment Configuration

Create `.env` files in each directory:

**frontend/.env**
```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=AstromagWebsite
```

**backend/.env**
```
PORT=3000
NODE_ENV=development
```

## 📚 ESLint & Code Quality

The project includes ESLint configuration for:
- Code consistency
- Best practices enforcement
- Error detection

**To improve type safety**, consider migrating to TypeScript:
- Use [@vitejs/plugin-react-ts](https://github.com/vitejs/vite-plugin-react)
- Implement [typescript-eslint](https://typescript-eslint.io)

## 🚀 Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
# Output: frontend/dist/
```

### Deploy Artifacts
- **Frontend**: Deploy `frontend/dist/` to static hosting
- **Backend**: Deploy backend to Node.js hosting service

## 📜 License

This project is licensed under MIT License - see [LICENSE](./LICENSE) file for details.

Additional content licensing - see [CONTENT-LICENSE](./CONTENT-LICENSE) for specific terms.

## 👨‍💻 Author

Created by **Hemanth3247**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💡 Tips & Best Practices

- ✅ Use Vite's HMR during development
- ✅ Test API endpoints with Postman or similar tools
- ✅ Keep CSS organized and modular
- ✅ Follow ESLint rules for code consistency
- ✅ Build before production deployment

## 📞 Support

For issues or questions, please [open an issue](https://github.com/Hemanth3247/AstromagWebsite/issues) on GitHub.

---

**Last Updated**: March 2026 | **Status**: Active Development 🔄
