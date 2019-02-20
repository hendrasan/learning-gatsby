import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          siteImage,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${siteImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <Fragment>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <html lang="en" />
            <link rel="canonical" href={`${siteUrl}${pathname}`} />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
            />
            <meta property="description" content={seo.description} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en" />
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:image" content={`${seo.image}`} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="" />
          </Helmet>
        </Fragment>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        siteImage
      }
    }
  }
`