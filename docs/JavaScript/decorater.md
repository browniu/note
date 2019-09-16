# 装饰器
## 配置
```JavaScript

```
```JavaScript

```
## 模版
### catchError
```JavaScript
export default function(target, name, descriptor) {
  const oldValue = descriptor.value;
  descriptor.value = function() {
    const result = oldValue.apply(this, arguments);
    return result.catch(e => {
      console.log('提前捕获', e);
      console.log(e.msg || e.message);
    });
  };

  return descriptor;
}
```

### 输入输出打印
```javascript
export function log(target, name, descriptor) {
    const oldValue = descriptor.value;

    descriptor.value = function () {
        const newArguments = [...arguments];
        const newValue = oldValue.apply(this, newArguments);
        console.log(`函数 ${name} 调用了`, newArguments, '返回了', newValue);
        return newValue;
    };

    return descriptor;
}
```

### 数字类型转换
```javascript
export function parse(target, name, descriptor) {
    const oldValue = descriptor.value;
    descriptor.value = function () {
        const newArguments = [...arguments].map(argument => parseFloat(argument));
        return oldValue.apply(this, newArguments)
    }
}
```