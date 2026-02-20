import type { Metadata } from 'next';
import { Cinzel, Crimson_Pro } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HADES',
  description: 'Something is being built below.',
  openGraph: {
    title: 'HADES',
    description: 'Something is being built below.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${crimson.variable} font-crimson antialiased`}>
        {children}
      </body>
    </html>
  );
}
