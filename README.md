# Gumix Extension - Pixels.xyz UI Overlay Template

A minimal browser extension template for building interactive UI overlays on Pixels.xyz using WXT + React.

**Created by:** [AzanoRivers](https://www.AzanoRivers.com)  
**Project:** [PixiGummies](https://pixigummies.com/)

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Key Features](#key-features)

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

# Development mode (no browser auto-open)
pnpm dev

# Load extension manually in Chrome:
# 1. Go to chrome://extensions
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select: .wxt/chrome-mv3 folder
```

### Configuration

The extension opens Pixels.xyz automatically with custom browser settings. Edit `wxt.config.ts` to customize:

- Browser window dimensions
- DevTools auto-open
- Target URLs
- Language preferences

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

