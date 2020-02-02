---
title: Css Priority 筆記
date: 2019-01-07
tags: ['CSS']
series: false
cover_image: ./image/picture-3.png
canonical_url: false
description: "Css Priority 樣式優先權"
---

# Css Priority 筆記

## Css 樣式優先權

**元素標籤內設定>style 標籤內樣式設定 > link檔案樣式設定 >= import檔案樣式設定**  
link檔案樣式設定理論與import檔案樣式設定相同，但大部分瀏覽器都會給予link檔案設定較高優先權

**同層級的優先權 先後順序為由上到下**

範例：
透過不同方法將這段程式碼中的字體改變顏色
```HTML
<p class="message" id="introduction">
  ..........
 </p>
```

1.利用tag name 的方式修改字體顏色

```Css
    p {color:blue;}
```
2.利用class name 的方式進行修改

```Css
    .message {color :green ;}
```

3.透過ㄛid的方式進行修改
``` Css
    #introduction {color :red}
```
## 如何在開發的過程中避免衝突
* Only use classes: use .introduction instead of #introduction.
* Avoid applying multiple classes on a single HTML element:
don’t write 
```<p class="big red important">```
but rather   
```<p class="title">```
which is more semantically descriptive  
* Don’t use inline styles like <div style="background: blue;">
