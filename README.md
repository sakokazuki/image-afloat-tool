
# Image Afloat Tool

webサイト制作時にデザインファイルを上に置いて確認するツール。


## Installation

### Direct download

Download the script [here](https://github.com/sakokazuki/image-afloat-tool/blob/master/lib/image-afloat-tool-pkg.min.js)
```html
<script src="./image-afloat-tool-pkg.min.js"></script>
```

### Package Managers

```
npm install image-afloat-tool
```

## Basic Usage

### init

**ブラウザリロード時の現状保存にCookieを利用しているのでCookieを有効にすること**

Create a cookie, valid across the entire site:

ES6(babel)
```javascript
import ImageAfloatTool from 'image-aloat-tool'

const config = {
  imgsrc: [
    './img/test-pc.png',
    './img/test-sp.png'
  ],
};
ImageAfloatTool(config);
```

### demo

[demo](https://sakokazuki.github.io/image-afloat-tool/)

#### toggle all

key: g
モジュールごと全部消す。

#### toggle gui

key: i
GUIを隠す。

#### toggle key shortcut

key: u
キーコントロールをオフ/オンにする。

#### offsetX

key: h -=1
key: l +=1
画像のx位置を変更する。

#### offsetY

key: k -=1
key: j +=1
画像のy位置を変更する。

#### opacity

key: a -=0.05
key: s +=0.05
画像のopacityを変更する。

## Config Settings

### imgsrc

使う画像の一覧を入れるところ

```
  [a.jpg, b.jpg, c.jpg, ...]
```

## development

yarn使ってます。npmでも可だと思う。

### clone

```
git clone git@github.com:sakokazuki/image-afloat-tool.git
```

### init

```
yarn install
```

and

```
yarn watch
```

watch dev server [localhost:3333](localhost:3000)

### build

```
yarn build
```

`lib/image-float-tool.min.js`はimportして使えるようにしたビルド
`lib/image-float-tool.pkg.min.js`はscriptタグで読んで使えるようにするビルド

`docs/`以下に最新のファイルがコピーされる(github pagesのデモ用)

### todo

- なんだか重いのなんとかする
-
