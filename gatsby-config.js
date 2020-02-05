module.exports = {
  siteMetadata: {
    title: 'Brian Hamburg',
    siteUrl: `https://bhamburg.com`,
    description: `Web Developer, Designer, and Musician in Philadelphia`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-layout', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
