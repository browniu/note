# WebPack

## 打包UMD
```JavaScript
const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'localstorageShare',
        libraryTarget: 'umd'
    }
};

```

