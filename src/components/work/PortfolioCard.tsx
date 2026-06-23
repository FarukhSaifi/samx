"use client";

import styles from "@/components/LazyMedia.module.scss";
import type { WorkCategory } from "@/types";
import { Badge, Column, Heading, Media, RevealFx, SmartLink, Text } from "@once-ui-system/core";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

interface PortfolioCardProps {
  href: string;
  cover: string;
  title: string;
  description: string;
  category: WorkCategory;
  priority?: boolean;
  index?: number;
}

function categoryLabel(category: WorkCategory): string {
  const labels: Record<WorkCategory, string> = {
    "case-study": "Case study",
    branding: "Branding",
    illustration: "Illustration",
    social: "Social",
    print: "Print",
    client: "Client work",
  };
  return labels[category];
}

function LazyCover({ cover, title, priority }: { cover: string; title: string; priority?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(priority ?? false);

  useEffect(() => {
    if (priority) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={containerRef} className={styles.container}>
      {!inView && <div className={classNames(styles.skeleton)} aria-hidden style={{ aspectRatio: "16 / 9" }} />}
      {inView && (
        <Media
          priority={priority}
          aspectRatio="16 / 9"
          sizes="(max-width: 768px) 100vw, 50vw"
          radius="l"
          border="neutral-alpha-weak"
          cursor="interactive"
          src={cover}
          alt={title}
        />
      )}
    </div>
  );
}

export function PortfolioCard({ href, cover, title, description, category, priority, index = 0 }: PortfolioCardProps) {
  const revealDelay = Math.min(index * 0.08, 0.48);

  return (
    <RevealFx fillWidth translateY={12} delay={revealDelay} speed="fast">
      <SmartLink href={href} fillWidth style={{ textDecoration: "none" }}>
        <Column fillWidth gap="m">
          <LazyCover cover={cover} title={title} priority={priority} />
          <Column fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="m">
            <Badge background="neutral-alpha-weak" paddingX="8" paddingY="2">
              <Text variant="label-default-xs">{categoryLabel(category)}</Text>
            </Badge>
            {title && (
              <Heading as="h2" wrap="balance" variant="heading-strong-l">
                {title}
              </Heading>
            )}
            {description?.trim() && (
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {description}
              </Text>
            )}
            <Text variant="body-default-s" onBackground="brand-weak">
              View project →
            </Text>
          </Column>
        </Column>
      </SmartLink>
    </RevealFx>
  );
}
