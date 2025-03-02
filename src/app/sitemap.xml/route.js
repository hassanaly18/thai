export async function GET() {
    const baseUrl = "https://destinationtoparadise.com"; // Replace with your actual domain
  
    // Static pages
    const staticPages = ["/", "/about", "/contact", "/tours", "/destinations"];
  
    // Fetch dynamic destinations (Example: from your database or an API)
    const destinations = await fetchDestinations(); // Replace with actual function
  
    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      `
        )
        .join("")}
      ${destinations
        .map(
          (destination) => `
      <url>
        <loc>${baseUrl}/tours/${destination.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      `
        )
        .join("")}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  
  // Example function to fetch destinations (Replace this with actual logic)
  async function fetchDestinations() {
    return [
      { slug: "thailand-paradise-escape" },
      { slug: "thailand-cultural-adventure" },
      { slug: "thailand-ultimate-getaway" },
      { slug: "thailand-enchanting-explorer" },
      { slug: "asia-tri-city-adventure" },
      { slug: "ayutthaya-day-explorer" },
      { slug: "island-sunset-adventure" },
      { slug: "phi-phi-island-escape" },
      { slug: "four-island-adventure" },
      { slug: "james-bond-island-tour" },
    ]; // Replace with actual API call or database query
  }
  