module.exports = {
  siteMetadata: {
    title: 'React + Gatsby',
    description: 'A simple website with React and Gatsby',
    keywords: 'react course, react designers',
    author: 'Fabrice',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'fxf4zzswkxyf',
        accessToken: '0210e4c2b28c90b9a2af0da919f9054c4f3a8008020b1cf94d288059b7fcfb09',
      },
    },
    'gatsby-plugin-offline',
  ],
}
