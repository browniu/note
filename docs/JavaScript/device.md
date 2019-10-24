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

## 微信全屏同层视频元素
```JavaScript
<video
    style="width: 100vw; height: 100vh; object-fit: fill;"
    x5-video-player-fullscreen="true"
    x5-video-player-type="h5"
    x5-video-orientation="landscape"
    loop autoplay muted preload="auto"
    airplay="allow"
    -webkit-playsinline="true"
    playsinline="true"
    src="https://static.jx3.xoyo.com/gfsj/20181201/2plxj.mp4"></video>
```

## Webp判断
```javascript
(function () {
    function canUseWebP() {
      var elem = document.createElement('canvas');
      if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    }
    var isSupport = canUseWebP();
    var match = window.location.search.match(/__WEBP__=(\d)/);
    if (match) {
      isSupport = match[1] === '1'
    }
    var bodyClassName = document.body.className + ' ' + (isSupport ? 'webp' : 'no-webp');
    document.body.className = bodyClassName;
  }());
```
