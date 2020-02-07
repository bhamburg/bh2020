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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Hamburg | Web Developer, Designer, and Musician in Philadelphia`,
        short_name: `Brian Hamburg`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#2e3141`,
        display: `standalone`,
        icon: `src/images/bh-icon.png`
      },
    },
  ],
};
