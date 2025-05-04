import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Pengumuman Kelulusan',
  description: 'Pengumuman Kelulusan SMA Negeri 3 Palu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.variable, 'antiliased')}>{children}</body>
    </html>
  );
}
