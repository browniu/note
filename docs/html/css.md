# CSS

## clear.css

```css
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  scroll-behavior :smooth;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

a {
  color: unset;
}

ul,
li {
  list-style: none;
  vertical-align: middle;
}

img {
  width: 100%;
  vertical-align: middle;
}

i {
  font-style: normal;
}

```

## 限制fixed定位

```css
.parent{
	transform:translate(0)
}
.son{
	position:fixed
}
```

## font-family

### 标准写法

```css
font-family:'Helvetica Neue',Helvetica,Arial,Microsoft Yahei,sans-serif;
```

| 字体（类）名称             | 说明                               | 版权 |
| -------------------------- | ---------------------------------- | ---- |
| Helvetica Neue / Helvetica | MAC平台的默认字体                  | 无   |
| Arial / Microsoft Yahei    | Windows 平台上默认的无衬线西文字体 | 无   |
| sans-serif                 | 非衬线字体家族，常作为兜底方案     | 无   |

### 关于版权

#### font-family

当我们打开一个网站，浏览器会读取font-family中的字体名称，并去检索用户电脑系统中的字体，如果有的话就显示，没有的话检索下一个。所以，虽然前端代码中写了微软雅黑，但仅仅是一种调用方法，你的电脑中有就显示，没有就显示[其他](https://link.zhihu.com/?target=http%3A//www.uihacker.com/tag/%e5%85%b6%e4%bb%96/)字体，和版权是没有任何关系的。因为它仅仅是调用了终端用户自身系统中已经存在的字体用来屏幕输出显示，这不需要任何额外的授权许可。

#### @font-face

和font-family默认调用电脑字体不同，@font-face是把自己定义的Web字体嵌入到网页中。因为你要把微软雅黑下载后放入到自己服务器中使用，这个引用方式是会侵权的。

### 顺序原则

* **西文在前，中文在后**  中文字体基本都包含西文字符（但大部分不够美观），而西文字体绝对不包含中文字符
* **MAC在前，WIN在后** MAC中的许多中文字体在window中没有预装，因此尽量将针对MAC的字体前置
* **兜底字体** 使用字体家族 **serif** 和 **sans-serif** 兜底，兼容旧的操作系统

### 相关论述

* [Web 字体 font-family 再探秘](https://juejin.im/post/5d5376b5e51d453c11684c3b#heading-8)
* [你该知道的字体 font-family](https://github.com/chokcoco/iCSS/issues/6)
* [如何优雅的选择字体(font-family)](https://segmentfault.com/a/1190000006110417)
* [微软雅黑这样使用不侵权](https://www.zhihu.com/search?type=content&q=font-family%20%E7%89%88%E6%9D%83)