"use client";

const NAV_LINKS = [
  { key: "grafo", href: "/grafo", label: "Grafo", icon: "📊" },
  { key: "marco-teorico", href: "/marco-teorico", label: "Marco Teorico", icon: "📐" },
  { key: "dictamen-experto", href: "/dictamen-experto", label: "Dictamen Experto", icon: "🎓" },
  { key: "paper-validacion", href: "/paper-validacion", label: "Paper Validacion", icon: "📄" },
  { key: "comercial", href: "/comercial", label: "Comercial", icon: "💼" },
];

export default function SectionNav({ active }: { active: string }) {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 99999,
        fontFamily: "'Inter', system-ui, sans-serif",
        display: "flex",
        gap: 4,
        padding: "8px 16px",
        background: "#08080c",
        borderBottom: "1px solid #1a1a2e",
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 800,
          color: "#F39C12",
          marginRight: 12,
          display: "flex",
          alignItems: "center",
        }}
      >
        RENDDI
      </span>
      {NAV_LINKS.map((link) => {
        const isActive = link.key === active;
        return (
          <a
            key={link.key}
            href={link.href}
            style={{
              background: isActive
                ? "rgba(243,156,18,0.15)"
                : "transparent",
              border: isActive
                ? "1px solid #F39C12"
                : "1px solid transparent",
              color: isActive ? "#F39C12" : "#888",
              padding: "6px 12px",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
