# Task.ai Project

## Project Setup and Installation

This project is built using **React + Vite** with **TailwindCSS**.


### 1. Install Dependencies
```sh
npm install
```

### 2. Install TailwindCSS
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure TailwindCSS
Modify `tailwind.config.js` to include:
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind directives in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Development Server
```sh
npm run dev
```

### 5. Build for Production
```sh
npm run build
```

### 6. Download as Zip File
To download the project as a ZIP file from GitHub:
- Go to your GitHub repository.
- Click on `<> Code` (Green button).
- Select `Download ZIP` and extract the contents.

---
This guide covers all necessary steps to set up and run the **task.ai** project successfully. 🚀
