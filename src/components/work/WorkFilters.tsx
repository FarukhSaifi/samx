"use client";

import { ROUTES } from "@/lib/constants";
import { WORK_CATEGORY_LABELS, WORK_CATEGORY_ORDER } from "@/resources";
import type { WorkCategory } from "@/types";
import { Row, ToggleButton } from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface WorkFiltersProps {
  activeCategory: WorkCategory | "all";
  availableCategories: (WorkCategory | "all")[];
}

export function WorkFilters({ activeCategory, availableCategories }: WorkFiltersProps) {
  const router = useRouter();
  const tabs = WORK_CATEGORY_ORDER.filter((cat) => cat === "all" || availableCategories.includes(cat));

  function setCategory(category: WorkCategory | "all") {
    const url = category === "all" ? ROUTES.WORK : `${ROUTES.WORK}?category=${category}`;
    startTransition(() => {
      router.push(url, { scroll: false });
    });
  }

  return (
    <Row fillWidth gap="8" wrap marginBottom="32" horizontal="center">
      {tabs.map((category) => (
        <ToggleButton
          key={category}
          label={WORK_CATEGORY_LABELS[category]}
          selected={activeCategory === category}
          onClick={() => setCategory(category)}
        />
      ))}
    </Row>
  );
}
