import React from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Files</h1>
        <table>
          <thead>
            <tr>
              <th>Relative</th>
              <th>Pretty Size</th>
              <th>Extension</th>
              <th>Birth Time</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(sort: {fields: birthTime, order: DESC }) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`