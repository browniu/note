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

## 预加载
```javascript
preload() {
    return Promise.all(this.preloadQueue.map(async (e) => {
        return this.preloadCore(e)
    }))
}
preloadCore(src) {
    return new Promise(resolve => {
        const img = new Image()
        img.src = src
        img.onload = resolve
    })
}
```

## 截流
周期内响应一次

```javascript
const throttle(fun,delay)=>{
    let lastTime = 0
    return function(){
        let nowTime = Date.now()
        if(nowTime-lastTime>delay){
            fun()
            lastTime=nowTime
        }
    }
}
// 注意使用方式
window.onclick=throttle(()=>{
    console.log('click me!')
},1000)
```

## 防抖
阻止触发，停止触发后延迟响应
```javascript
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this
        const args = arguments
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(context, args), wait)
    }
}
```

## 获取伪元素内容

```JavaScript
const domBeforeConText = dom => window.getComputedStyle(dom,':before')
```

## 两点间距离
```JavaScript
const distance = (x0,y0,x1,y1) => Math.hypot(x1-x0,y1-y0)
distance(1,1,2,3) // 2.23243..
```

## 监听回车
```JavaScript
dom.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    console.log('回车')
  }
})
```

## 图像队列预加载
```JavaScript
const preload = (images) => {
  const core = (e) => {
    new Promise(resolve => {
      const img = new Image()
      img.src = e
      img.onload = resolve
    })
    return Promise.all(images.map(async img => core(img)))
  }
}
// 用例
await preload(['a.jpg','b.jpg'])
```

## 生成指定长度和范围的随机数组
```JavaScript
const randomIntArrayInRange = (min, max, n = 1) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
