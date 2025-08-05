import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Metal Art | Advanced Mechanical Automation & Metal Fabrication | Gohana, Haryana',
  description: 'Leading provider of advanced mechanical automation, precision metal fabrication, and structural engineering services in Gohana, Haryana. Expert craftsmanship, innovative solutions.',
  keywords: 'mechanical automation, metal fabrication, structural engineering, Gohana, Haryana, precision manufacturing, industrial automation',
  authors: [{ name: 'The Metal Art' }],
  creator: 'The Metal Art',
  publisher: 'The Metal Art',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://themetalart.com',
    siteName: 'The Metal Art',
    title: 'The Metal Art | Advanced Mechanical Automation & Metal Fabrication',
    description: 'Leading provider of advanced mechanical automation, precision metal fabrication, and structural engineering services in Gohana, Haryana.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Metal Art - Industrial Manufacturing Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Metal Art | Industrial Manufacturing Excellence',
    description: 'Advanced mechanical automation, precision metal fabrication, and structural engineering services.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2C3E50',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://themetalart.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Metal Art",
              "description": "Advanced mechanical automation, precision metal fabrication, and structural engineering services",
              "url": "https://themetalart.com",
              "telephone": "+919416943116",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gohana",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://facebook.com/themetalart",
                "https://linkedin.com/company/themetalart",
                "https://instagram.com/themetalart"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {children}
        <Toaster />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
      </body>
    </html>
  );
}