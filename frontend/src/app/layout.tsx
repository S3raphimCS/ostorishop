import { Providers } from '@/app-wrapper/providers';
import { Header } from '@/widgets/header/ui';
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
    <Providers>
      <html lang="ru">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}
