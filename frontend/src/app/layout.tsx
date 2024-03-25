import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OstoriShop',
  description: 'OstoriShop - ​Вязание трикотажных изделий',
};

export default function BaseLayout({
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
