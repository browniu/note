# 代码片段

## 元素查坐标
ISO 不支持`getBoundingClientRect` 方法
```javascript
coord(dom) {
    let rect = dom.getBoundingClientRect()
    if (this.isiOS) return [dom.offsetLeft + dom.clientWidth / 2, dom.offsetTop + dom.clientHeight / 2]
    return [rect.x + dom.clientWidth / 2, rect.y + dom.clientHeight / 2]
}
```

## 坐标查元素
```javascript
let posTo = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY).getAttribute('data-pos')
```