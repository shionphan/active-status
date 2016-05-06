Hello! Active-status
===

> Adding class name in a few seconds by event action, Maybe milli seconds. Then you can add css3 animation in the same time. Plugin depends on jQuery, link the jquery at first.

查看简体中文自述文件：[README_CN.md](README_CN.md)

## Demo

English: http://demo.joomla178.com/active-status/demo.html

简体中文: http://demo.joomla178.com/active-status/demo_cn.html

## Usage

### Default opition

```javascript
$('.testdom').astatus()
```

### Add function

```javascript
$('.testdom').astatus(function(){
  //...do something
})
```

### Effect on another element (All opitions)

```javascript
$('.testdom').astatus({
  delay:300, //Delay time
  etype:'click', //Event type, click or touchstart
  cname:'active-status', //Class name
  adddom:'.test-anotherdom' //Other element toggle class name
},function(){
  //...do something
})
```

### CSS Animation

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

## Link

* [Author site](http://www.joomla178.com)
* [IE Warning @Github](https://github.com/shionphan/iewarning)
* [IE Warning @Goovell](https://git.goovell.com/shionphan/iewarning) (简体中文)

## License

The MIT License (MIT)
