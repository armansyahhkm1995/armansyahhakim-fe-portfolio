import { describe, expect, it } from "vitest";

import { parseMediumRss } from "./medium";

const SAMPLE_RSS = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
  <channel>
    <item>
      <title><![CDATA[Perjalanan Emosi Bayi hingga Remaja]]></title>
      <link>https://medium.com/@ariestaaprilio1995/perjalanan-emosi-bayi-hingga-remaja-d1d55c0c7420?source=rss-9839e7a2cd2d------2</link>
      <guid isPermaLink="false">https://medium.com/p/d1d55c0c7420</guid>
      <category><![CDATA[kesehatan-mental]]></category>
      <category><![CDATA[psikologi]]></category>
      <category><![CDATA[parenting]]></category>
      <category><![CDATA[pendidikan-anak]]></category>
      <pubDate>Thu, 26 Nov 2026 23:40:46 GMT</pubDate>
      <content:encoded><![CDATA[<figure><img alt="Cover" src="https://cdn-images-1.medium.com/max/1024/1*LkLfKHXjABT_ZPlStlT3pQ.jpeg" /><figcaption>Unsplash</figcaption></figure><p>Anak tidak lahir dengan kemampuan mengelola emosinya secara matang. Kemampuan itu berkembang melalui proses panjang.</p><img src="https://medium.com/_/stat?event=post.clientViewed" width="1" height="1" alt="">]]></content:encoded>
    </item>
  </channel>
</rss>`;

describe("Medium RSS parser", () => {
  it("parses article metadata, cleans rss query params, and skips tracking pixels", () => {
    const articles = parseMediumRss(SAMPLE_RSS);

    expect(articles).toHaveLength(1);
    expect(articles[0]).toMatchObject({
      id: "d1d55c0c7420",
      title: "Perjalanan Emosi Bayi hingga Remaja",
      url: "https://medium.com/@ariestaaprilio1995/perjalanan-emosi-bayi-hingga-remaja-d1d55c0c7420",
      thumbnail:
        "https://cdn-images-1.medium.com/max/1024/1*LkLfKHXjABT_ZPlStlT3pQ.jpeg",
      tags: ["kesehatan-mental", "psikologi", "parenting"],
    });
    expect(articles[0].excerpt).toContain(
      "Anak tidak lahir dengan kemampuan mengelola emosinya secara matang.",
    );
    expect(articles[0].readingTime).toMatch(/^\d+ min read$/);
  });

  it("ignores tracking pixels when no cover image is present", () => {
    const noImageXml = `
      <rss version="2.0"><channel><item>
        <title>Artikel Tanpa Gambar</title>
        <link>https://medium.com/@ariestaaprilio1995/no-image-1234567890ab</link>
        <pubDate>Fri, 27 Nov 2026 10:00:00 GMT</pubDate>
        <content:encoded><![CDATA[<p>Paragraf pembuka yang cukup panjang untuk dijadikan ringkasan artikel.</p><img src="https://medium.com/_/stat?event=post.clientViewed" />]]></content:encoded>
      </item></channel></rss>`;

    const articles = parseMediumRss(noImageXml);
    expect(articles).toHaveLength(1);
    expect(articles[0].thumbnail).toBeNull();
  });
});
