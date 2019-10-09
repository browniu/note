# iframe

## 跨域通信

### 发信
```JavaScript
  sendIframeMessage(data) {
    window.parent.postMessage({arigin:1,data:data}, "*")
  }
```
### 收信
```JavaScript
watchMessage() {
window.onmessage =  (e)=> {
  console.log(e);
}
}
```
