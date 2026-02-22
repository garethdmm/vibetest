import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jane Smith',
  description: 'Personal website and blog.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
