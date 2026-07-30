# ByteUI ⚡

ByteUI is a modern, high-performance component library featuring **Neo-Brutalist** and modern UI styles designed for **React** and **Next.js** applications.

[![npm version](https://img.shields.io/npm/v/@explorers_111/byteui?color=f76a9b&style=flat-square)](https://www.npmjs.com/package/@explorers_111/byteui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Storybook](https://img.shields.io/badge/Storybook-Interactive%20Docs-FF4785?style=flat-square&logo=storybook)](https://storybook.js.org)

---

## Installation & Usage

### Option 1: CLI Copy-Paste (Recommended)

Add components directly to your source code so you maintain full control:

```bash
# 1. Initialize ByteUI configuration in your React / Next.js project
npx @explorers_111/byteui init

# 2. List all available Neo-Brutalist & Modern components
npx @explorers_111/byteui list

# 3. Add components directly to components/neo-brutalism/
npx @explorers_111/byteui add button
npx @explorers_111/byteui add card
npx @explorers_111/byteui add badge
```

---

## Component Usage Examples

### 1. Button

```tsx
import Button from '@/components/neo-brutalism/button';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="primary">Primary Neo</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="cta">Call To Action</Button>
      <Button variant="disabled" disabled>Disabled</Button>
    </div>
  );
}
```

#### Button Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'disabled' \| 'cta'` | `'primary'` | Visual style variant of the button |
| `className` | `string` | `''` | Additional custom CSS classes |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `onClick` | `(e) => void` | `undefined` | Click event handler |

---

### 2. Card

```tsx
import Card from '@/components/neo-brutalism/card';

export default function CardExample() {
  return (
    <Card
      variant="image"
      title="SUMMER VIBES"
      description="Watermelon Sugar Rush - Limited Neo-Brutalist Edition"
      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
      footer={<button className="text-sm font-bold underline">Read More →</button>}
    />
  );
}
```

#### Card Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'simple' \| 'image' \| 'text'` | `'image'` | Visual format of the card layout |
| `title` | `string` | `'Summer'` | Header category / title text |
| `description` | `string` | `'...'` | Main body text snippet |
| `image` | `string` | `undefined` | Background image URL for `image` variant |
| `fluid` | `boolean` | `false` | Stretches card to fill container width |
| `footer` | `React.ReactNode` | `undefined` | Optional footer element |

---

### 3. Badge

```tsx
import Badge from '@/components/neo-brutalism/badge';

export default function BadgeExample() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge variant="primary">NEW</Badge>
      <Badge variant="warning">ALERT</Badge>
      <Badge variant="success">ACTIVE</Badge>
    </div>
  );
}
```

---

## Dark Mode Integration

Wrap your application or container with `NeoThemeWrapper` or add `data-theme="neo"`:

```tsx
import NeoThemeWrapper from '@/components/neo-brutalism/neo.theme';

export default function RootLayout({ children }) {
  return (
    <div className="dark">
      <NeoThemeWrapper>
        {children}
      </NeoThemeWrapper>
    </div>
  );
}
```

---

## Development & Scripts

```bash
# Run Next.js dev server
npm run dev

# Run Storybook interactive component workshop
npm run storybook

# Build component registry for CLI
npm run build-registry

# Run Jest unit & accessibility tests
npm test

# Run type check
npx tsc --noEmit
```

---

## Contributing

We welcome community contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and [ACCESSIBILITY.md](ACCESSIBILITY.md) guidelines before opening issues or submitting pull requests.

## License

[MIT](LICENSE) © ByteUI Team
