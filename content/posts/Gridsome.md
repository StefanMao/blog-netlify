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


## Gridsome 目錄結構

* package.json : 插件信息
* gridsome.config.js : 顯示已經安裝的插件和選項

* /src 目錄
    Main.Js : 導入全局樣式和腳本，具有訪問Client ＡＰＩ的導出功能,『安裝Ｖue插件 註冊組件和指令的地方』
    Layout : 共享頁面或模板的地方
    Page : 網站頁面
    template : 插入或引入資料集的地方

