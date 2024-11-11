import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Flomad Labs R&D',
    template: '%s | Flomad Labs R&D',
  },
  description: 'AI and Robotics research and development collective. Flomad Labs offers cutting-edge tech internships and coding bootcamp opportunities. Join Flomad for innovative projects in AI and robotics.',
  keywords: ['AI', 'Robotics', 'Research', 'Development', 'Technology'],
  authors: [{ name: 'Flomad Labs' }],
  creator: 'Flomad Labs',
  publisher: 'Flomad Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.flomadlabs.com',
    siteName: 'Flomad Labs R&D',
    images: [
      {
        url: 'https://www.flomadlabs.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flomad Labs R&D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@flomadlabs',
    creator: '@flomadlabs',
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
    google: '5mzkMWh84XAxVsXCdtlTAkwN5DQ8zuOZmqxPNGX7oIU',
    yandex: 'd0220e7dd75c564c',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y57R92JN9B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y57R92JN9B');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}
