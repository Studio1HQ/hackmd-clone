# Stack Used:

- React.js
- Antigravity
- Velt React

# Velt Features Used:

- Presence
- Live Sync
- Comments

# Prompt Used to generate UI:

```txt
You are an expert frontend engineer and UI pixel-perfect implementer.

Your task is to build **only the editor UI** of a HackMD-style markdown editor **exactly matching the provided image**. This is **not** a redesign, interpretation, or approximation. This must be a **visual and behavioral clone** of the image.

---

### CRITICAL INSTRUCTIONS (DO NOT IGNORE)

* **DO NOT make any assumptions** about layout, spacing, colors, typography, sizing, or behavior.
* **DO NOT invent UI elements** that are not visible in the image.
* **DO NOT omit UI elements** that are visible in the image.
* **DO NOT restyle or “improve” anything.**
* **DO NOT change colors, icons, padding, fonts, or alignment.**
* **DO NOT guess breakpoints** — infer responsiveness strictly from the image and standard proportional scaling.
* **Follow the image exactly as it is.** If something is unclear, replicate it as faithfully as possible from the visual evidence alone.

---

### INPUT CONTEXT

* You are working inside a **basic React project**.
* You are building **only the editor UI** (no authentication, no backend, no real GitHub integration).
* The editor consists of:

  * **Left pane**: Markdown editor
  * **Right pane**: Live markdown preview
* The provided image is the **single source of truth**.

---

### REQUIRED OUTPUT

Produce **production-ready React code** that recreates the UI **pixel-perfectly**.

You must:

1. Use **React functional components**
2. Use **CSS (or CSS Modules / styled-components)** to precisely match styles
3. Ensure the layout is **fully responsive** to all screen sizes while preserving proportions
4. Match:

   * Background colors
   * Pane widths
   * Divider behavior
   * Toolbar icons and placement
   * Font family, size, weight
   * Line height
   * Button styles
   * Hover/focus states (only if visible/implied)
   * Spacing and margins
5. Implement:

   * Markdown input on the left
   * Live preview rendering on the right
6. Match **dark mode styling exactly** as shown
7. Match scrollbar appearance as closely as possible
8. Use **no external UI libraries** unless strictly necessary for markdown parsing
9. Use semantic HTML where applicable

---

### LAYOUT REQUIREMENTS

* Two-column split layout
* Left: editable markdown text area
* Right: rendered markdown preview
* Divider exactly positioned as shown
* Toolbar at the top exactly matching icon order, spacing, and alignment
* Bottom GitHub buttons and template buttons must appear exactly as shown (visual only)

---

### RESPONSIVENESS REQUIREMENTS

* On smaller screens:

  * Maintain proportional scaling
  * Preserve visual hierarchy
  * Do NOT collapse, remove, or redesign panes unless explicitly shown in the image
* No mobile-specific UI unless clearly implied by the image

---

### FUNCTIONAL REQUIREMENTS

* Markdown typing updates preview in real time
* Toolbar buttons do NOT need real functionality unless explicitly visible
* GitHub buttons are **visual only**
* No routing, no persistence, no API calls

---

### DELIVERY FORMAT

* Return:

  * React component(s)
  * CSS
  * Brief explanation of structure
* Code must be clean, readable, and copy-paste ready

---

### FINAL RULE

If there is ever a conflict between best practices and the image:
**THE IMAGE ALWAYS WINS.**

Use the provided image as the **absolute authority** and replicate it **exactly**.
```

# Screenshots:

