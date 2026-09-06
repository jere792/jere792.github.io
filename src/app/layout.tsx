import type { Metadata } from 'next';
import './globals.scss';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Jeremy Anton',
  icons: {
    icon: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368006/logoportfolio_xggriw.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <Header />
        <Navbar />
        <main style={{ paddingTop: 80, minHeight: '100vh', backgroundColor: '#0d1117', width: '100%', position: 'relative' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
