import React from "react"

const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
      padding: `1rem 0`,
      background: `#f7f7f7`,
      textAlign: `center`,
    }}
  >
    <span>Made with &hearts; using <a href="https://www.gatsbyjs.com/">Gatsby</a> &middot; &lt;/&gt; on <a href="https://github.com/arcestia" title="Hosted on GitHub">GitHub</a></span>
    <br />
    <span>&copy; {new Date().getFullYear()} Laurensius Jeffrey Chandra</span>
  </footer>
)

export default Footer
