# Next.js Template

This is my Next.js 15+ template with App Router, TypeScript, and Tailwind CSS. This template includes example building blocks for the following:

- Server Actions with form handling
- API Routes with TypeScript
- Static & Dynamic data fetching
- Suspense boundaries
- Error handling patterns

Created by [Jag Reehal](https://github.com/jreehal).

## Features

- 🏗️ **Built with Latest Stack**

  - [Next.js 15+](https://nextjs.org/) with App Router
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
  - [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality

- 🎨 **Modern UI/UX**

  - Beautifully designed components with shadcn/ui
  - Dark mode support with `next-themes`
  - Geist Sans & Mono fonts
  - Responsive design
  - Clean and modern UI components

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jreehal/nextjs-template.git
   cd nextjs-template
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) with your browser.

## Project Structure

```
src/
├── app/                   # App Router pages and layouts
│   ├── api/              # API routes
│   ├── examples/         # Example features
│   └── layout.tsx        # Root layout with providers
├── components/           # Reusable components
└── lib/                  # Utility functions and shared logic
```

## Example Features

### 1. Server Actions

- Location: `/examples/server-action`
- Form handling with loading states
- Optimistic updates
- Error handling

### 2. API Routes

- Location: `/api/hello`
- TypeScript support
- Request/Response handling
- Error management
- HTTP methods (GET, POST)

### 3. Data Fetching

- Location: `/examples/data-fetching`
- Static data with revalidation
- Dynamic data fetching
- Suspense boundaries
- Error handling

## Code Quality

This template includes a robust ESLint configuration:

- Next.js recommended rules
- TypeScript strict mode
- Import sorting
- Prettier integration

## Customization

### Theme

Modify the theme in `src/app/globals.css`:

- Colors
- Typography
- Spacing
- Other design tokens

### Components

Add new components in `src/components/`:

- Follow the existing pattern
- Use TypeScript for type safety

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)
