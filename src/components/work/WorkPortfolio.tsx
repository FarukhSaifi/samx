import { ProjectCard } from "@/components";
import { PortfolioCard } from "@/components/work/PortfolioCard";
import { WorkFilters } from "@/components/work/WorkFilters";
import { ROUTES } from "@/lib/constants";
import { getAllWorkItems, getMdxPostBySlug, getWorkCategories, isValidWorkCategory } from "@/lib/work-portfolio";
import type { WorkCategory } from "@/types";
import { Column, Grid } from "@once-ui-system/core";

interface WorkPortfolioProps {
  category?: string;
  excludeSlugs?: string[];
  hideFilters?: boolean;
  limit?: number;
}

export function WorkPortfolio({ category, excludeSlugs = [], hideFilters = false, limit }: WorkPortfolioProps) {
  const activeCategory: WorkCategory | "all" = isValidWorkCategory(category) ? category : "all";
  let filtered = getAllWorkItems().filter((item) => !excludeSlugs.includes(item.slug));
  if (activeCategory !== "all") {
    filtered = filtered.filter((item) => item.category === activeCategory);
  }
  if (limit !== undefined) {
    filtered = filtered.slice(0, limit);
  }
  const availableCategories: (WorkCategory | "all")[] = ["all", ...getWorkCategories()];

  return (
    <Column fillWidth>
      {!hideFilters && <WorkFilters activeCategory={activeCategory} availableCategories={availableCategories} />}
      {filtered.length === 0 ? (
        <Column fillWidth horizontal="center" paddingY="64">
          <p>No projects in this category yet.</p>
        </Column>
      ) : (
        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="24" marginBottom="40" paddingX="l">
          {filtered.map((item, index) => {
            const href = `${ROUTES.WORK}/${item.slug}`;
            const priority = index === 0;

            if (item.type === "case-study") {
              const post = getMdxPostBySlug(item.slug);
              if (!post) return null;
              return (
                <ProjectCard
                  key={item.slug}
                  index={index}
                  priority={priority}
                  href={href}
                  images={item.images.map((img) => img.src)}
                  title={item.title}
                  description={item.summary}
                  hasContent={!!post.content?.trim()}
                  link={item.link || ""}
                  category={item.category}
                />
              );
            }

            return (
              <PortfolioCard
                key={item.slug}
                index={index}
                priority={priority}
                href={href}
                cover={item.cover}
                title={item.title}
                description={item.summary}
                category={item.category}
              />
            );
          })}
        </Grid>
      )}
    </Column>
  );
}
