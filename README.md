# 🧰 Marketer's Toolkit

A modern, AI-powered web platform for discovering, comparing, and getting expert guidance on digital marketing tools. Built with React + Vite.

---

## ✨ Features

- **Tool Directory** — Browse and search a curated library of marketing platforms and tools
- **Platform Pages** — Dedicated detail pages for each tool with features, pricing, and use-cases
- **AI Consultant** — Groq-powered AI assistant that recommends tools based on your goals
- **AI Assistant** — Floating contextual assistant available on every page
- **Tool Visualizer** — Interactive 3D/animated visualization of tool relationships
- **Category Filtering** — Filter tools by category (SEO, Social, Analytics, etc.)
- **Smooth Navigation** — React Router with scroll-to-top and animated page transitions

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + Custom CSS |
| Routing | React Router v6 |
| Animations | Framer Motion, GSAP, React Spring |
| 3D Graphics | Three.js + React Three Fiber |
| Charts | Recharts |
| AI / LLM | Groq API |
| State | Zustand |
| Icons | Lucide React |

---

## 📁 Project Structure

```
DMSUM/
└── marketer-toolkit/
    ├── src/
    │   ├── components/
    │   │   ├── layout/        # Navbar, Footer
    │   │   └── ui/            # ToolCard, ToolDetailModal, ToolIcon,
    │   │                      #   ToolVisualizer, SearchBar, CategoryFilter,
    │   │                      #   AiAssistant
    │   ├── pages/
    │   │   ├── Home.jsx       # Landing page with tool grid
    │   │   ├── Platform.jsx   # Platform detail page
    │   │   ├── Tool.jsx       # Individual tool page
    │   │   └── AiConsultant.jsx # AI-powered consultation flow
    │   ├── data/              # Static tool/platform data
    │   ├── App.jsx            # Router + layout shell
    │   └── index.css          # Global design tokens & styles
    ├── scripts/               # Data update utilities
    ├── vite.config.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Groq API key](https://console.groq.com/)

### Installation

```bash
git clone https://github.com/sidhuthisside/DMSUM.git
cd DMSUM/marketer-toolkit
npm install
```

### Environment Variables

Create a `.env` file inside `marketer-toolkit/`:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

### Run Locally

```bash
npm run dev
```

App will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📄 License

MIT
