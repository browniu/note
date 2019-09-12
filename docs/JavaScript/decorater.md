# 装饰器

## catchError
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