# HTTP 服务

## 获取URL参数
```JavaScript{1}
const parms = new URLSearchParams(window.location.search)
parms.has('xixi') //false
```

## 原生请求
### Fetch
```JavaScript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

## 测试API
* `https://jsonplaceholder.typicode.com/todos/1`

## 跨域

### JSONP

#### 优点
* 允许跨域
* 兼容性高
* 视图层与逻辑层分离

#### 缺点
* 只支持GET方式
* 失败时无法返回状态码
* 被劫持的风险高
