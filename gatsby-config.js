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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Brian Hamburg',
        short_name: 'Brian Hamburg',
        start_url: '/',
        background_color: '#2e3141',
        theme_color: '#4c5c96',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
