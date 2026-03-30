# Ashraf Beshtawi — Portfolio

Personal portfolio website showcasing my projects, skills, and certifications.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives
- **Language:** TypeScript
- **Icons:** Lucide React

## Features

- Dark / Light mode toggle with system persistence
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Glassmorphism UI with animated gradient backgrounds
- Project showcase with section images
- Skills & certifications display

## Getting Started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:9002](http://localhost:9002).

## Project Structure

```
src/
├── app/              # Next.js app router (page, layout, globals)
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Skills, About, Projects, Contact
│   ├── ui/           # Reusable UI components (Radix-based)
│   └── icons/        # Custom SVG icon components
└── lib/              # Utility functions
```

## Build

```bash
npm run build
npm start
```
