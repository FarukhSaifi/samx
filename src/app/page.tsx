import { Posts } from "@/components/blog/Posts";
import { about, baseURL, home, person, routes } from "@/resources";
import { Avatar, Badge, Button, Column, Heading, Line, Meta, RevealFx, Row, Schema, Text } from "@once-ui-system/core";
import styles from "./page.module.css";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth className={styles.pageContainer}>
      {/* Background Overlay - Optimized for performance */}
      <div className={styles.backgroundOverlay} aria-hidden="true" />
      {/* Overlay for better readability */}
      <div className={styles.readabilityOverlay} />
      <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" fillWidth className={styles.contentContainer}>
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={home.path}
          title={home.title}
          description={home.description}
          image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Column fillWidth horizontal="center" gap="m" className={styles.heroContainer}>
          <Column maxWidth="s" horizontal="center" align="center" fillWidth className={styles.heroContent}>
            {home.featured.display && (
              <RevealFx
                fillWidth
                horizontal="center"
                paddingTop="16"
                paddingBottom="32"
                className={styles.centeredContent}
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="4"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  arrow={false}
                  href={home.featured.href}
                >
                  <Row paddingY="2">{home.featured.title}</Row>
                </Badge>
              </RevealFx>
            )}
            <RevealFx
              translateY="4"
              fillWidth
              horizontal="center"
              paddingBottom="16"
              className={styles.centeredContent}
            >
              <Heading wrap="balance" variant="display-strong-l" align="center">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx
              translateY="8"
              delay={0.2}
              fillWidth
              horizontal="center"
              paddingBottom="32"
              className={styles.centeredContent}
            >
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx paddingTop="12" delay={0.4} horizontal="center" className={styles.centeredContent}>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar marginRight="8" className={styles.avatarOverlap} src={person.avatar} size="m" />
                  )}
                  {about.title}
                </Row>
              </Button>
            </RevealFx>
          </Column>
        </Column>
        {/* <RevealFx translateY="16" delay={0.6}>
          <Projects range={[1, 1]} />
        </RevealFx> */}
        {routes["/blog"] && (
          <Column fillWidth gap="24" marginBottom="l">
            <Row fillWidth paddingRight="64">
              <Line maxWidth={48} />
            </Row>
            <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
              <Row flex={1} paddingLeft="l" paddingTop="24">
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                  Latest from the blog
                </Heading>
              </Row>
              <Row flex={3} paddingX="20">
                <Posts range={[1, 2]} columns="2" />
              </Row>
            </Row>
            <Row fillWidth paddingLeft="64" horizontal="end">
              <Line maxWidth={48} />
            </Row>
          </Column>
        )}

        {/* <Projects range={[2]}  /> */}
        {/* <Mailchimp /> */}
      </Column>
    </Column>
  );
}
