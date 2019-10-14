# Canvas 画布绘图

## 初始化
```javascript
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
ctx.fillRect(10, 10, 10, 10);
ctx.fillStyle="green";
ctx.fill();
```

## 渲染图片
``` javascript
const img = document.getElementById('img')
tx.drawImage(img,10,10);
```
## 文本
```javascript
ctx.font="40px Arial lighter";
ctx.fillText('hello',0,0)
``` 

## 清除画面
```javascript
ctx.clearRect(0, 0, cvs.height, cvs.width);
```