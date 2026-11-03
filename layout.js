import "./globals.css";

export const metadata = {
  title: "Medha Poultry Feed & Chicks Center",
  description: "Feeders, drinkers, brooders and automatic systems. Ready stock across Uttar Pradesh.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
