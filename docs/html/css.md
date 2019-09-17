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
font-family:Microsoft Yahei,'微软雅黑',Tahoma,'Helvetica Neue',Helvetica,'PingFang SC',sans-serif;
```

| 字体         | 说明                               | 版权 |
| -------------------------- | ---------------------------------- | ---- |
| Microsoft Yahei /'微软雅黑'   | Windows平台默认的字体 | 无   |
| Tahoma | 许多不喜欢 Arial 字体的人常常会改用 Tahoma 来代替，除了是因为 Tahoma 很容易取得之外，也是因为 Tahoma 没有一些 Arial 为人诟病的缺点，例如大写“i”与小写“L”难以分辨等。 | 无   |
| Helvetica Neue / Helvetica | MAC平台的默认西文字体 | 无   |
| Helvetica Neue / Helvetica | MAC平台的默认西文字体 | 无   |
| sans-serif                 | 非衬线字体家族，常作为兜底方案     | 无   |

### 关于版权

#### font-family

浏览器读取`font-family`中的字体名称，并去检索用户电脑系统中的字体，如果有就显示，没有立即检索下一个。因此前端代码中写了某个字体，仅仅是一种调用方法，你的电脑中有就显示，没有就显示其他字体，和版权是没有任何关系的。因为它仅仅是调用了终端用户自身系统中已经存在的字体用来屏幕输出显示，这不需要任何额外的授权许可。

#### @font-face

和font-family默认调用电脑字体不同，@font-face是把自己定义的Web字体嵌入到网页中。因为你要把微软雅黑下载后放入到自己服务器中使用，这个引用方式是会侵权的。

### 顺序原则

* **西文在前，中文在后**  中文字体基本都包含西文字符（但大部分不够美观），而西文字体绝对不包含中文字符
* **MAC在前，WIN在后** 同上，MAC中的许多中文字体在window中没有预装，因此尽量将针对MAC的字体前置
* **兜底字体** 使用系统默认且属于字体家族 **serif**（衬线） 和 **sans-serif**（非衬线） 的字体兜底，兼容旧的操作系统

### 相关论述

* [Web 字体 font-family 再探秘](https://juejin.im/post/5d5376b5e51d453c11684c3b#heading-8)
* [你该知道的字体 font-family](https://github.com/chokcoco/iCSS/issues/6)
* [如何优雅的选择字体(font-family)](https://segmentfault.com/a/1190000006110417)
* [微软雅黑这样使用不侵权](https://www.zhihu.com/search?type=content&q=font-family%20%E7%89%88%E6%9D%83)

## 属性选择器
```css
span[name] /*具有此属性的span元素*/
span[name='xixi'] /*具有此属性且值等于xixi的span元素*/
span[name^='xixi'] /*具有此属性且值以xixi开头的span元素*/
span[name～='xixi'] /*具有此属性且值用空格为分隔符且其中一个值等于xixi的span元素*/
span[name$='xixi'] /*具有此属性且值以xixi结尾的span元素*/
span[name*='xixi'] /*具有此属性且值包含xixi的span元素*/
span[name|='xixi'] /*具有此属性且值等于xixi或以xixi-开头的span元素*/
```

## DT布局（table）
### 垂直居中 
```css
.parent{
  display: table-cell;
  vertical-align: middle;
}
```
### 水平居中
```css
.son{
  display: table;
  margin:auto;
}
```
### 响应式
```css
.parent{
    display: table;
}
.son{
    display: table-cell;
}
```
### 固定底部
```css
.parent{
    display: table;
}
.footer{
    display: table-row;
}
```
### 圣杯
```css
.parent{
    display: table;
}
.header,.footer{
    display: table-row;
}
.main{
    display: table-cell;
}
```