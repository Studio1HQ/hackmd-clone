<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/hackmd-clone.webp" alt="HackMD-Style Markdown Editor with Velt: A markdown editor with live sync, presence and text comments" width="100%" />

<br />
<br />

# HackMD-Style Markdown Editor with Velt

### A markdown editor with live sync, presence and text comments

A React markdown editor with a live preview, modelled on HackMD, where Velt Live State keeps the document in sync across users, with presence and text comments.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://hackmd-velt.vercel.app/)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A HackMD-style markdown editor built with React and [Velt](https://velt.dev). The left pane is a markdown editor and the right pane is a live preview. Velt Live State keeps the markdown in sync between users, `VeltPresence` shows who is in the document, and `VeltComments` in text mode lets users comment on selected text. A live demo is at [hackmd-velt.vercel.app](https://hackmd-velt.vercel.app/).

The base UI was generated in Antigravity from a screenshot of HackMD, then Velt was added.

<p align="center"><img src="https://github.com/user-attachments/assets/ad8f26cd-6f24-4889-b137-0b60dfef264e" alt="Initial generated HackMD-style UI" width="100%" /></p>

<details>
<summary>More screenshots</summary>

<p align="center"><img src="https://github.com/user-attachments/assets/7e33e806-ba5d-4b89-bf37-474c6b0f7d7a" alt="UI follow-up" width="100%" /></p>
<p align="center"><img src="https://github.com/user-attachments/assets/2a9568a2-b9f6-4090-a887-e70902d18275" alt="Adding Velt in Antigravity" width="100%" /></p>
<p align="center"><img src="https://github.com/user-attachments/assets/56019615-31b3-41a2-a0a7-6c7e4f0ce466" alt="Adding comments with Velt" width="100%" /></p>
<p align="center"><img src="https://github.com/user-attachments/assets/a8cfe32f-ca5a-45cc-9e39-c444fc3a9846" alt="Live sync integration" width="100%" /></p>
<p align="center"><img src="https://github.com/user-attachments/assets/3abe14d9-e00e-492e-aca9-384aed81aa5b" alt="Antigravity coding, step 1" width="100%" /></p>
<p align="center"><img src="https://github.com/user-attachments/assets/9d7481ed-9c99-47e7-9fab-3d712fa50d31" alt="Antigravity coding, step 2" width="100%" /></p>
<p align="center"><img src="https://github.com/user-attachments/assets/0cd22032-f0b5-4ac3-9978-3e59dae616ba" alt="Antigravity coding, step 3" width="100%" /></p>

</details>

## Features

- **Split editor and preview**: A markdown editor on the left and a live rendered preview on the right, using `react-markdown` and `remark-gfm`.
- **Live sync**: `useLiveState('hackmd-clone-markdown', ...)` shares the markdown across all users in real time.
- **Presence**: `VeltPresence` in the header shows who is in the document.
- **Text comments**: `VeltComments` in `textMode` for comments on selected text.
- **Demo users**: Predefined users to test collaboration in two windows.
- **Toolbar and status bar**: Editor toolbar, status bar and a default template document.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Collaboration | [Velt](https://velt.dev/) (`@veltdev/react`: Live State, Presence, Comments) |
| Markdown | [react-markdown](https://github.com/remarkjs/react-markdown), [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| Icons | [Lucide React](https://lucide.dev/) |
| UI generation | [Google Antigravity](https://antigravity.google/) |
| Deployment | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- Node.js 18 or newer
- A Velt API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/hackmd-clone.git
cd hackmd-clone
npm install
```

### Environment variables

Create a `.env` file in the project root.

| Variable | Description |
| --- | --- |
| `VITE_VELT_API_KEY` | Your Velt API key, from the [Velt console](https://console.velt.dev). |

### Run

```bash
npm run dev
```

Vite prints the local URL. Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## How it works

`App.tsx` wraps the app in `VeltProvider`, identifies the current user and sets the document to `collaborative-hackmd-clone-2024`. `Layout.tsx` holds the shared markdown in Velt Live State and passes it to the editor and preview:

```tsx
const [markdown, setMarkdown] = useLiveState<string>('hackmd-clone-markdown', defaultMarkdown);
// <Editor value={markdown} onChange={setMarkdown} />
// <Preview content={markdown} />
```

```text
src/
├── App.tsx                  # VeltProvider, identify, setDocument, VeltComments
├── components/
│   ├── Layout.tsx           # Live state, two-pane layout
│   ├── Header.tsx           # VeltPresence, user switcher
│   ├── Editor.tsx           # Markdown input
│   ├── Preview.tsx          # Rendered markdown
│   └── StatusBar.tsx
├── constants/defaultTemplate.ts
└── types/veltUser.ts
```

The UI was produced from a detailed prompt asking for a pixel-exact clone of a HackMD editor screenshot: two panes, dark mode, toolbar and visual-only GitHub and template buttons, with no routing, persistence or API calls.

## Resources

- [Velt documentation](https://docs.velt.dev): SDK guides and API reference.
- [Velt](https://velt.dev): Product site.
- [HackMD](https://hackmd.io/): The product this UI imitates.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
