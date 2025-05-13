# 3D Portfolio Website

A stunning 3D animated portfolio website built with React, Three.js, and modern web technologies.

## Features

- 🎨 Modern and responsive design
- 🌟 3D animations and interactions
- 📱 Mobile-friendly interface
- ⚡ Fast performance
- 🎯 SEO optimized
- 🔒 Secure backend

## Tech Stack

- Frontend:
  - React
  - Three.js
  - Tailwind CSS
  - Framer Motion
  - GSAP
- Backend:
  - Node.js
  - Express
  - MongoDB

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for database)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install server dependencies:
```bash
npm install
```

3. Install client dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory:
```
MONGODB_URI=your_mongodb_uri
PORT=5000
```

## Development

1. Start the backend server:
```bash
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm start
```

3. For concurrent development:
```bash
npm run dev:full
```

## Building for Production

1. Build the client:
```bash
cd client
npm run build
```

2. Start the production server:
```bash
npm start
```

## Deployment

### Vercel
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repository.
3. Set up the following build settings:
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. For full-stack, deploy the backend separately (e.g., on Render, Railway, or Vercel Serverless Functions).

### Netlify
1. Push your code to GitHub.
2. Go to [netlify.com](https://netlify.com/) and import your repository.
3. Set up the following build settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `build`
4. For full-stack, deploy the backend separately (e.g., on Render, Railway, or Netlify Functions).

## Preview

Add a GIF or screenshots of your UI in the `client/public/` folder and reference them here:

```
![Portfolio Preview](client/public/preview.gif)
```

## Customization

1. Update personal information in the components
2. Replace 3D models in the `public` directory
3. Modify styles in `tailwind.config.js`
4. Add your projects in the Projects component

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 