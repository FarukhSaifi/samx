import { CustomMDX, ScrollToHash } from "@/components";
import { WorkPortfolio } from "@/components/work/WorkPortfolio";
import { API_ENDPOINTS, ROUTES } from "@/lib/constants";
import { getAllWorkItems, getMdxPostBySlug, getWorkItemBySlug, getWorkItemsByCategory } from "@/lib/work-portfolio";
import { about, baseURL, person, work, WORK_CATEGORY_LABELS } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import {
  AvatarGroup,
  Badge,
  Column,
  Heading,
  Line,
  MasonryGrid,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllWorkItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";
  const item = getWorkItemBySlug(slugPath);

  if (!item) return {};

  return Meta.generate({
    title: item.title,
    description: item.summary,
    baseURL: baseURL,
    image: item.cover || `${API_ENDPOINTS.OG_GENERATE}?title=${encodeURIComponent(item.title)}`,
    path: `${work.path}/${item.slug}`,
  });
}

function GalleryDetail({ slug }: { slug: string }) {
  const item = getWorkItemBySlug(slug);
  if (!item || item.type !== "gallery") {
    notFound();
  }

  const related = getWorkItemsByCategory(item.category)
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 2);

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`${work.path}/${item.slug}`}
        title={item.title}
        description={item.summary}
        image={item.cover}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href={ROUTES.WORK} aria-label="Back to all projects">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Badge background="neutral-alpha-weak" paddingX="12" paddingY="4">
          <Text variant="label-default-s">{WORK_CATEGORY_LABELS[item.category]}</Text>
        </Badge>
        <Heading variant="display-strong-m">{item.title}</Heading>
        {item.summary && (
          <Text variant="body-default-m" onBackground="neutral-weak" align="center">
            {item.summary}
          </Text>
        )}
      </Column>
      {item.cover && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={item.title}
          src={item.cover}
          sizes="(max-width: 960px) 100vw, 960px"
        />
      )}
      <MasonryGrid columns={3} s={{ columns: 1 }} m={{ columns: 2 }}>
        {item.images.map((image, index) => (
          <Media
            key={image.src}
            enlarge
            priority={index === 0}
            sizes="(max-width: 560px) 100vw, 33vw"
            radius="m"
            aspectRatio={image.orientation === "vertical" ? "3 / 4" : "16 / 9"}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </MasonryGrid>
      {related.length > 0 && (
        <Column fillWidth gap="40" horizontal="center" marginTop="40">
          <Line maxWidth="40" />
          <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
            Related projects
          </Heading>
          <WorkPortfolio category={item.category} excludeSlugs={[item.slug]} hideFilters limit={2} />
        </Column>
      )}
      <ScrollToHash />
    </Column>
  );
}

function CaseStudyDetail({ slug }: { slug: string }) {
  const post = getMdxPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.image || `${API_ENDPOINTS.OG_GENERATE}?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href={ROUTES.WORK} aria-label="Back to all projects">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {post.metadata.team?.map((member, idx) => (
              <span key={idx}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn} aria-label={`Visit ${member.name}'s LinkedIn profile`}>
                  {member.name}
                </SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>
      {post.metadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
          sizes="(max-width: 960px) 100vw, 960px"
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <WorkPortfolio category="case-study" excludeSlugs={[post.slug]} hideFilters limit={2} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}

export default async function Project({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";

  const item = getWorkItemBySlug(slugPath);
  if (!item) {
    notFound();
  }

  if (item.type === "gallery") {
    return <GalleryDetail slug={slugPath} />;
  }

  return <CaseStudyDetail slug={slugPath} />;
}
