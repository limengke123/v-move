# v-move

> 这是一个`vue`指令，让组件能够拖动。

> 应用场景可能比较少，比如模拟windows系统应用的拖拽

举个例子：

```html
<template>
  <div class="hello">
    <div class="box1" v-move></div>
    <div class="box2" v-move></div>
    <div class="box3" v-move></div>
  </div>
</template>
```

~~由于不能录制gif图，静态图片凑合看一下。~~ 找到一个超好用截屏gif工具,推荐一下*ScreenToGif*

![](static/move.gif)

## 功能

* 实现了基本的拖拽功能，同时能够处理好各个拖拽组件的层叠关系。
* 节点可以不用预先设置`position:absolute;`，指令内部已处理。

## 注意的地方

* 拖拽组件的父组件需要给个`position:relative`不然组件的拖拽定位会依据最近能够定位的祖先节点进行定位。
* 不要给组件的节点设置`transition`和`top`、`left`相关的属性，不然拖拽起来很卡很愚蠢。

## 开始

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
