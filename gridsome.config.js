// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A simple blog designed with Gridsome',
  templates:{
      Post: '/:date/:title',
      Tag: '/tag/:id'
  },
  plugins: [
    {
      use:'gridsome-plugin-modal',
    },
    
    {
      use: '@gridsome/plugin-google-analytics',
      options:{
            id:'UA-157371929-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs:{
          tags:{
            typeName: 'Tag',
            create:true
          }
        }
      }
    }
  ],
  transformers:{
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
