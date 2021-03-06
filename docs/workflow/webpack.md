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

## @路径
```JavaScript
//...
extensions:[/**/],
alias: {
    '@':path.join(__dirname,'../src'),
    //...
}
```

## 省略后缀
```JavaScript
extensions:['js','json','jsx']
```

## antd 按需加载
```bash
yarn add antd babel-plugin-import -D
```
```JavaScript
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```
```JavaScript
//app.js
import {button} from 'antd'
```

## 使用async/await语法
```JavaScript
//.babelrc
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

## React路由分片
```JavaScript
//.babelrc
function AsyncComponent(Component) {
    return props => (
        <Suspense fallback={<div>...</div>}>
            <Component {...props} />
        </Suspense>
    );
}
const Works = lazy(() => import('./pages/works'));
//...
 <Route path={'/works'} render={AsyncComponent(Works)}/>
//...
```
```JavaScript
//.babelrc
{
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```

## 分包预加载
```JavaScript
const Works = lazy(() => import(/* webpackPrefetch: true */'./pages/works'));
```

## 公共代码抽离
```JavaScript
module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module.identifier().split('/').reduceRight(item => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all'
        }
      }
    }
  }
};

```
