# Gumix Extension - Pixels.xyz UI Overlay Template

A minimal browser extension template for building interactive UI overlays on Pixels.xyz using WXT + React.

**Created by:** [AzanoRivers](https://www.AzanoRivers.com)  
**Project:** [PixiGummies](https://pixigummies.com/)

## Table of Contents

- [Branch Strategy](#branch-strategy)
- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Key Features](#key-features)

## Branch Strategy

### `master` - Clean Template
This branch contains the **minimal starter template** for anyone who wants to clone the project and build their own custom extension for Pixels.xyz. Use this as a foundation for your own projects.

### `gumix` - Active Development
The `gumix` branch contains the **production implementation** that replaces Pixels.xyz's outdated interface with a modern, injected UI.

#### Contributing to `gumix`

All contributions, improvements, and new features should be based on the `gumix` branch. When contributing:

**Code Quality Requirements:**
- ✅ Maintain consistent architecture (no mixing React with vanilla JS in components)
- ✅ Avoid performance bottlenecks and unnecessary re-renders
- ✅ Follow established patterns and project structure
- ✅ Remove any temporary/debugging code before committing

**AI-Assisted Development Guidelines:**

If using AI tools (GitHub Copilot, Cursor, Cline, etc.):

1. **Review every line** of AI-generated code carefully
2. **Test thoroughly** for performance issues
3. **Avoid "garbage code"** - ensure consistency with project patterns
4. **Document AI usage** at the top of each component:

```tsx
/**
 * ComponentName - Brief description of what it does
 * 
 * @author YourName
 * @ai-assisted Yes (Tool: GitHub Copilot / Cursor / etc.)
 * @created 2026-01-XX
 */
```

**Remember:** AI is a tool, not a replacement for careful engineering. You are responsible for the quality and maintainability of the code you contribute.

## Overview

This template provides a foundation for building browser extensions that inject custom UI components into Pixels.xyz gameplay. It follows WXT framework best practices with a scalable architecture for managing shared components, messaging, and logic between the extension context and injected UI.

## Architecture

The project implements a three-layer architecture:

1. **Extension Layer** (`background/`) - Background scripts and extension lifecycle management
2. **Content Script Layer** (`content/`) - UI injection and DOM manipulation on Pixels.xyz
3. **Shared Layer** (`components/`, `utils/`, `hooks/`) - Reusable components and logic

All layers communicate through WXT's messaging system, enabling seamless data flow between extension contexts and the injected interface.

## Project Structure

```
src/
├── assets/           # Static resources (images, SVGs)
├── components/       # Shared React components
│   ├── App/         # Main application wrapper
│   ├── LogoGumix/   # Brand logo component
│   └── Game/        # Game-specific UI components
├── entrypoints/
│   ├── background/  # Extension background scripts
│   │   └── messaging/ # Message routing and handlers
│   ├── content/     # Content scripts injected into Pixels.xyz
│   └── popup/       # Extension popup UI
├── hooks/           # Custom React hooks
├── styles/          # Global styles and CSS constants
└── utils/           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
```

### Manual Extension Setup (Required)

**Browser auto-launch is disabled by default** to allow testing with your personal browser configuration and existing Pixels.xyz sessions.

#### Steps to load extension:

1. **Start development server:**
   ```bash
   pnpm dev
   ```
   The extension will compile to `.output/chrome-mv3/` (or `.wxt/chrome-mv3/` depending on WXT version)

2. **Open your regular Chrome browser** (the one with your Ronin Wallet and Pixels session)

3. **Navigate to:** `chrome://extensions`

4. **Enable "Developer mode"** (toggle in top-right corner)

5. **Click "Load unpacked"**

6. **Select folder:** 
   - Navigate to your project directory
   - Select: `.output/chrome-mv3` folder
   
7. **Extension loaded!** You'll see "Gumix Extension" appear in your extensions list

> **Why manual setup?** This approach lets you test the extension with your active Pixels.xyz session, Ronin Wallet authentication, and all your existing browser configurations without losing access to other installed extensions.

### Configuration

Browser settings are configured in `wxt.config.ts`. The `webExt` integration is disabled to prevent automatic browser launch:

```typescript
webExt: {
  disabled: true  // Manual extension loading required
}
```

## Development Workflow

1. **Start dev server:** `pnpm dev` (compiles automatically on file changes)
2. **Load extension** in your Chrome browser (one-time setup)
3. **Make changes** to code
4. **Reload extension** (🔄 icon in `chrome://extensions`)
5. **Refresh page** (F5 on Pixels.xyz)

> **Note:** Use your regular Chrome profile to maintain access to other extensions like Ronin Wallet for testing authenticated features.

## Key Features

- ✅ **Hot reload** during development
- ✅ **TypeScript** support with path aliases (`@/`)
- ✅ **Tailwind CSS** v4 for styling
- ✅ **React 19** for UI components
- ✅ **WXT framework** for extension scaffolding
- ✅ **Modular architecture** for scalability
- ✅ **Shared component library** across contexts

---

**License:** MIT  
**Maintained by:** PixiGummies Project

