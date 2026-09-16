import { describe, expect, it } from "vitest";

import ProjectPage, { generateMetadata, generateStaticParams } from "./page";

describe("project route smoke tests", () => {
  it("generates static params for all registered project slugs", async () => {
    const params = await generateStaticParams();

    expect(params).toHaveLength(5);
    expect(params).toEqual(
      expect.arrayContaining([
        { slug: "amase" },
        { slug: "corteva" },
        { slug: "ems" },
        { slug: "falahOne" },
        { slug: "vts" },
      ]),
    );
  });

  it("returns metadata for a valid project slug", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: "corteva" }),
    });

    expect(metadata.title).toContain("Corteva");
    expect(metadata.description).toBeTruthy();
    expect(metadata.openGraph).toMatchObject({
      title: expect.stringContaining("Corteva"),
      type: "article",
    });

    const ogImages = metadata.openGraph?.images ?? [];
    const ogImageUrl = Array.isArray(ogImages)
      ? ogImages
          .map((image) => {
            if (typeof image === "string") return image;
            if (image instanceof URL) return image.toString();
            if ("url" in image) return image.url;
            return undefined;
          })
          .find(Boolean)
      : typeof ogImages === "string"
        ? ogImages
        : ogImages instanceof URL
          ? ogImages.toString()
          : "url" in ogImages
            ? ogImages.url
            : undefined;

    expect(ogImageUrl).toBeTruthy();
    expect(decodeURI(String(ogImageUrl))).toContain(
      "/images/corteva/SectionContext - Rice field.webp",
    );
  });

  it("returns empty metadata for an invalid project slug", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: "not-a-real-project" }),
    });

    expect(metadata).toEqual({});
  });

  it("throws notFound for an invalid project slug route", async () => {
    await expect(
      ProjectPage({ params: Promise.resolve({ slug: "not-a-real-project" }) }),
    ).rejects.toThrow();
  });

  it("renders a known project case study without crashing", async () => {
    const result = await ProjectPage({
      params: Promise.resolve({ slug: "amase" }),
    });

    expect(result).toBeTruthy();
  });
});
