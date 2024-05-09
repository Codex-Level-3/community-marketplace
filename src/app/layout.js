import "./globals.css";

export const metadata = {
  title: "Community Marketplace",
  description: "A place where the local community can buy, sale, and trade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
