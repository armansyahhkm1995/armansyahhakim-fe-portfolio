export interface MediumArticle {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  isoDate: string;
  excerpt: string;
  thumbnail: string | null;
  tags: string[];
  readingTime: string;
}

export const MEDIUM_PROFILE_URL = "https://medium.com/@ariestaaprilio1995";
export const MEDIUM_FEED_URL = "https://medium.com/feed/@ariestaaprilio1995";

export const FALLBACK_MEDIUM_ARTICLES: MediumArticle[] = [
  {
    id: "d1d55c0c7420",
    title: "Perjalanan Emosi Bayi hingga Remaja",
    url: "https://medium.com/@ariestaaprilio1995/perjalanan-emosi-bayi-hingga-remaja-d1d55c0c7420",
    publishedAt: "Nov 27, 2026",
    isoDate: "2026-11-26T23:40:46.000Z",
    excerpt:
      "Anak tidak lahir dengan kemampuan mengelola emosinya secara matang. Kemampuan itu berkembang melalui proses panjang yang melibatkan tubuh, otak, bahasa, pengalaman, hubungan, dan lingkungan tempat ia tumbuh.",
    thumbnail:
      "https://cdn-images-1.medium.com/max/1024/1*LkLfKHXjABT_ZPlStlT3pQ.jpeg",
    tags: ["kesehatan-mental", "psikologi", "parenting"],
    readingTime: "8 min read",
  },
];

function unwrapCdata(raw: string): string {
  return raw.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/\u00a0/g, " ");
}

function stripTags(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(block: string, tagName: string): string {
  const escaped = tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, "i"));
  return match ? unwrapCdata(match[1]) : "";
}

function extractAllTags(block: string, tagName: string): string[] {
  const escaped = tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, "gi");
  const results: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(block)) !== null) {
    const val = unwrapCdata(match[1]);
    if (val) results.push(val);
  }
  return results;
}

function cleanMediumUrl(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    u.searchParams.delete("source");
    return u.toString();
  } catch {
    return rawUrl.split("?")[0];
  }
}

function extractThumbnail(htmlContent: string): string | null {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = imgRegex.exec(htmlContent)) !== null) {
    const src = match[1];
    if (src && !src.includes("medium.com/_/stat")) {
      return src;
    }
  }
  return null;
}

function extractExcerpt(htmlContent: string, maxLength = 190): string {
  const withoutFigcaptions = htmlContent.replace(/<figcaption[\s\S]*?<\/figcaption>/gi, "");
  const paragraphs = withoutFigcaptions.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  let text = "";
  for (const p of paragraphs) {
    const clean = stripTags(p);
    if (clean.length > 20) {
      text = text ? `${text} ${clean}` : clean;
      if (text.length >= maxLength) break;
    }
  }
  if (!text) {
    text = stripTags(withoutFigcaptions);
  }
  if (text.length <= maxLength) return text;
  const sliced = text.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${sliced.slice(0, lastSpace > 80 ? lastSpace : maxLength).trim()}…`;
}

function estimateReadingTime(htmlContent: string): string {
  const words = stripTags(htmlContent).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function formatDate(pubDate: string): { formatted: string; iso: string } {
  const parsed = new Date(pubDate);
  if (Number.isNaN(parsed.getTime())) {
    return { formatted: pubDate, iso: new Date().toISOString() };
  }
  const formatted = parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
  return { formatted, iso: parsed.toISOString() };
}

export function parseMediumRss(xml: string): MediumArticle[] {
  const itemBlocks = xml.match(/<item>([\s\S]*?)<\/item>/gi) || [];
  const articles: MediumArticle[] = [];

  for (const block of itemBlocks) {
    const title = decodeHtmlEntities(extractTag(block, "title"));
    const rawLink = extractTag(block, "link");
    const guid = extractTag(block, "guid");
    const pubDate = extractTag(block, "pubDate");
    const categories = extractAllTags(block, "category");
    const content =
      extractTag(block, "content:encoded") || extractTag(block, "description");

    if (!title || !rawLink) continue;

    const url = cleanMediumUrl(rawLink);
    const idMatch = (guid || url).match(/([a-f0-9]{10,})$/i);
    const id = idMatch ? idMatch[1] : url;
    const { formatted: publishedAt, iso: isoDate } = formatDate(pubDate);

    articles.push({
      id,
      title,
      url,
      publishedAt,
      isoDate,
      excerpt: extractExcerpt(content),
      thumbnail: extractThumbnail(content),
      tags: categories.slice(0, 3),
      readingTime: estimateReadingTime(content),
    });
  }

  return articles;
}

export async function getMediumArticles(limit = 6): Promise<MediumArticle[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "Mozilla/5.0 (compatible; ArmansyahPortfolio/1.0)",
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return FALLBACK_MEDIUM_ARTICLES.slice(0, limit);
    }

    const xml = await response.text();
    const parsed = parseMediumRss(xml);
    if (parsed.length === 0) {
      return FALLBACK_MEDIUM_ARTICLES.slice(0, limit);
    }

    return parsed.slice(0, limit);
  } catch {
    return FALLBACK_MEDIUM_ARTICLES.slice(0, limit);
  }
}
