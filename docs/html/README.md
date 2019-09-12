# HTML

## Viewport 禁用缩放
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no">
```

## Vconsole Debug
```html
<!-- public/index.html -->
<script src="https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js"></script>
<script>
    const vConsole = new VConsole()
    console.log('Hello world');
</script>
```
