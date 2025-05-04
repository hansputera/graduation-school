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
  description: 'Pengumuman Kelulusan SMA Negeri 3 Palu 2025',
  creator: 'Hanif Dwy Putra S',
  applicationName: 'Pengumuman Kelulusan',
  authors: {
    name: 'Hanif Dwy Putra S',
    url: 'https://hanifu.id',
  },
  category: 'Education',
  keywords: [
    'SMAN 3 Palu pendaftaran',
    'Kurikulum SMAN 3 Palu',
    'Prestasi siswa SMAN 3 Palu',
    'Alumni SMAN 3 Palu sukses',
    'Fasilitas SMAN 3 Palu',
    'Kegiatan ekstrakurikuler SMAN 3 Palu',
    'Sekolah terbaik di Palu',
    'Peringkat sekolah unggulan Indonesia',
    'Pendidikan berkualitas Palu',
    'Syarat masuk SMA Negeri',
    'Kelulusan SMAN 3 Palu',
    'Program persiapan universitas',
    'Keunggulan akademik SMAN 3 Palu',
    'Pendaftaran online SMAN 3 Palu',
    'Program SMAN 3 Palu',
    'Kehidupan siswa SMAN 3 Palu',
    'Sekolah terakreditasi Indonesia',
    'SEO lokal sekolah Palu',
    'Kegiatan sekolah SMAN 3 Palu',
    'Guru SMAN 3 Palu',
    'Kampus SMAN 3 Palu',
    'Pendidikan di Palu Indonesia',
    'Beasiswa sekolah Palu',
    'Portal siswa SMAN 3 Palu',
    'Kontak SMAN 3 Palu',
    'Tur sekolah SMAN 3 Palu',
    'Kalender akademik SMAN 3 Palu',
    'Berita SMAN 3 Palu',
    'Pembinaan kedisiplinan siswa',
    'Bimbingan konseling sekolah',
  ],
  openGraph: {
    title: 'Pengumuman Kelulusan',
    description: 'Pengumuman Kelulusan Angkatan Tahun 2025 SMA Negeri 3 Palu',
    countryName: 'Indonesia',
    creators: 'Hanif Dwy Putra S',
    siteName: 'Pengumuman Kelulusan SMA Negeri 3 Palu',
    images: {
      url: 'https://avatars.githubusercontent.com/u/130784785?s=200&v=4',
    },
  },
  icons: [
    {
      url: 'https://avatars.githubusercontent.com/u/130784785?s=200&v=4',
    },
  ],
  publisher: 'Hanif Dwy Putra S',
  appLinks: {
    web: {
      url: 'https://kelulusan.sman3palu.sch.id',
    },
    windows: {
      app_name: 'Kelulusan SMA Negeri 3 Palu',
      url: 'https://kelulusan.sman3palu.sch.id',
    },
    android: {
      app_name: 'Kelulusan SMA Negeri 3 Palu',
      url: 'https://kelulusan.sman3palu.sch.id',
      package: 'id.sch.sman3palu.kelulusan',
    },
    ios: {
      app_name: 'Kelulusan SMA Negeri 3 Palu',
      url: 'https://kelulusan.sman3palu.sch.id',
    },
    iphone: {
      app_name: 'Kelulusan SMA Negeri 3 Palu',
      url: 'https://kelulusan.sman3palu.sch.id',
    },
  },
  alternates: {
    languages: {
      id: 'https://kelulusan.smnan3palu.sch.id',
      en: 'https://kelulusan.sman3palu.sch.id',
    },
  },
  classification: 'Graduation Website',
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
