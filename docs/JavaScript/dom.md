# DOM

## 获取伪元素内容

```JavaScript
const dom = document.querySelector('.demo')
const domBefore = window.getComputedStyle(dom, ':before')
console.log(domBefore.content);
```
