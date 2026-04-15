# Executive Architect AI

**Precision AI for Modern Careers.**
Architecting the future of work by providing high-fidelity insights into your professional narrative.

## 🚀 Overview

Executive Architect is a sophisticated AI platform designed for mid-to-senior level professionals and executives. It leverages advanced semantic analysis to bridge the gap between your current resume and your target career trajectory.

## ✨ Key Features

- **Precision Dashboard**: Real-time stats on resume performance and market demand pulses.
- **Job Match Analysis**: A deep-dive comparison tool featuring a Semantic Alignment Radar to visualize skill overlaps and gaps.
- **AI-Powered Recommendations**: Actionable, quantified advice to optimize your resume for specific roles.
- **Analysis History**: A secure archive of all your career trajectory evaluations.
- **Executive UI**: A polished, high-contrast interface built with modern design principles (Manrope & Inter typography).

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS 4.0 (Utility-first, CSS variables)
- **Animations**: Motion (React)
- **Data Visualization**: Recharts (Radar Charts)
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API (@google/genai)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd executive-architect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Development

Run the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Production

Build the application for production:
```bash
npm run build
```

## 📂 Project Structure

- `src/components/layout`: Core layout components like Sidebar and TopBar.
- `src/components/screens`: Main application views (Dashboard, JobMatch, Settings, Login).
- `src/lib`: Utility functions and helper scripts.
- `src/types.ts`: Global TypeScript definitions.
- `src/index.css`: Global styles and Tailwind configuration.

## 📄 License

This project is licensed under the Apache-2.0 License.
