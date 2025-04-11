import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 优化字体加载
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Little Hero - Create Your Own Hero Story',
    template: '%s | Little Hero',
  },
  description:
    'Create personalized adventures for your child where they become the hero of their own story.',
  keywords: [
    "children's books",
    'personalized stories',
    'hero stories',
    'kids books',
    'custom books',
  ],
  authors: [{ name: 'Little Hero Team' }],
  openGraph: {
    title: 'Little Hero - Create Your Own Hero Story',
    description:
      'Create personalized adventures for your child where they become the hero of their own story.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Little Hero',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Little Hero - Create Your Own Hero Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Hero - Create Your Own Hero Story',
    description:
      'Create personalized adventures for your child where they become the hero of their own story.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`min-h-screen bg-slate-50 antialiased`}>{children}</body>
    </html>
  );
}
