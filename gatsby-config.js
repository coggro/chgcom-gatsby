export default {
  siteMetadata: {
    title: `CoreyHGross.com`,
    siteUrl: `https://www.coreyhgross.com`,
    description: `A web developer in the Greater Philadelphia Area`,
    twitter: '@coggro',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/markdown-pages/',
      },
      __key: 'markdownpages',
    },
    `gatsby-transformer-remark`,
  ],
}
