---
title: Gridsome 筆記
date: 2020-02-04
tags: ['Gridsome']
series: false
cover_image: ./image/picture-4.png
canonical_url: false
description: "Gridsome 筆記"
---

# Gridsome 開發筆記

## Gridsome 介紹

* Gridsome 是一個open source franework powered by Vue.js
* 主要是為了快速建立靜態網站
* 利用ＪＡＭＳＴＡＣＫ架構
* GraphQL數據層 —— 為所有數據集中管理
* 支援漸進式圖像資源載入—— 自動調整大小，優化和延遲加載項目


## Gridsome 目錄結構

* package.json : 插件信息
* gridsome.config.js : 顯示已經安裝的插件和選項

* /src 目錄
    Main.Js : 導入全局樣式和腳本，具有訪問Client ＡＰＩ的導出功能,『安裝Ｖue插件 註冊組件和指令的地方』
    Layout : 共享頁面或模板的地方
    Page : 網站頁面
    Collection :是一個資料集，包含所有的資料節點
    template : 插入或引入資料集的地方

## 開發步驟

### 1.建立Gridsome的開發環境
    從Gridsome官方網站-> Introduction 開始閱讀基本運作知識及建立開發環境。

* Install Gridsome CLI tool （YARN需要事先安裝）    
(1)yarn:  
        ```yarn global add @gridsome/cli```  
(2)NPM:  
        ```npm install --global @gridsome/cli```  
        
* Create a Gridsome project  
        (1)```gridsome create my-gridsome-site //建立新專案```  
        (2)```cd my-gridsome-site //進入專案資料夾 ```  
        (3)```gridsome develop // star local dev server ```  
    
到這裡無誤之後就可以開始在/src目錄下，設計您所需要的.vue檔案了

### 2.設計網頁樣式
    在這個部分我會先了解Gridsome中的(Layout)、(Page)、(Components)三者ㄔ彼此之間的關係之後，再開始設計框架。
    
**Tip:  
我會先分別設計一個簡單的(Layout.vue)、(Page.vue)以及(Components.vue)，嘗試將(Layout.vue)及(Components.vue)Import到(Page.vue)，藉此觀察載入的元件會顯示在Page.vue  
這個部分如果卡住的話，可以前去Gridsome官方網站參考元件載入的應用。

通常我會先將網頁切成許多不同的container(並且將拖曳瀏覽器的寬度測試是否能夠符合RWD網站)

css的class撰寫方法：建議由大(版面)至小(元件)開始撰寫

**
        

### 3.部落格文章載入

    在這一個部分則是利用filesource-Plugin來將目錄底下的Markdown檔案加入GraphQL來實現資料串接
    以下為我的實作步驟
    
事前確認：

* 在文章載入之前先確定要載入哪些「內容」、「樣式」及「位置」（我個人習慣先規劃好樣式再將資料載入，減少條資料載入後樣重調整樣式的時間）
* 在專案底下新增目資料夾（存放您的文章內容、圖片或其他檔案）

如果確認完成的話，就可以開始以下步驟:

* 1. 安裝Filesource-Plugin套件
     關於Filesource-Plugin的使用方式可以[這裏](http://gridsome.org/plugins/@gridsome/source-filesystem)
     安裝完套件之後，在 ```gridsome.config.js``` 中設定使用filesource之參數
    
    ```js
    module.exports={
    
    templates:{
      Post: '/:date/:title', //這裡可以設定點擊每一頁POST的時候所產生的路徑 （：title 及:date 為Markdown的中所給定的資料欄位)
      Tag: '/tag/:id'
  },
    plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post', // Template資料夾下 在必須有一個相同名稱的 .vue (我的範例:Post.vue)
        path: 'content/posts/*.md', //在專案下的資料存放路徑，名稱不能重複！不然會跳錯誤
        refs:{           //在文章中需要加入Tag功能時設定 ，Template資料夾下 在必須有一個相同名稱的 .vue檔案
          tags:{
            typeName: 'Tag',
            create:true
          }
        }
      }
    }
    ]
   }
    ```

* 2. 利用Query取的GraphQl中的資料，在這一個部分我個人建議是先參考[官方網站的GraphQl文件](http://gridsome.org/docs/data-layer/)
     然後打開 (http://localhost:8080/___explore) 練習使用基本的Query語法，了解如何取得資料及資料會如何存取到哪頁面中的哪一個變數
     我的query寫法如下:

```Html
    <page-quey>
    query{
          posts: allPost {
            edges {
              node {
                id
                title
                date (format: "D. MMMM YYYY")
                description
                cover_image (width: 770, height: 380, blur: 10)
                path
                tags {
                  id
                  title
                  path
                }
              }
            }
          }
    }
</page-query>
```


**Tip:
    如果讀不到資料的話，檢查步驟
    1.先確認資料有成功串連到GraphQL:至GraphQL介面利用query語法進行確認
    2.確認完資料後再檢查頁面中的參數是否設定正確**

### 4.父子元件間的參數傳遞

在專案中可能會經常用到父、子元件間互相傳遞資料的功能，建議可以先參考這一篇[props & emit](http://ithelp.ithome.com.tw/articles/10205981)
如果要更深入了解這個議題的話，可以[參考官方文件](http://vuejs.org/v2/guide/components-props.html)
    
簡單來說  
**父層資料傳遞到子元件資料用Props (在子元件的.vue檔中設定)**  
**子元件傳遞資料到父層用emit 事件(在父層.vue檔中需有接收事件的function)**
    
### 5.Plugin的選擇
在Gridsome官方網站可以看到Gridsome提供了許多Plugin套件可以使用，如果要載入Plugin套件使用的話，我會推薦使用比較熱門的Plugin  
可以先試著搜尋相關的開發資源及實作出來的功能，較熱門的Plugin通常會有較完整的季資源及較詳細使用教學。
    
在我的專案中我使用了以下這些Plugin：
    
* Filesource-Plugins [filesource官方文件](https://gridsome.org/plugins/@gridsome/source-filesystem)
    主要功能為：將文件轉換成能夠被GraphQL讀取的內容，並且將能資料載入元件中利用
    
```js
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
```

* google-analytics [google-analytics官方文件](https://gridsome.org/plugins/@gridsome/plugin-google-analytics) 
    主要功能為：可以檢視目前網站的瀏覽人次及各網站流量數值分析，使用說明可以參考這個[影片](https://www.youtube.com/watch?v=v07YRJjRAxU)
    安裝完套件之後，在gridosme.config.js設定好參數
        
```js
         {
          use: '@gridsome/plugin-google-analytics',
          options:{
                id:'UA-157371929-1'
          }
         }
```
    
* sitemap[sitemap官方文件](https://gridsome.org/plugins/@gridsome/plugin-sitemap) 
        主要功能為：提高網站在搜尋引擎上的能見度及效能，成功安裝插件後，執行 gridsome build 之後在專案的dist目錄下會生成一個sitemap.xml的檔案
        安裝前要先將網站發佈到任一平台上，並且要在gridosme.config.js裡面設定**siteUrl參數**。
        安裝完套件之後，在gridosme.config.js設定好參數
        
```js
        {
         use: '@gridsome/plugin-sitemap'
          options:{
            cacheTime:600000,//default
          }
        }
```
        
* remark-prismjs[remark-prismjs官方文件](https://gridsome.org/plugins/@gridsome/remark-prismjs)  
        主要功能為：可以改變Markdown code block 語法的樣式，提高可讀性
```js
         transformers:{
            remark: {
              externalLinksTarget: '_blank',
              externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
              anchorClassName: 'icon icon-link',
              plugins: [
                '@gridsome/remark-prismjs'
                       ]
            }
          }
```

### 6.將網站Deploy到Netlify

免費提供平台讓使用者將靜態網站上傳

[Netlify 官方網站](https://www.netlify.com)  

[Gridsome 官方文件 Deploy to Netlify](https://gridsome.org/docs/deploy-to-netlify/)  

[Deploy to Netlify 影片教學](http://www.youtube.com/watch?v=uXukHnQvtK4)

設定成功之後，只要git push專案 就能夠自動發佈到Netlify平台




