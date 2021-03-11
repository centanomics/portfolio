module.exports = {
  siteMetadata: {
    title: "Centanomics' Portfolio",
    description: "A portfolio for Centanomics",
    author: "Centanomics"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/projects/`,
      },
      __key: "images",
    },
  ],
};
