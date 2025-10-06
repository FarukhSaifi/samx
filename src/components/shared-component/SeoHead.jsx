import siteConfig from "@context/siteConfig.js";
import Head from "next/head";

const SeoHead = ({ title, description }) => {
  const metaTitle = title || siteConfig?.siteMeta?.title || siteConfig?.profile?.name || "";
  const metaDesc = description || siteConfig?.siteMeta?.description || "";
  const ogImage = siteConfig?.siteMeta?.image || "/logo512.png";

  return (
    <Head>
      <title>{metaTitle}</title>
      {metaDesc ? <meta name="description" content={metaDesc} /> : null}
      <meta property="og:title" content={metaTitle} />
      {metaDesc ? <meta property="og:description" content={metaDesc} /> : null}
      <meta property="og:image" content={ogImage} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SeoHead;
