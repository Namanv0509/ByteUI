# Contributing to ByteUI ⚡

Thank you for your interest in contributing to ByteUI! We welcome component contributions, bug fixes, documentation improvements, and feedback.

---

## Local Development Setup

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ByteUI.git
   cd ByteUI
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server & Storybook**
   ```bash
   # Run Next.js app preview
   npm run dev

   # Run interactive Storybook component workshop (port 6006)
   npm run storybook
   ```

---

## Design System & Neo-Brutalist Guidelines

When building or modifying Neo-Brutalist components:
- **Thick Outlines**: Use `var(--border-width)` (3px) or `var(--border-width-thick)` (4px) with solid border `#000000`.
- **Hard Drop Shadows**: Use `var(--shadow-md-1)` or offset shadows (`4px 4px 0 #1e1e1e`). No soft blurs.
- **Color Palette**: Use brand variables (`--color-accent-1`, `--color-accent-2`, `--color-accent-4`) and semantic tokens (`--warning`, `--error`, `--success`).
- **Interaction Feedback**: Use active press translates (`transform: translate(2px, 2px)` with reduced shadow offset) to give tactile feedback.

---

## Testing & Code Standards

Before opening a Pull Request:
1. **Add Unit Tests**: Place unit tests in `components/neo-brutalism/__tests__/component-name.test.tsx`.
2. **Add Storybook Stories**: Add stories in `components/neo-brutalism/component-name.stories.tsx`.
3. **Verify Everything**:
   ```bash
   # Run type check
   npx tsc --noEmit

   # Run linter
   npm run lint

   # Run Jest unit test suite
   npm test

   # Build CLI registry
   npm run build-registry
   ```

---

## Commit Conventions

We follow Conventional Commits format:
- `feat(neo-brutalism): add accordion component`
- `fix(button): preserve custom onClick handler`
- `docs(readme): add props table for card`
- `test(checkbox): add keyboard toggle tests`

---

## Submitting a Pull Request

1. Create a feature branch: `git checkout -b feat/my-new-component`.
2. Push to your fork and submit a PR against `main`.
3. Fill out the PR template checklist completely.
