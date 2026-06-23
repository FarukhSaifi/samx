import { HomeHeroBackdrop } from "@/components/home/HomeHeroBackdrop";
import { about, home, person } from "@/resources";
import { Avatar, Badge, Button, Column, Heading, Line, RevealFx, Row, Text } from "@once-ui-system/core";
import styles from "./HomeHero.module.scss";

export function HomeHero() {
  return (
    <section className={`home-hero-page ${styles.hero}`} aria-label="Home">
      <HomeHeroBackdrop />
      <Column className={styles.content} horizontal="center" align="center" gap="m">
        {home.featured.display && (
          <RevealFx revealedByDefault fillWidth horizontal="center" paddingBottom="24">
            <Badge className={styles.badge} paddingX="12" paddingY="4" arrow={false} href={home.featured.href}>
              <Row paddingY="2" gap="12" vertical="center">
                <strong className={styles.badgeName}>{person.name}</strong>
                <Line background="brand-alpha-strong" vert height="20" />
                <Text className={styles.badgeLabel} marginRight="4">
                  Featured work
                </Text>
              </Row>
            </Badge>
          </RevealFx>
        )}
        <RevealFx revealedByDefault translateY="4" fillWidth horizontal="center" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-l" className={styles.headline}>
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx revealedByDefault translateY="8" delay={0.1} fillWidth horizontal="center" paddingBottom="32">
          <Text wrap="balance" variant="heading-default-xl" className={styles.subline}>
            {home.subline}
          </Text>
        </RevealFx>
        <RevealFx paddingTop="12" delay={0.2} horizontal="center">
          <Button
            id="about"
            data-border="rounded"
            href={about.path}
            variant="secondary"
            size="m"
            weight="default"
            arrowIcon
            className={styles.aboutButton}
          >
            <Row gap="8" vertical="center" paddingRight="4">
              {about.avatar.display && (
                <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />
              )}
              {about.title}
            </Row>
          </Button>
        </RevealFx>
      </Column>
    </section>
  );
}
