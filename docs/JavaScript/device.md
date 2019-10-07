# 设备

## 获取摄像头权限

MAC以及IOS调用时需要使用`https`或`http://localhost`协议

```javascript
navigator.getUserMedia // undefined 
```


## 鼠标坐标

```javascript
document.body.addEventListener('mousemove', (e) => console.log(print, e.screenX + ',' + e.screenY))
```
## 获取地理坐标

```JavaScript
getPos() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      this.pos = [position.coords.longitude, position.coords.latitude];
    },
    e => {
      throw e.message;
    }
  );
}
}
```
