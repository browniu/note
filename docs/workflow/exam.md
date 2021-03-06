# 热点速览

## 原型链
JS就是基于原型的语言。每个对象都有一个原型，对象以原型为模板、从原型继承方法和属性。原型也有自己的原型，一层一层、以此类推。这种关系常被称为
原型链。
> 查找对象属性的路径：自身》原型》父级原型》祖父级原型》顶层原型

## 继承

### 原型赋值继承
将父类的实例直接赋值给子类的原型，子实例通过原型链式查找可以继承父类的属性
* 缺点是继承的方向是单向的，无法向父类的方法传参/处在原型链中的所有属性都是共享可见的

### 构造函数继承
子类在其构造函数中用实例的this通过`call/apply`调用父类的构造函数，子实例就可以访问父类的属性
* 优点是1.可以一对多继承，不是链式的2.弥补了原型链继承的缺点：子实例可以向父类构造传参/父类原型属性不可见
* 缺点也是只继承父类构造函数的属性，无法继承父类原型属性
* 还有无法实现构造函数的复用/每个新的子实例都有父类构造函数的副本，数据臃肿

### 分离组合继承（寄生）
构造函数属性继承和建立子类和父类原型的链接，分离就是分两步走；组合是指同时继承子类构造函数和原型中的属性
* 这里用到了Object.creat(xobj)方法，该方法会对传入的obj对象进行浅拷贝。将父类原型复制给了子类原型。
* 优点是在子类构造函数中继承了父类的属性/子类原型和父类原型建立了连接

### ES6继承
es6引入了class、extends 的继承方式（基于原型继承，将子类的原型指向父类）

## new
生成一个新对象》将构造函数的this 指向新对象》给新对象添加熟悉》返回新对象

## 跨域
域的限制：JavaScript/浏览器环境出于安全方面的考虑，不允许跨域名/端口/协议调用其他页面的对象。

### JSONP
利用 `<script>` 元素的开放策略，可以不受域的限制从其他获取 JSON 数据。
* 优点 步骤简单/兼容性好
* 缺点 只支持GET方式/无法返回状态码/被劫持的风险高

### CORS跨资源共享策略
服务器允许，浏览器支持即可
* Access-Control-Allow-Origin：表示服务端允许的请求源，*标识任何外域，多个源 , 分隔

### NGINX反向代理
开发环境配置，且步骤稍复杂
* 通过nginx配置代理服务器（域名与test1相同，端口不同）做跳板机，反向代理访问test2接口，且可以修改cookie中test信息，方便当前域cookie写入，实现跨域登录。

### iframe类
* location.hash 父页面通过改变`src`的`hash`值可以跨域向子页面传递数据
* window.name 子页面设置该值后修改`src`为同源页面后可获取该值
* postMessage 可以进行不受域限制的父子通信

### webscoket
* 允许跨域的双向通信协议

## URL编码
* `encodeURI` 编码整条URL（!#$&'(),;=?~）不编码
* `encodeURIComponent` 编码某一段URL （!'()*-._~）不编码

## 闭包
闭包的实质是因为函数嵌套而形成的作用域。即函数A内部有一个函数B，函数B可以访问A中的变量，B就是一个闭包。
* 私有变量
* 回调函数

## BFC格式化上下文
* 生成：`positon:absolute/fixed` / `display:inline-block/table` / `float:left/right` / `overflow!=visiblle`
* 机制：垂直方向的margin重叠/内部元素不影响外界/不与浮动元素重叠/计算浮动子元素的高度

## 网页渲染的流程
* 输入网址
* DNS服务器解析IP
* 建立TCP链接
* 浏览器发送HTTP请求
* 服务器返回资源
* 浏览器载入并解析资源
* 渲染DOM-Tree/CSS-Tree/组合Render-Tree/渲染

## 纯函数
如果函数的调用参数完全相同，则永远返回相同的结果。它不依赖程序执行期间的函数外部的任何状态，不产生任何可观察的副作用（状态交互），便于测试和重构。

## TCP
### 三次握手
客户端与服务器建立建立TCP链接时的通信协议
* 客户端发送`SYN`请求
* 服务器收到`SYN`请求包，确认后发出自身的`SYN+ACK`请求包
* 客户端收到`SYN+ACK`请求包，确认后发出`ACK`包，进入链接状态

### 四次挥手
客户端与服务器断开TCP链接时的操作
* 客户端发送一个请求断开的包
* 服务端返回一个同意断开的包 序列号+1（接收端可以可以依据此丢弃重复的报文段）
* 服务端发送一个请求断开的包
* 客户端发送一个确认断开的包 序列号+1

## 深拷贝
深拷贝是指源对象和拷贝对象相互独立，其中任何一个发生变化都不会对对方产生影响。深浅拷贝最根本的区别就是是否真正获取到一个对象的复制实体，而不是引用。深拷贝在内存中新建了复制体的存储，而浅拷贝只是引用了源头的内存地址。
* 使用JSON `b=JSON.parse(JSON.sringify(a))` 
* 递归遍历属性

## 数据类型
* 基本：`undefined` `null` `string` `number` `boolean`
* 引用：`object` `array` `function`
* 检测：
1. typeof 可用于`undefined/string/number/boolean/function`
2. instanceof 可用于`array`
3. isNaN 可用于`NaN`
4. constructor 除了方法的原型被设置手动指向其他类型（如数组）
5. Object.prototype.toString.call(null) 全能


## diff
1. 比较文本差异的算法
    * 比较两个树形数据结构的差异时，传统diff算法是循环递归每一个节点，复杂度达到O(n^3)
    * 三大策略：1忽略跨级操作只进行同层级比较 2拥有相同类的组件生成相似树形结构，不同类组件生成不同树形结构 3同级别子节点通过唯一id区分
2. 比较粒度：
    * Tree: 树的每一层都会比较
    * component：同类继续比较，不同类直接替换
    * Element：完全遍历，根据ID确定要移除和新增的元素（）
    * 文本类型变换直接替换不会diff
3. 基于diff的优化：
    * 减少DOM的操作，使用隐藏而不是移除
    * 使用生命周期` shouldComponentUpdate()`减少不必要的更新
    * 类似的结构封装成组件
    * 列表元素key值最好不要设置为数组的index，因为即使元素没变但是index可能会变

## 机器学习模型建立
* 模型就是一个带有可训练参数的函数。这个函数表达了输入和输出之间的变换关系。我们通过在数据集上训练模型来获得最佳参数。训练好的模型可以精确的
将输入数据转换为我们想得到的输出。
* 最常见的模型是Sequential模型。Sequential模型将网络的每一层简单的叠在一起。您可以将需要的层按顺序写在一个列表里。
* 输入层规定输入数据的格式，输出层规定输出数据的格式，中间的神经网络网络层负责训练参数

## 内存泄露
* Chrome的 可以进行内存占用的监控 timeline 和 profiles。
* 通过触发某些事件进行泄漏点的定位

## this
调用上下文（invocation context），函数的每一次调用都会包含一个`this`对象。它是指向对象的关键字。
* 默认绑定/普通函数调用 `this`指向全局对象（window）
* 隐式绑定/函数作为对象属性调用 `this`指向该对象
* 强制绑定/使用函数的方法`apply()`、`apply()`、`apply()`可以明确指定`this`的绑定目标
* 构造绑定/使用`new`调用构造函数创建实例，`this`指向这个实例对象

## 函数式编程
允许把函数当作一个实参或返回值，将复杂的计算分解成一些列嵌套的函数，逐层推导，不断渐进。
* 代码结构易读性/逻辑清晰
* 高阶函数/函数作为实参，返回一个新函数
* 柯里化/将一个完整的运算过程分解成多个函数调用 参数复用/提前判断/延迟触发
* 柯里化预传参数实现多态


## 模块化/组件化（）
* 高内聚/低耦合：不同功能模块之间的依赖关系应该简单清晰/封装自己的状态不影响外部
* 可复用性/代码可读性/可维护性/可拓展性
* 模块化是对代码组织而言/组件化是对UI界面而言

## Promise
为了解决异步编程时出现回调多层嵌套的问题。提高代码的可读性和可维护性。
* 原理：Promise也还是使用回调函数，只不过是把回调封装在了内部，我们使用上一直通过then方法的链式调用，使得多层的回调嵌套看起来变成了同一层的，书写上以及理解上会更直观和简洁一些。
* 三个状态 `pending` `resolved` `rejected`
* 参数是一个函数，函数的两个参数是两个函数 `resolve` `reject` 用与状态转换
* 实例方法`then` 可以进行链式调用，获取上一步返回的结果
* 实例方法`reject` 可以捕获`then`中的异常
* `Promise.all` 用于封装多个Promise对象

##  async/await
ES7提出的关于异步操作的终极方案。相较于其他异步方案 `async` 流程清晰，直观、语义更加明显。它使得操作异步操作流程就如同操作同步流程。同时 async 函数自带执行器，执行的时候无需手动加载。
* 返回一个`Promise`对象
* `async` 会等待所有的`await`执行完`Promise`
* 其中一个`await` 抛异常会中断后续操作，可以通过`try/catch`解决

## web安全
* XSS漏洞：跨站脚本攻击/注入恶意可执行脚本-不要直接从DOM直接获取数据/不要使用可解析字符串脚本的方法/做escape转译编码
* CSRF：跨站请求攻击/身份模拟发送服务器请求-正确使用GET/POST请求/非GET请求中携带token
* SQL注入：服务器未过滤用户输入，执行了攻击者发送的SQL查询代码

## ES6典型的新特性
* ES6其实包含ES2015/ES2016/ES2017/ES2018等
* let和const/模版字符串/箭头函数/symbol/Set/Map类型/for of 遍历/Promise/Async/Class/解构赋值/展开运算符等

## 事件模型（事件流）
* DOM0级模型：事件不会传播，没有事件流
* DOM2级模型：捕获阶段-自上而下/冒泡阶段-自下而上/处理阶段-到达目标元素的监听函数
* 事件流：捕获阶段》处理阶段》冒泡阶段

## 浏览器兼容性
* 样式兼容性 默认状态-clear.css/CSS3属性-前缀
* 交互兼容性 事件监听-封装函数/滚动高度
* 浏览器hack 判断浏览器类型的一些方法

## AJAX 异步请求数据
* 不刷新页面的情况下，Ajax通过异步请求加载后台数据，并在页面上渲染。
* 使用核心对象 `XMLHttpRequest`的 `open` 'send'方法建立请求
* `responseXML`& `responseText` 响应请求结果
* 使用`Fetch`替换：逻辑清晰/基于Promise 支持async-await

## 垂直居中
* line-height = height
* display: inline-block & vertical-align: middle & ::after并列一个高度100%的伪元素
* display:table-cell;vertical-align:middle;
* display: flex;align-items: center;
* transform & top
* padding:15px 0
* flex:1 (所有弹性盒模型对象都有相同高度，且平分弹性盒)

## 浏览器的构成部分
* 用户界面：地址栏/前后按钮/书签目录等
* 浏览器引擎：查询/操作渲染引擎接口
* 渲染引擎：现实请求的内容/解析html和css
* 网络：完成网络调用
* JS解释器：执行JS代码
* 数据存储

## REM布局
*  设置html元素的font-size和屏幕宽度成正比 rem单位所代表的实际尺寸就和屏幕宽度成正比
*  像素尺寸与设备尺寸并不是1：1的对应关系，而是取决于像素密度。比如设备尺寸同为350，有的是三倍屏，像素尺寸就是1125,两倍屏就是750,使用REM布局
可以使我们只需要按照设计稿写页面，页面在其他设备尺寸上可以自适应的缩放显示，保持高度的设计稿还原。
* 正比可以通过媒介查询/JS定义/vw来实现
* 优点是灵活/还原度高
* JS与CSS具有一定的耦合性/不适合多端适配项目

## 适配方案
* 百分比布局-计算困难
* 媒介查询-多套样式-繁琐
* rem布局-灵活
* vw/vh-兼容性问题

## CDN-内容分发网络
* 是节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络
* 实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上
* 尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定

## Gzip
* HTTP协议上的gzip编码是一种用来改进web应用程序性能的编码协议
* 压缩比率在3到10倍左右，可以大大节省服务器的网络带宽

## 阻塞
* css不阻塞js阻塞，因为js可能会改变dom结构

## webp
* webpack 编译css生成两条background图片引用，由index.html头部的判断函数结果决定是否给body打上webp class，通过class确定调用那种类型的图片/img元素使用封装的img组件，在组件内判断src的值调用那种图片

## call/apply/bind
* fun.call(this,'xixi','haha') 参数由逗号隔开
* func.apply(this,['xixi','haha']) 参数是一个数组
* func.bind(this,['xixi','haha'])() 参数是一个数组，返回一个函数，需要手动执行

## flex布局
* justify-content：主轴项目对齐方式：between 两端对齐中间平均/around 全部平均间隔
* align-items：交叉轴对齐方式：baseline 第一行文本基线/stretch 未设高度时撑满
* align-content：多轴对齐方式
* flex-grow：是否自动放大撑满剩余空间
* flex-shrink：是否自动缩小剩余空间
* flex-basis：自动分配剩余前项目占主轴的空间
* align-self：允许项目有单独的交叉轴对齐方式
* flex:1 所有项目平分弹性盒子

## 合成函数
两个纯函数组合成一个新函数compose
* reduce可以作为一个高阶函数可以实现函数合成
* 避免函数嵌套，提高代码可读性


## 合成事件（batch）
将某些连续操作放入队列，合并执行

## AST生成代码段
* acorn：代码段生成AST
* astring：AST生成代码

## 防抖截流
* 防抖：多次触发间隔足够大时执行，绝对执行最后一次触发
* 截流：多次触发周期响应一次

## 事件委托-target
* target 事件触发节点
* currentTarget 世界捕获响应节点

## 宏任务/微任务
* 异步操作，都有回调事件
 
## 前端框架比较
### 共相同
* 都采用性能更高的虚拟Dom
* 都支持响应式和组件化
* 都主要维护核心库，将其他功能如状态管理/路由等交给配套组件完成
### 差异点
* 数据流 React是MVC单向数据流，Vue是MVVM双向数据流
* React兼容性更好，支持IE8
* React具有更加强大的社区生态/开发团队技术实力
* React对TS支持更高
* Vue的组件优化更容易，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。
* vue更接近传统的前端开发方式，模版/样式/逻辑代码结构更清晰，React主张用jsx表示一切，这赋予了React更高的灵活性，但是在某些情况下代码可读性不如Vue。
* vue中的样式设置更加灵活，scope实现起来更加简便
* Vue的指令更加丰富，使用成本更低，但是增加了学习成本
* React具备更加完善的原生渲染能力和更好的生态支持
* 两者相互借鉴，互相补充。如Mobx 实际上使用体验更接近vue，vue也可以支持jsx语法等等方面可以体现


## 常用状态码
* 200 请求成功
* 300 重定向，当客户端的请求引起了资源URI的变化时发送此状态码
* 404 请求资源不存在
* 500 服务器内部错误

## 优化首屏加载
* 将公用的JS库通过`<script>`标签进行CDN引入，减小bundleJS的体积
* 分包加载/懒加载/闲时加载/预加载
* 提供Loading界面提升用户体验
  
## 优化网站性能
* 减少HTTP请求数量
* 闲时加载
* WEBP图片压缩方案
* 优化资源加载顺序
* 减少重排性操作
* 避免DOM操作

## var const let 
* 变量提升（变量可在声明之前使用）var
* 暂时性死区（即使是全局变量，在代码块内被let/const再次声明，在二次声明前调用依然会报错）let/const
* 重复声明（同一作用域内可以重复声明）var
* 初始值（声明时就必须赋值）const
* 块级作用域（再任意{}代码块中都会形成私有作用域）let/const

## url的hash(#)
* 不刷新页面时添加浏览器历史记录

## React

### 组件控制
* 受控组件：react 通过在表单元素上绑定value值，通过 onchange处理函数 setState 的方式控制表单元素的value
* 非受控组件：表单组件自己保存value状态，react通过ref获取节点，来进行value的控制

### 无状态组件
无状态组件就是一个单纯的render函数
* 通过减少继承Component而来的生命周期函数而达到性能优化的效果。
* 因为没有shouldComponentUpdate生命周期函数，所以每次state更新，它都会重新绘制render函数。

### 高阶组件(HOC)
* 高阶组件是参数为组件，返回值为新组件的函数，是 React 中用于复用组件逻辑的一种设计模式
* 装饰器是高阶组件的一种应用方式

### ReactDiff
* 把树形结构按照层级分解，只比较同级元素。
* 通过给列表结构的每个单元添加的`Key`值进行区分同层次的子节点的比较。
* React 只匹配相同名称的`Component`
* 合并操作，调用`setState`方法的时候, React为其添加`dirty`标记，每一个循环结束React会检查所有标记`dirty`的组件进行重新绘制。
* 可以重写 shouldComponentUpdate 提高 diff 的性能
* 实际上他的diff走的是单路径（深度优先遍历）

### 异步`setState`？
1.异步原因：合并执行（只合并对象，同一个key只保留最后一次赋值），优化重新渲染机制的效率
2.具体细节：它的工作除了要更新 this.state 之外，还要负责触发重新渲染，这里面要经过 React 核心 diff 算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个 setState 呼叫有可能在执行过程中还需要被合并，所以它被设计成延时（异步表现）
3.同步表现：在setTimeout中/参数是一个function（因为定时器是宏任务/异步操作就不会触发合成事件机制）
4.每次执行都会经历四个生命周期，所以需要有一个合并操作（batch）的机制（防抖/截流），可以联想班车（等待满员/每过一刻钟发车），将需要更新的操作放入队列，合并执行
5.优化策略：主动合并/

 
### redux
1.三大原则
* 单一数据源：整个应用只存在一个store/便于同构-便于调试-实现撤销功能
* state只读：所有修改只能通过action/ 便于集中化管理-顺序执行-便于调试
* 使用纯函数进行修改：reducer接收action和state，返回新的state/便于复用

2.连接
* 通过在根元素外包裹<Provider>在任意子组件使用connect方法将store与组件建立连接(connect(mapStateToProps,mapDispatchToProps)(Home))
* Provider包在在根组件外面，所有子组件就默认都可以拿到state。它的原理是React组件的context属性
* mapStateToProps(组件props与store.state建立映射关系)：传入(state,ownProps)返回{data:state.xx}监听store（以及props）的变化，实时更新映射关系
* mapDispatchToProps（组件props与store.dispatch建立映射关系）传入函数可获取dispatch进行指定行为的action派发改变对应的store.state

### react-router
路由的意义是通过URL动态加载组件，react-router基于history的三大模式（BrowserRouter，HashRouter，createMemoryHistory）
* BrowserRouter 使用浏览器中的 History API (pathname字段)用于处理 URL，创建一个像example.com/some/path这样真实的 URL，服务器需要增加处理URL的配置
* HashRouter 用 URL 中的 hash（#）字段去创建路由
* createMemoryHistory URL  地址栏不会变动，不能通过改变URL定位页面

### react-context
实现跨层级的组件数据传递，但是官方并不推荐，试验性而且不可靠，需要进行控制

### 代码分片
组件/路由：分包加载/异步加载/按需加载

### Hooks
* [值,改变值的方法] = useState
* 生命周期（didUpdate）useEffect(()=>{}) 改变值的回调
* 生命周期（willUnMount）useEffect(func,[]) 第二参数为空数组可检测卸载组件
* 后代传值 Context = createContext()》<Context><Child /></Context>》child=()=>{const value =useContext(Context)}
* 动作派发 useReducer 可以实现多种对值处理动作的派发
* 使用后代传值&动作派发组合为HooksRedux
* 生命周期(shouldComponentUpdate) useMemo 可以为render内函数指定触发条件
* useRef 获取DOM/保存变量
* useExample 创建自定义hooks

### 工程模版优化
* Px2REM 移动端适配/提高设计稿还原度
* WebP 图片格式转换 优化资源大小/提交页面加载速度
* Tracker 埋点自动化处理/提高开发效率
* JSONP 请求的拦截，上报发送参数和接收数据/便于移动端调试
* 禁用橡皮筋 移动端适配全屏应用或不出现滚动条时禁用橡皮筋效果
* travisCI 持续集成化部署

### 生命周期

1.创建阶段
* constructor (getInitialState)
* static getDerivedStateFromProps(nextProps,prevState)(新增) 从props更新state
* componentWillMount (废除)
* render
* componentDidMount

2.运行阶段（多次运行）
* static getDerivedStateFromProps(nextProps,prevState)(新增) 从props更新state
* componentWillReceiveProps（废除）
* shouldComponentUpdate
* componentWillUpdate（废除）
* render
* getSnapshotBeforeUpdate(prevProps,prevState)(新增) 渲染之后可以获取但无法操作时
* componentDidUpDate 

3.销毁阶段
* componentWillUnmount

4.错误边界
* static getDerivedStateFromError(error)(新增) 生命周期构造时捕获错误/渲染备用组件
* componentDidCatch(error,info)(新增) 任意JS错误捕获/打印错误信息
* 无法捕获的错误：事件处理/异步操作/服务端渲染/自身异常

## Vue

### 双向绑定/响应式
Vue通过数据劫持结合发布订阅模式来实现双向绑定的。当一个Vue实例被创建时，vue会遍历data选项的属性，用Object.defineProperty将他们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。

### MVVM
MVVM包含三个部分Model、View、ViewModel。
* Model代表数据模型，定义数据和业务逻辑
* View代表视图，负责数据UI展示
* ViewModel作为中间层负责监听Model中的数据改变然后控制View的更新

## 书籍推荐

### HTML与CSS进阶指南

这本书对前端知识点的讲解深入浅出，读的时候经常有茅塞顿开的感觉。特别是刚入门的那个阶段，很多困扰和很长时间的纠结点都一扫而空，读完感觉自己就没那么菜了。

### JavaScript高级程序设计

这本书可以说是前端领域的必读书目了吧。但是我建议不要从头到位那样读，因为知识点都比较深，从头到尾看一遍会非常痛苦。可以把它当成工具书，当项目经验积累到一定程度在去看那那些拿不稳的点。

### 你不知道的JavaScript

这套书看了好久，到现在还没看完。以前经常听人说JS是一种很简单的弱类型脚本语言/玩具语言。但是读这套书的时候我觉得JS一点也不简单，而且越来越觉得JS是世界上最好的语言，集大成之作。

### 黑客与画家

这是一本非常有趣的书，里面有很多观点很奇怪，但是非常符合我的口味。例如我喜欢编程的同时也非常喜欢画画，而这本书的作者也告诉我，编程和画画没有本质上的区别。
