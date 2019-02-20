import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="This is a home page" />
      <h1 css={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}>{data.site.siteMetadata.title}</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={node.id}>
          <h3 css={css`
            margin-bottom: ${rhythm(1 / 4)}
          `}>
            <Link to={node.fields.slug}
              css={css`
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              `}
            >{node.frontmatter.title}</Link>
            <span css={css`
              color: #bbb;
            `}> - {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`