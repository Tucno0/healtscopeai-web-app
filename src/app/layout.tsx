import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LIRYAL AI - Soluciones de Salud Digital',
  description: 'LIRYAL AI ofrece soluciones innovadoras de telemedicina, monitoreo continuo de pacientes, IA diagnóstica y analytics de salud.',
  icons: {
    icon: [
      { url: '/icon-white.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-black.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/icon-white.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-black.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    title: 'LIRYAL AI',
    description: 'Soluciones de Salud Digital con Inteligencia Artificial',
    images: ['/logo-liryal.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
