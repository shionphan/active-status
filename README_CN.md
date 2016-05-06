你好! Active-status
===

> 这是一个给事件的DOM对象在操作事件时增加一个`class`类名，并存在一段时间后将其移除，在这段时间内，你就可以对这个DOM对象增加一些CSS样式，例如CSS3的过程动画，本插件依赖于jQuery，所以必须要先加载jQuery.

查看简体中文自述文件：[README_CN.md](README_CN.md)

## 演示

English: http://demo.joomla178.com/active-status/demo/demo.html

简体中文: http://demo.joomla178.com/active-status/demo/demo_cn.html

## 使用用法

### 默认参数

```javascript
$('.testdom').astatus()
```

### 增加回调

```javascript
$('.testdom').astatus(function(){
  //...可以干些什么事
})
```

### 指定DOM (含所有配置)

```javascript
$('.testdom').astatus({
  delay:300, //持续时间
  etype:'click', //事件类型，还可以是touchstart
  cname:'active-status', //增加的class类名
  adddom:'.test-anotherdom' //指定的DOM增加变化类名
},function(){
  //...可以干些什么事
})
```

### CSS 动画

```CSS
.testdom{
  -webkit-transition: all 300ms;
  -o-transition: all 300ms;
  transition: all 300ms;
}
.testdom.active-status{
  -webkit-transition: all 300ms;
  -o-transition: all 300ms;
  transition: all 300ms;
}
```

## 链接

* [作者网站](http://www.joomla178.com)
* [IE Warning @Github](https://github.com/shionphan/iewarning)
* [IE Warning @Goovell](https://git.goovell.com/shionphan/iewarning) (简体中文)

## License

The MIT License (MIT)
