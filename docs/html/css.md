# CSS

## clear.css

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none;
  --green: #42b983;
  --red: #f66;
  --blue: #73abfe;
  --title: #273849;
  --text: #304455;
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


## 属性选择器
```css
span[name] /*具有此属性的span元素*/
span[name='xixi'] /*具有此属性且值等于xixi的span元素*/
span[name^='xixi'] /*具有此属性且值以xixi开头的span元素*/
span[name～='xixi'] /*具有此属性且值用空格为分隔符且其中一个值等于xixi的span元素*/
span[name$='xixi'] /*具有此属结尾的span元素*/
span[name*='xixi'] /*具有此属性且值包含xixi的span元素*/
span[name|='xixi'] /*具有此属性且值等于xixi或以xixi-开头的span元素*/
```

## 同类选择器
```css
li:first-of-type {}
```

## 显式继承
```css
p{padding: inherit;}  /*强制继承父级该属性*/
```

## 超出省略(...)
```css
p{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

## Sass Prefix/前缀
```scss
$prefix: 'ui-';
.#{$prefix}alert {
  // code ...
}
```

## 配色方案
```css
* {
    --green: #42b983;
    --red: #f66;
    --blue: #73abfe;
    --title: #273849;
    --text: #304455;
}
```
