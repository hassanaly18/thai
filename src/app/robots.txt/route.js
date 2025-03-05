export async function GET() {
    const content = `User-agent: *
  Disallow:
  Sitemap: https://destinationtoparadise.com/sitemap.xml`;
  
    return new Response(content, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  