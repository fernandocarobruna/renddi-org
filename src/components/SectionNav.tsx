"use client";

const NAV_LINKS = [
  { key: "grafo", href: "/grafo", label: "Grafo", icon: "📊" },
  { key: "marco-teorico", href: "/marco-teorico", label: "Marco Teorico", icon: "📐" },
  { key: "dictamen-experto", href: "/dictamen-experto", label: "Dictamen Experto", icon: "🎓" },
  { key: "comercial", href: "/comercial", label: "Comercial", icon: "💼" },
];

export default function SectionNav({ active }: { active: string }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 12,
        left: 16,
        zIndex: 99999,
        fontFamily: "'Inter', system-ui, sans-serif",
        display: "flex",
        gap: 6,
      }}
    >
      {NAV_LINKS.map((link) => {
        const isActive = link.key === active;
        return (
          <a
            key={link.key}
            href={link.href}
            style={{
              background: isActive
                ? "rgba(243,156,18,0.15)"
                : "rgba(20,20,30,0.9)",
              border: isActive
                ? "1px solid #F39C12"
                : "1px solid #333",
              color: isActive ? "#F39C12" : "#888",
              padding: "8px 14px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
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
