import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        {posts.map(({ node }) => (
          <article key={node.id}>
            <header>
              <h2>
                <a href={node.fields.slug}>{node.frontmatter.title}</a>
              </h2>
              <p>{node.frontmatter.date}</p>
            </header>
            <section>
              <p>{node.excerpt}</p>
            </section>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
