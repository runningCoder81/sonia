module.exports = {
  siteMetadata: {
    title: `Gingerbread Kitchen`,
    description: `The Gingerbread Kitchen, healthy comfort food.`,
    author: `@runningCoder81`,
    siteUrl: `https://thegingerbreadkitchen.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Overpass:400,400i,700,700i',
            'Amiri|PT+Serif:400,400i,700', //font-family: 'Amiri', serif;
            'Tangerine:400,700', // font-family: 'Tangerine', cursive;
            'Montserrat:400,400i,600' // font-family: 'Montserrat', sans-serif;
          ]
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FBF5ED`,
        theme_color: `#FBF5ED`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://sapphireapi.com/sofya/graphql/`
        // refetchInterval: 60
      }
    }
    // {
    //   resolve: 'gatsby-wpgraphql-inline-images',
    //   options: {
    //     wordPressUrl: 'https://sapphireapi.com/therunningcoder/',
    //     uploadsUrl:
    //       'https://sapphireapi.com/therunningcoder/wp-content/uploads/',
    //     processPostTypes: ['Page', 'Post', 'my_projects'],
    //     graphqlTypeName: 'WPGraphQL',
    //     generateWebp: true
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
