const title = `Pandas Eating Things`

module.exports = {
  siteMetadata: {
    title: title,
    titleTemplate: `%s | ${title}`,
    description: `This is a website with pandas Eating Things`,
    siteUrl: '',
    siteImage: `./static/site-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Blog with GatsbyJS",
        short_name: "GatsBlog",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
  ],
}