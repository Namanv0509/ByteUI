# Accessibility (a11y) Standards in ByteUI ♿

Neo-Brutalist design uses bold colors, heavy borders, and stark typography. While aesthetically striking, these visuals must strictly conform to accessibility standards to ensure an inclusive experience for users with visual, auditory, motor, or cognitive impairments.

---

## 1. High Contrast & Color Ratio Standards

- **WCAG 2.1 AA Compliance**: All text elements must maintain a minimum contrast ratio of **4.5:1** against their background (3.0:1 for large text).
- **Dark Mode Contrast**: Never rely on faint text gray tones on dark surfaces. Use high-contrast foreground variables (`--color-text-white`, `#ffffff`, `#000000`).
- **Color Independence**: Never rely *only* on color changes to communicate state (e.g. error, success, or selected states). Pair colors with icons, clear text labels, or distinct border treatments.

---

## ⌨2. Focus Indicators & Keyboard Navigation

- **Visible Focus Rings**: Focus rings must be clearly visible. In Neo-Brutalist themes, interactive elements use thick black outlines (`3px solid #000000`) or contrasting focus rings (`outline: 3px solid #f76a9b`). Never hide focus rings with `outline: none` without providing an alternative focus outline style.
- **Tab Traversal**: All interactive controls (`Button`, `CheckBox`, `Slider`, `Card`, `TextArea`) must be focusable using the <kbd>Tab</kbd> key and triggerable using <kbd>Enter</kbd> or <kbd>Space</kbd>.

---

## 3. ARIA Roles & Screen Reader Semantics

- **Explicit Roles**: Interactive custom elements (e.g. clickable cards) must include `role="button"` or appropriate ARIA roles.
- **Form Controls**: Checkboxes and range sliders must link to labels using `id` and `htmlFor` or wrap inputs inside semantic `<label>` elements.
- **Descriptive Labels**: Buttons without text labels (icon-only buttons) must provide an explicit `aria-label`.

---

## 4. Accessibility Testing Checklist

Every pull request modifying or adding components must pass the following manual/automated checks:

- [ ] Run `npm test` to execute React Testing Library accessibility assertions.
- [ ] Test full page keyboard navigation using <kbd>Tab</kbd> and <kbd>Shift+Tab</kbd>.
- [ ] Test with dark mode enabled (`.dark [data-theme="neo"]`).
- [ ] Verify color contrast using Lighthouse or axe DevTools.
