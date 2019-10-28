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

## Px2Rem
```javascript{12}
// webpack.config.js
const px2rem = require('postcss-px2rem-exclude');
//...
{
	//...
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss',
    plugins: () => [
		//...
      px2rem({
        remUnit:75,exclude: /node_modules/i
      })
    ],
  },
	//...
},
```

## 传送门
```jsx
import {createPortal} from 'react-dom'
export default class ExampleComponent extends Component {
  constructor(props) {
    super(props)
    this.dom = document.createElement('div')
    document.body.appendChild(this.dom)
  }
	render() {
	 return(
	 //...
		{createPortal(<div>xixi</div>),this.dom}
   //...
	 )
	}
}
```

## css-transform 模版

```css
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: 0.7s ease;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: 0.7s ease;
}

```

## Props 默认值
```JavaScript
//...
static defaultProps = {
    area: ['广东省', '珠海市', '香洲区']
};
//..
render(){}
```

## Redux 异步请求

### 初始化reducer
```JavaScript
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const postReducer = function (state = {list: [{title: 'hello'}]}, action) {
    switch (action.type) {
        case 'LOAD': {

            return {
                ...state, list: action.payload
            }
        }
        case 'POST':
            return {
                ...state, list: action.payload
            }
        default:
            return state
    }
}

```
### 合并reducer
```JavaScript
const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer
})
```
### 初始化仓库（使用中间件）
```JavaScript
const store = createStore(
    postReducer, /* preloadedState, */
    compose(
        applyMiddleware(...[thunk]),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    )
;
```
### 派发
```JavaScript
    store.dispatch(async function (dispatch) {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => json)
        console.log(result)
        dispatch({
            type: 'LOAD',
            payload: result
        })
    })
```

## Hooks

### 后代传值
```JavaScript
const CountContext = createContext()
//...
render(){
    <CountContext.Provider value={count}>
        <Sub />
    </CountContext.Provider>
}
//...
const Sub = () => {
    const count = useContext(CountContext)
    return (<div>我是小组件{count}</div>)
}
```

### 动作派发
```JavaScript
function HooksReducer() {
    const [num, dispatch] = useReducer((state, action) => {
        if (action === 'PLUS') return state + 1
        if (action === 'REDU') return state - 1
        return state
    }, 0)
    return (
        <div>
            <div>我是小小组件 {num}</div>
            <div>
                <button onClick={() => dispatch('PLUS')}>+</button>
                <button onClick={() => dispatch('PLUS')}>-</button>
            </div>
        </div>
    )
}
```

### 实现HooksRedux

#### store
```JavaScript
// redux.js
import React, {createContext, useReducer} from 'react'

const reducer = (state, action) => {
    if (action.type === 'RED') return action.value
    if (action.type === 'YELLOW') return action.value
    return state
}

export const Context = createContext({})

export const ShareContext = props => {
    const [color, dispatch] = useReducer(reducer, 'green')
    return (
        <Context.Provider value={{color, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}
```
#### components
```JavaScript
// main.js
import React, {useContext} from 'react'
import {Context, ShareContext} from './redux'

export default function Redux() {
    return (
        <div>
            <ShareContext>
                <h4>Redux</h4>
                <Buttons/>
                <Sub/>
            </ShareContext>
        </div>
    )
}

const Buttons = () => {
    const {dispatch} = useContext(Context)
    return (<div>
        <button onClick={() => dispatch({type: 'RED', value: 'red'})}>变红</button>
        <button onClick={() => dispatch({type: 'YELLOW', value: 'yellow'})}>变黄</button>
    </div>)
}

const Sub = () => {
    const {color} = useContext(Context)
    console.log(color)
    return (<div style={{color}}>
        我是副标题组件,{color}
    </div>)
}
```

### 自定义Hooks
```JavaScript
function useVSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const resize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    })
    useEffect(() => {
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
    return size
}
```
```JavaScript
//component.js
const size = useVSize()
```

## 生命周期优化
```JavaScript
shouldComponentUpdate(nextProps, nextState) {
return !(nextProps.content !== this.props.content)
}
```

