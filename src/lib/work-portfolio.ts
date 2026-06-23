import { MDX_CONTENT_PATHS } from "@/lib/constants";
import { getPosts } from "@/lib/mdx";
import { workPortfolioGallery } from "@/resources/work-portfolio";
import type { WorkCategory, WorkPortfolioItem } from "@/types";

function mdxToWorkItem(post: ReturnType<typeof getPosts>[number]): WorkPortfolioItem {
  const cover = post.metadata.images[0] ?? post.metadata.image ?? "";
  return {
    slug: post.slug,
    title: post.metadata.title,
    summary: post.metadata.summary,
    category: "case-study",
    type: "case-study",
    cover,
    images: post.metadata.images.map((src) => ({ src, alt: post.metadata.title })),
    publishedAt: post.metadata.publishedAt,
    link: post.metadata.link,
    mdxSlug: post.slug,
  };
}

export function getAllWorkItems(): WorkPortfolioItem[] {
  const caseStudies = getPosts(MDX_CONTENT_PATHS.WORK).map(mdxToWorkItem);
  const merged = [...caseStudies, ...workPortfolioGallery];

  return merged.sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    if (dateA !== dateB) return dateB - dateA;
    return a.title.localeCompare(b.title);
  });
}

export function getWorkItemBySlug(slug: string): WorkPortfolioItem | undefined {
  return getAllWorkItems().find((item) => item.slug === slug);
}

export function getWorkItemsByCategory(category: WorkCategory): WorkPortfolioItem[] {
  return getAllWorkItems().filter((item) => item.category === category);
}

export function getWorkCategories(): WorkCategory[] {
  const categories = new Set<WorkCategory>();
  for (const item of getAllWorkItems()) {
    categories.add(item.category);
  }
  return Array.from(categories);
}

export function isValidWorkCategory(value: string | undefined): value is WorkCategory {
  if (!value) return false;
  return ["case-study", "branding", "illustration", "social", "print", "client"].includes(value);
}

export function getMdxPostBySlug(slug: string) {
  return getPosts(MDX_CONTENT_PATHS.WORK).find((post) => post.slug === slug);
}
