import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kelulusan.sman3palu.sch.id',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      images: [
        'https://kelulusan.sman3palu.sch.id/img/background.jpg',
        'https://kelulusan.sman3palu.sch.id/img/dinprov.png',
      ],
    },
  ];
}
