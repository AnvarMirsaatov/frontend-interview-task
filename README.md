React + TypeScript + Vite
Project Overview

This project is a React + TypeScript application built using Vite. It includes interactive charts to visualize A/B test statistics using Recharts.

Goal:
Build an interactive Line Chart that displays conversion rates (conversionRate = (conversions / visits) \* 100) for multiple variations, with dynamic tooltips and responsive design.

Features Implemented:

Conversion rate line chart for all variations

Interactive tooltips showing daily data

Variation selector to show/hide lines

Responsive layout (screen width 671px – 1300px)

Values displayed as percentages

Axis scales update automatically based on visible data

Export chart to PNG (bonus feature optional)

Line style toggle (Line / Smooth / Area)

Light / Dark theme toggle (optional)

Tech Stack

Framework: React 18 + TypeScript

Bundler: Vite

Charting library: Recharts

Styling: CSS Modules / TailwindCSS

Linting: ESLint (TypeScript + React recommended rules)

Project Structure
src/
├── assets/ # Images, SVGs, etc.
├── components/
│ └── charts/ # LineChartAB, BarChartAB, AreaChartAB components
├── data/
│ └── data.json # Sample A/B test data
├── hooks/
│ └── useChartData.ts # Custom hook for preparing chart data
├── App.tsx
└── main.tsx

Setup Instructions

Clone repository:

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

Install dependencies:

npm install

Run development server:

npm run dev

Build for production:

npm run build

Preview production build:

npm run preview

Publish to GitHub Pages:

npm run build

# Copy contents of `dist/` folder to GitHub Pages branch

Usage

Select which variations to display using the Variation Selector.

Toggle between Day / Week view.

Hover over the chart to see a tooltip with detailed daily conversion data.

Use the Line style selector to switch between Line, Smooth, or Area charts.

Toggle between Light / Dark theme.

Export chart as PNG if needed.

Data Format

Your data.json file should follow this structure:

{
"variations": [
{ "name": "Original" },
{ "id": 10001, "name": "Variation A" },
{ "id": 10002, "name": "Variation B" }
],
"data": [
{
"date": "2025-01-01",
"visits": { "0": 1866, "10002": 1957 },
"conversions": { "0": 158, "10002": 463 }
}
]
}

Note: conversionRate is calculated internally as (conversions / visits) \* 100.

Linting

The project uses ESLint with TypeScript-aware rules:

npm run lint

Example ESLint config:

extends: [
"tseslint.configs.recommendedTypeChecked",
"tseslint.configs.stylisticTypeChecked"
]

React-specific linting is enabled via:

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

Bonus Features (Optional)

Zoom / Reset zoom

Line style selector (Line, Smooth, Area)

Light / Dark theme toggle

Export chart to PNG

License

This project is open-source and available under the MIT License
.
