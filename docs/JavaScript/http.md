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

## Promise
```JavaScript
const getData = (url) => new Promise(reject => {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            reject(json)
        })
});
Promise.all([
    getData('https://jsonplaceholder.typicode.com/todos/1'),
    getData('https://jsonplaceholder.typicode.com/todos/2')
]).then(res=> console.log(res));

```
## Promise.race
获取第一个响应的数据
```JavaScript
Promise.race([
    getData('https://jsonplaceholder.typicode.com/todos/1'),
    getData('https://jsonplaceholder.typicode.com/todos/2')
]).then(res=> console.log(res));
```
