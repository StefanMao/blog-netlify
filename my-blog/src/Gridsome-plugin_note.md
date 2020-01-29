# Gridsome Plugin 筆記

## Plugin 介紹
* source-filesystem  
    Transform files into content that can be fetched with GraphQL in your components.  
* transformer-remark  
    Markdown transformer for Gridsome with Remark.  

 [建立Blog參考資料](http://www.telerik.com/blogs/building-a-blog-with-vue-and-markdown-using-gridsome)

 ## Blog文章載入流程
 1.在目錄下準備好即將載入的文本(**.md檔案)
 2.透過source-filesystem 將文本檔案(.md檔案)轉變成可以利用GraphQL的獲取的方式載入到網頁元件中（在gridsome.config.js中設定)
 3.透過transformer-remark 將Markdown格式文件編譯成網頁可讀文件格式(gridsome.config.js中設定)

 ```Javascript
 module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A simple blog designed with Gridsome',
  template:{
      Post: '/:title',
      Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
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
 ```
