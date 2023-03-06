/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  description?: string;
  title: string;
}>;

const Seo: React.FC<Props> = ({ description, title, children }) => {
  const { site } = useStaticQuery<Queries.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description ?? site?.siteMetadata?.description ?? '';
  const defaultTitle = site?.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name='description' content={metaDescription} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={metaDescription} />
      <meta name='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={site?.siteMetadata?.author ?? ''} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      {children}
    </>
  );
};

export default Seo;
