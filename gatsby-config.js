module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "The Well Played Game",
  },
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Well Played Game Web App`,
        short_name: `The Well Played Game`,
        start_url: `/`,
        background_color: `#9c27b0`,
        theme_color: `#4caf50`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-offline',
  ],
};
