import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/widgets/header/ui';

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
