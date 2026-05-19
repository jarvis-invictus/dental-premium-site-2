const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://smilecare.in";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/static/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "FacebookExternalHit", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
