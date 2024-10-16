# Skiddle.id Previously arcestia.com

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

My Digital Garden running on Gatsby, React, and Node.js.

**Note**: The source for this site was not created to be a template or theme, but for my own use. Feel free to take whatever inspiration from it that you want, but this code was not written with the intention of being cloned and deployed. As such, I do not provide support or guidance for doing that. I recommend using the [Gatsby Advanced Starter](https://github.com/vagr9k/gatsby-advanced-starter/) to set up a blog or an existing theme created for that purpose.

## Migration from Jekyll to Gatsby

The migration from Jekyll to Gatsby has been completed. The repository now contains a `gatsby-config.js` file with the necessary Gatsby configuration. The HTML files in the `_includes` and `_layouts` directories have been converted to React components. The `.github/workflows/jekyll.yml` workflow has been removed and replaced with a Gatsby build and deploy workflow. The `assets/core.scss` file has been updated to remove Jekyll front matter. The `index.html` file has been updated to use Gatsby-specific syntax for looping through posts.

## License

This project is open source and available under the [MIT License](LICENSE).
