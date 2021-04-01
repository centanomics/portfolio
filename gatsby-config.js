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
  ],
};
