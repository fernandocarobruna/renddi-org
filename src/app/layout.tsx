import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renddi — Meta-Modelo de Construcción de Productos",
  description: "Sistema de construcción de productos basado en agentes, grafos causales y revisión iterativa.",
  openGraph: {
    title: "Renddi — Meta-Modelo de Construcción de Productos",
    description: "Sistema de construcción de productos con IA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
