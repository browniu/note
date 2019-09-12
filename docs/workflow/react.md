# React

## watch
```jsx
componentWillReceiveProps(nextProps) {
  if (this.props.list !== nextProps.list) {
    if (nextProps.list) {
      this.setState({list: nextProps.list})
    }
  }
}
```

## 动态类名
```javascript
import cx from 'classnames';
//...
<div className={cx(demo,active:true)} />
//...
```

## 动态模版
```JavaScript
// config/webpack.config.js
new HtmlWebpackPlugin(
    Object.assign(
        {},
        {
            inject: true,
            template:'template/index.js',
        },
        //...
    )
)
```
```JavaScript
// src/config/template/index.js
import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './template.config'

class TemplateDom extends Component {
    render() {
        return (
            <html lang="en">
            <head>
                {this.props.config.zepto && <script src="https://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>}
                {this.props.config.axios &&
                <script src="https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js"></script>}
                {this.props.config.console &&
                <script src="https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js"></script>}
            </head>
            <div className="console">{this.props.config.info}</div>
            <div id="root"/>
            </html>
        );
    }
}

export default ReactDOMServer.renderToStaticMarkup(<TemplateDom config={config}/>)

```