# RanBOT

A modern, full-stack web app for instant web data extraction, insights, screenshots, PDF and logo generation, and more. Built for speed, reliability, and developer experience.

## Features
- Webpage content & metadata extraction
- Screenshot capture
- PDF generation from any URL
- Logo fetching & generation
- Company insights

## Tech Stack
- **Frontend:** React, TypeScript, CSS Modules
- **Backend:** Node.js, Express, TypeScript
- **Other:** React Router, Toastify, API integrations

## Prerequisites
- Node.js (v18+ recommended)
- npm (v9+) or yarn

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ranbot-ai/ranbot-api.git
cd ranbot-api
```

### 2. Install dependencies
```bash
# For both frontend and backend
cd ranbot-backend && npm install
cd ../ranbot-frontend && npm install
```

### 3. Set up environment variables
- Copy `.env.example` to `.env` in both `ranbot-backend` and `ranbot-frontend`.
- Fill in required values (API keys, endpoints, etc).

### 4. Run the app in development
**Backend:**
```bash
cd ranbot-backend
npm run dev
```
**Frontend:**
```bash
cd ../ranbot-frontend
npm start
```
- Frontend: [http://localhost:3001](http://localhost:3001)
- Backend: [http://localhost:3000](http://localhost:3000) (default)

## Scripts & Commands
- `npm run dev` – Start backend in dev mode (with nodemon)
- `npm start` – Start frontend in dev mode
- `npm run build` – Build frontend for production
- `npm run lint` – Lint code
- `npm test` – Run tests (if available)

## Project Structure
```
ranbot-api/
  ranbot-backend/   # Express API server
  ranbot-frontend/  # React web app
```

## API Usage
- See backend `/api` routes for available endpoints.
- Example: `POST /api/pdf` to generate a PDF from a URL.
- See frontend for usage examples and UI.

## Contributing
1. Fork the repo & create a feature branch
2. Make changes, add tests if needed
3. Run lint & tests
4. Open a pull request

## Support
- For issues or feature requests, open a GitHub issue
- For help, contact [support@ranbot.online](mailto:support@ranbot.online)

---
© 2024 RanBOT. All rights reserved.