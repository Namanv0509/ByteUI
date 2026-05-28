import ReusableNavigationMenu, { NavMenuConfigItem } from "./_navigation";

const menuConfig: NavMenuConfigItem[] = [
  {
    type: "dropdown",
    triggerLabel: "Art Movements",
    variant: "default",
    featuredCard: {
      title: "Neo-Brutalism",
      href: "#movements/neo-brutalism",
      description: "Raw typography, high-contrast black borders, and unapologetic asymmetric layouts.",
    },
    links: [
      { title: "The Bauhaus Theory", href: "#movements/bauhaus", description: "Where radical functionality meets geometric German minimalism." },
      { title: "Dadaism", href: "#movements/dada", description: "Anti-art, anti-bourgeois, and pure chaotic visual satire." },
      { title: "Suprematism", href: "#movements/suprematism", description: "Abstract geometric shapes floating in pure, infinite white space." },

    ],
  },
  {
    type: "dropdown",
    triggerLabel: "Exhibitions",
    variant: "components",
    links: [
      { title: "Raw Concrete", href: "#exhibits/raw-concrete", description: "A showcase of architectural brutalism captured through high-contrast film." },
      { title: "Clashing Palettes", href: "#exhibits/clashing-palettes", description: "Exploring the intentional use of neon hues and oversaturated primary colors." },
      { title: "Monochrome Grid", href: "#exhibits/monochrome-grid", description: "A deep dive into structural layouts that refuse to soften their sharp edges." },
      { title: "Kinetic Sculpture", href: "#exhibits/kinetic", description: "Mechanical art pieces emphasizing raw industrial movement over elegance." },
    ],
  },
  {
    type: "link",
    triggerLabel: "Manifesto",
    href: "#manifesto",
  },
];

export default function App() {
  return <ReusableNavigationMenu items={menuConfig} />;
}