const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://smilecare.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
