import { Providers } from '@/app-wrapper/providers';
import { Header } from '@/widgets/header/ui';
import { Footer } from '@/widgets/footer';
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
    <html data-theme="sunrise" lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Providers>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
