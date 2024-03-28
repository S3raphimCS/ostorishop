import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OstoriShop | Магазин одежды',
  description: 'Магазин мужской и женской одежды',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
