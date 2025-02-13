import React from "react";

const baseURL = "https://jsonvisio.com";

interface SeoTagsProps {
  title: string;
  description: string;
  image: string;
}

export const SeoTags: React.FC<SeoTagsProps> = ({
  description,
  title,
  image,
}) => {
  return (
    <>
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={baseURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jsonvisio.com" />
      <meta property="twitter:url" content={baseURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
