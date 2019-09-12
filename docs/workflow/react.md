# React

## watch
```jsx{1}
componentWillReceiveProps(nextProps) {
  if (this.props.list !== nextProps.list) {
    if (nextProps.list) {
      this.setState({list: nextProps.list})
    }
  }
}
```

## 动态类名
```javascript{3}
import cx from 'classnames';
//...
<div className={cx(demo,active:true)} />
//...
```

## 动态模版
```JavaScript {7}
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
```JavaScript {24}
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

## 样式作用域
```javascript{4}
import styles from './index.less';
//...
<div className={styles.demo} />
<div className={styles.demo,true?[styles.active]:''} />
//...
```
