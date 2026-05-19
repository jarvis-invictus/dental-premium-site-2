const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://smilecare.in";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: domain, priority: 1.0, changeFrequency: "weekly" },
    { url: `${domain}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${domain}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${domain}/contact`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${domain}/gallery`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${domain}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${domain}/terms-of-service`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${domain}/disclaimer`, priority: 0.3, changeFrequency: "yearly" },
  ];

  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
