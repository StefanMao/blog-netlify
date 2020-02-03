---
title: Css FlexBox 筆記
date: 2019-12-29
tags: ['CSS']
series: false
cover_image: ./image/picture-2.png
canonical_url: false
description: " Flexbox 是一個 CSS3 的盒子模型 ( box model )-靈活的盒子 ( Flexible Box )"
---

# CSS Flexbox 筆記

## CSS Flexbox 介紹
    Flexbox 是一個 CSS3 的盒子模型 ( box model )-靈活的盒子 ( Flexible Box )

## Flexbox 模型概念
Flexbox 的盒子模型具有以下的重要佈局參數:
* 水平的起點與終點 ( main start、main end )
* 垂直的起點與終點 ( cross start、cross end )
* 水平軸與垂直軸 ( main axis、cross axis )
* 水平尺寸與垂直尺寸 ( main size、cross size )

<img src ="http://imgur.com/3t1z4W7.png" alt="drawing" width="100%">

## Flexbox 屬性介紹
* display
* flex-direction
* justify-content
* align-items :align-items 決定了內容元素與整個 Flexbox 的「垂直對齊」位置
* align-self :align-self 的設定與 align-items 相同，但目的不同，align-self 的作用在於覆寫已經套用 align-items 的屬性
* align-content
* flex-wrap
* order
* flex  

### display  
    display:flex  
    dlsplay:inline-flex、inline、inline-block(在後方的元素不會換行)  
<img src ="https://imgur.com/PLkKoDR.png" alt="drawing" width="100%">

### flex-direction
flex-direction 表示 Flexbox 內容元素的「排列方向」，分別有下列四種:  
    row：預設值，由左到右，從上到下  
    row-reverse：與 row 相反  
    column：從上到下，再由左到右  
    column-reverse：與 column 相反  
<img src ="http://imgur.com/Pc3hwp4.png" alt="drawing" width="100%">

### justify-content
justify-content決定內容元素與整個 Flexbox 的「水平對齊」位置  
利用Flexbox 盒子模型，具有 main start 與 main end 左右兩端點的特性來設定justify-content
    flex-start：預設值，對齊最左邊的 main start  
    flex-end：對齊最左邊的 main end  
    center：水平置中  
    space-between：平均分配內容元素，左右元素將會與 main start 和 main end 貼齊  
    space-around：平均分配內容元素，間距也是平均分配  
    
<img src ="http://imgur.com/4qQsgQT.png" alt="drawing" width="90%">  

### flex
 flex 其實是由三個屬性組合而成，依照先後順序分別是「flex-grow」、「flex-shrink」和「flex-basis」  
 如果 flex 只填了一個數值 ( 無單位 )，預設以 flex-grow 的方式呈現，至於三個屬性的解釋如下：  
    
    flex-grow：數字，無單位當子元素的 flex-basis 長度「小」於它自己在父元素分配到的長度，按照數字做相對應的「伸展」比例分配  
    預設值為 0，不會進行彈性變化，不可為負值，設為 1 則會進行彈性變化。  
    
    flex-shrink：數字，無單位，當子元素的 flex-basis 長度「大」於它自己在父元素分配到的長度，按照數字做相對應的「壓縮」比例分配  
    預設值為 1，設為 0 的話不會進行彈性變化，不可為負值。  
    
    flex-basis：子元素的基本大小，作為父元素的大小比較基準，預設值為 0，也因為預設值為 0，所以沒有設定此屬性的時候，會以直接採用 flex-grow 屬性，flex-basis 也可以設為 auto  
    如果設為 auto，就表示子元素以自己的基本大小為單位。  
    
    