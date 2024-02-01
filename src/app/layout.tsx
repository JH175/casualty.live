import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Toaster } from 'react-hot-toast';

const maven = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Casualty.Live',
  description: 'Trend and Send Vital Signs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={maven.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
