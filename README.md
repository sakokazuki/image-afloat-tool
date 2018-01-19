
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

### dev

#### toggle all

#### toggle gui

#### toggle key shortcut

#### offsetX

#### offsetY

#### opacity

## Config Settings

### imgsrc

使う画像の一覧を入れるところ

```
  [a.jpg, b.jpg, c.jpg, ...]
```

## development

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

watch dev server `localhost:3333`
