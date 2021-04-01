module.exports = {
  siteMetadata: {
    title: 'Centanomics',
    description:
      'Centanomics is a Full Stack Developer that aims to solve complex problem while learning something new and having fun while doing it. Learn more about Cent here.',
    author: 'Centanomics',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Centanomics Portfolio`,
        short_name: `Cent's Portfolio`,
        start_url: `/`,
        background_color: `#29339b`,
        theme_color: `#29339b`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
