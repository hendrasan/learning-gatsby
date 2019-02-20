import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "./blog-post.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>
        {post.frontmatter.date}
      </p>
      <hr />
      <p>Reading time: {post.timeToRead} minute{post.timeToRead > 1 ? 's' : ''}</p>
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString:"DD MMMM YYYY")
      }
      timeToRead
      wordCount {
        paragraphs
        sentences
        words
      }
    }
  }
`