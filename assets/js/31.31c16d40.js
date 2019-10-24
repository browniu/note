(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{222:function(a,v,_){"use strict";_.r(v);var e=_(0),t=Object(e.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"热点速览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#热点速览","aria-hidden":"true"}},[a._v("#")]),a._v(" 热点速览")]),a._v(" "),_("h2",{attrs:{id:"原型链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[a._v("#")]),a._v(" 原型链")]),a._v(" "),_("p",[a._v("JS就是基于原型的语言。每个对象都有一个原型，对象以原型为模板、从原型继承方法和属性。原型也有自己的原型，一层一层、以此类推。这种关系常被称为\n原型链。")]),a._v(" "),_("blockquote",[_("p",[a._v("查找对象属性的路径：自身》原型》父级原型》祖父级原型》顶层原型")])]),a._v(" "),_("h2",{attrs:{id:"继承"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[a._v("#")]),a._v(" 继承")]),a._v(" "),_("h3",{attrs:{id:"原型赋值继承"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型赋值继承","aria-hidden":"true"}},[a._v("#")]),a._v(" 原型赋值继承")]),a._v(" "),_("p",[a._v("将父类的实例直接赋值给子类的原型，子实例通过原型链式查找可以继承父类的属性")]),a._v(" "),_("ul",[_("li",[a._v("缺点是继承的方向是单向的，无法向父类的方法传参/处在原型链中的所有属性都是共享可见的")])]),a._v(" "),_("h3",{attrs:{id:"构造函数继承"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构造函数继承","aria-hidden":"true"}},[a._v("#")]),a._v(" 构造函数继承")]),a._v(" "),_("p",[a._v("子类在其构造函数中用实例的this通过"),_("code",[a._v("call/apply")]),a._v("调用父类的构造函数，子实例就可以访问父类的属性")]),a._v(" "),_("ul",[_("li",[a._v("优点是1.可以一对多继承，不是链式的2.弥补了原型链继承的缺点：子实例可以向父类构造传参/父类原型属性不可见")]),a._v(" "),_("li",[a._v("缺点也是只继承父类构造函数的属性，无法继承父类原型属性")]),a._v(" "),_("li",[a._v("还有无法实现构造函数的复用/每个新的子实例都有父类构造函数的副本，数据臃肿")])]),a._v(" "),_("h3",{attrs:{id:"分离组合继承（寄生）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分离组合继承（寄生）","aria-hidden":"true"}},[a._v("#")]),a._v(" 分离组合继承（寄生）")]),a._v(" "),_("p",[a._v("构造函数属性继承和建立子类和父类原型的链接，分离就是分两步走；组合是指同时继承子类构造函数和原型中的属性")]),a._v(" "),_("ul",[_("li",[a._v("这里用到了Object.creat(obj)方法，该方法会对传入的obj对象进行浅拷贝。将父类原型复制给了子类原型。")]),a._v(" "),_("li",[a._v("优点是在子类构造函数中继承了父类的属性/子类原型和父类原型建立了连接")])]),a._v(" "),_("h3",{attrs:{id:"es6继承"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6继承","aria-hidden":"true"}},[a._v("#")]),a._v(" ES6继承")]),a._v(" "),_("p",[a._v("es6引入了class、extends、super、static实现继承")]),a._v(" "),_("h2",{attrs:{id:"跨域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨域","aria-hidden":"true"}},[a._v("#")]),a._v(" 跨域")]),a._v(" "),_("p",[a._v("域的限制：JavaScript/浏览器环境出于安全方面的考虑，不允许跨域名/端口/协议调用其他页面的对象。")]),a._v(" "),_("h3",{attrs:{id:"jsonp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[a._v("#")]),a._v(" JSONP")]),a._v(" "),_("p",[a._v("利用 "),_("code",[a._v("<script>")]),a._v(" 元素的开放策略，可以不受域的限制从其他获取 JSON 数据。")]),a._v(" "),_("ul",[_("li",[a._v("优点 步骤简单/兼容性好")]),a._v(" "),_("li",[a._v("缺点 只支持GET方式/无法返回状态码/被劫持的风险高")])]),a._v(" "),_("h3",{attrs:{id:"cors跨资源共享策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cors跨资源共享策略","aria-hidden":"true"}},[a._v("#")]),a._v(" CORS跨资源共享策略")]),a._v(" "),_("p",[a._v("服务器允许，浏览器支持即可")]),a._v(" "),_("ul",[_("li",[a._v("Access-Control-Allow-Origin：表示服务端允许的请求源，*标识任何外域，多个源 , 分隔")])]),a._v(" "),_("h3",{attrs:{id:"nginx反向代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理","aria-hidden":"true"}},[a._v("#")]),a._v(" NGINX反向代理")]),a._v(" "),_("p",[a._v("开发环境配置，且步骤稍复杂")]),a._v(" "),_("ul",[_("li",[a._v("通过nginx配置代理服务器（域名与test1相同，端口不同）做跳板机，反向代理访问test2接口，且可以修改cookie中test信息，方便当前域cookie写入，实现跨域登录。")])]),a._v(" "),_("h3",{attrs:{id:"iframe类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#iframe类","aria-hidden":"true"}},[a._v("#")]),a._v(" iframe类")]),a._v(" "),_("ul",[_("li",[a._v("location.hash 父页面通过改变"),_("code",[a._v("src")]),a._v("的"),_("code",[a._v("hash")]),a._v("值可以跨域向子页面传递数据")]),a._v(" "),_("li",[a._v("window.name 子页面设置该值后修改"),_("code",[a._v("src")]),a._v("为同源页面后可获取该值")]),a._v(" "),_("li",[a._v("postMessage 可以进行不受域限制的父子通信")])]),a._v(" "),_("h3",{attrs:{id:"webscoket"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webscoket","aria-hidden":"true"}},[a._v("#")]),a._v(" webscoket")]),a._v(" "),_("ul",[_("li",[a._v("允许跨域的双向通信协议")])]),a._v(" "),_("h2",{attrs:{id:"url编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url编码","aria-hidden":"true"}},[a._v("#")]),a._v(" URL编码")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("encodeURI")]),a._v(" 编码整条URL（!#$&'(),;=?~）不编码")]),a._v(" "),_("li",[_("code",[a._v("encodeURIComponent")]),a._v(" 编码某一段URL （!'()*-._~）不编码")])]),a._v(" "),_("h2",{attrs:{id:"闭包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 闭包")]),a._v(" "),_("p",[a._v("闭包的实质是因为函数嵌套而形成的作用域。即函数A内部有一个函数B，函数B可以访问A中的变量，B就是一个闭包。")]),a._v(" "),_("ul",[_("li",[a._v("私有变量")]),a._v(" "),_("li",[a._v("回调函数")])]),a._v(" "),_("h2",{attrs:{id:"bfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[a._v("#")]),a._v(" BFC")]),a._v(" "),_("p",[_("code",[a._v("positon:absolute/fixed")]),a._v(" / "),_("code",[a._v("display:inline-block/table")]),a._v(" / "),_("code",[a._v("float:left/right")]),a._v(" / "),_("code",[a._v("overflow!=visiblle")])]),a._v(" "),_("h2",{attrs:{id:"网页渲染的流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网页渲染的流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 网页渲染的流程")]),a._v(" "),_("ul",[_("li",[a._v("输入网址")]),a._v(" "),_("li",[a._v("DNS服务器解析IP")]),a._v(" "),_("li",[a._v("建立TCP链接")]),a._v(" "),_("li",[a._v("浏览器发送HTTP请求")]),a._v(" "),_("li",[a._v("服务器返回资源")]),a._v(" "),_("li",[a._v("浏览器载入并解析资源")]),a._v(" "),_("li",[a._v("渲染DOM-Tree/CSS-Tree/组合Render-Tree/渲染")])]),a._v(" "),_("h2",{attrs:{id:"纯函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#纯函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 纯函数")]),a._v(" "),_("p",[a._v("如果函数的调用参数完全相同，则永远返回相同的结果。它不依赖程序执行期间的函数外部的任何状态，不产生任何可观察的副作用（状态交互），便于测试和重构。")]),a._v(" "),_("h2",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp","aria-hidden":"true"}},[a._v("#")]),a._v(" TCP")]),a._v(" "),_("h3",{attrs:{id:"三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三次握手","aria-hidden":"true"}},[a._v("#")]),a._v(" 三次握手")]),a._v(" "),_("p",[a._v("客户端与服务器建立建立TCP链接时的通信协议")]),a._v(" "),_("ul",[_("li",[a._v("客户端发送"),_("code",[a._v("SYN")]),a._v("请求（能听到我说话吗？）")]),a._v(" "),_("li",[a._v("服务器收到"),_("code",[a._v("SYN")]),a._v("请求包，确认后发出自身的"),_("code",[a._v("SYN+ACK")]),a._v("请求包（听到了，你能听到我说话吗？）")]),a._v(" "),_("li",[a._v("客户端收到"),_("code",[a._v("SYN+ACK")]),a._v("请求包，确认后发出"),_("code",[a._v("ACK")]),a._v("包，进入链接状态（好的，那我们开始聊天吧）")])]),a._v(" "),_("h3",{attrs:{id:"四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手","aria-hidden":"true"}},[a._v("#")]),a._v(" 四次挥手")]),a._v(" "),_("p",[a._v("客户端与服务器断开TCP链接时的操作")]),a._v(" "),_("ul",[_("li",[a._v("客户端发送一个请求断开的包（我挂了）")]),a._v(" "),_("li",[a._v("服务端返回一个同意断开的包（好的）")]),a._v(" "),_("li",[a._v("服务端发送一个请求断开的包（我也挂了）")]),a._v(" "),_("li",[a._v("客户端发送一个确认断开的包（好的）")])]),a._v(" "),_("h2",{attrs:{id:"深拷贝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝","aria-hidden":"true"}},[a._v("#")]),a._v(" 深拷贝")]),a._v(" "),_("p",[a._v("深拷贝是指源对象和拷贝对象相互独立，其中任何一个发生变化都不会对对方产生影响。深浅拷贝最根本的区别就是是否真正获取到一个对象的复制实体，而不是引用。深拷贝在内存中新建了复制体的存储，而浅拷贝只是引用了源头的内存地址。")]),a._v(" "),_("ul",[_("li",[a._v("使用JSON "),_("code",[a._v("b=JSON.parse(JSON.sringify(a))")])]),a._v(" "),_("li",[a._v("递归遍历属性")])]),a._v(" "),_("h2",{attrs:{id:"数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据类型")]),a._v(" "),_("ul",[_("li",[a._v("基本："),_("code",[a._v("undefined")]),a._v(" "),_("code",[a._v("null")]),a._v(" "),_("code",[a._v("string")]),a._v(" "),_("code",[a._v("number")]),a._v(" "),_("code",[a._v("boolean")])]),a._v(" "),_("li",[a._v("引用："),_("code",[a._v("object")]),a._v(" "),_("code",[a._v("array")]),a._v(" "),_("code",[a._v("function")])])]),a._v(" "),_("h2",{attrs:{id:"diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#diff","aria-hidden":"true"}},[a._v("#")]),a._v(" diff")]),a._v(" "),_("ol",[_("li",[a._v("比较文本差异的算法\n"),_("ul",[_("li",[a._v("比较两个树形数据结构的差异时，传统diff算法是循环递归每一个节点，复杂度达到O(n^3)")]),a._v(" "),_("li",[a._v("三大策略：1忽略跨级操作只进行同层级比较 2拥有相同类的组件生成相似树形结构，不同类组件生成不同树形结构 3同级别子节点通过唯一id区分")])])]),a._v(" "),_("li",[a._v("比较粒度：\n"),_("ul",[_("li",[a._v("Tree: 树的每一层都会比较")]),a._v(" "),_("li",[a._v("component：同类继续比较，不同类直接替换")]),a._v(" "),_("li",[a._v("Element：完全遍历，根据ID确定要移除和新增的元素（）")]),a._v(" "),_("li",[a._v("文本类型变换直接替换不会diff")])])]),a._v(" "),_("li",[a._v("基于diff的优化：\n"),_("ul",[_("li",[a._v("减少DOM的操作，使用隐藏而不是移除")]),a._v(" "),_("li",[a._v("使用生命周期"),_("code",[a._v("shouldComponentUpdate()")]),a._v("减少不必要的更新")]),a._v(" "),_("li",[a._v("类似的结构封装成组件")]),a._v(" "),_("li",[a._v("列表元素key值最好不要设置为数组的index，因为即使元素没变但是index可能会变")])])])]),a._v(" "),_("h2",{attrs:{id:"机器学习模型建立"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#机器学习模型建立","aria-hidden":"true"}},[a._v("#")]),a._v(" 机器学习模型建立")]),a._v(" "),_("ul",[_("li",[a._v("模型就是一个带有可训练参数的函数。这个函数表达了输入和输出之间的变换关系。我们通过在数据集上训练模型来获得最佳参数。训练好的模型可以精确的\n将输入数据转换为我们想得到的输出。")]),a._v(" "),_("li",[a._v("最常见的模型是Sequential模型。Sequential模型将网络的每一层简单的叠在一起。您可以将需要的层按顺序写在一个列表里。")]),a._v(" "),_("li",[a._v("输入层规定输入数据的格式，输出层规定输出数据的格式，中间的神经网络网络层负责训练参数")])]),a._v(" "),_("h2",{attrs:{id:"内存泄露"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存泄露")]),a._v(" "),_("ul",[_("li",[a._v("Chrome的 可以进行内存占用的监控 timeline 和 profiles。")]),a._v(" "),_("li",[a._v("通过触发某些事件进行泄漏点的定位")])]),a._v(" "),_("h2",{attrs:{id:"this"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[a._v("#")]),a._v(" this")]),a._v(" "),_("p",[a._v("调用上下文（invocation context），函数的每一次调用都会包含一个"),_("code",[a._v("this")]),a._v("对象。它是指向对象的关键字。")]),a._v(" "),_("ul",[_("li",[a._v("默认绑定/普通函数调用 "),_("code",[a._v("this")]),a._v("指向全局对象（window）")]),a._v(" "),_("li",[a._v("隐式绑定/函数作为对象属性调用 "),_("code",[a._v("this")]),a._v("指向该对象")]),a._v(" "),_("li",[a._v("强制绑定/使用函数的方法"),_("code",[a._v("apply()")]),a._v("、"),_("code",[a._v("apply()")]),a._v("、"),_("code",[a._v("apply()")]),a._v("可以明确指定"),_("code",[a._v("this")]),a._v("的绑定目标")]),a._v(" "),_("li",[a._v("构造绑定/使用"),_("code",[a._v("new")]),a._v("调用构造函数创建实例，"),_("code",[a._v("this")]),a._v("指向这个实例对象")])]),a._v(" "),_("h2",{attrs:{id:"函数式编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数式编程")]),a._v(" "),_("p",[a._v("允许把函数当作一个实参或返回值，将复杂的计算分解成一些列嵌套的函数，逐层推导，不断渐进。")]),a._v(" "),_("ul",[_("li",[a._v("代码结构易读性/逻辑清晰")]),a._v(" "),_("li",[a._v("高阶函数/函数作为实参，返回一个新函数")]),a._v(" "),_("li",[a._v("柯里化/将一个完整的运算过程分解成多个函数调用 参数复用/提前判断/延迟触发")])]),a._v(" "),_("h2",{attrs:{id:"模块化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模块化","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块化")]),a._v(" "),_("p",[a._v("高内聚-低耦合\n不同功能模块之间的依赖关系应该简单清晰，也就是保持模块之间的低耦合性；一个模块应该把自己的功能封装好，让外界不要太依赖于自己内部的状态，这样不会因为内部的变化而影响外部模块的功能，也就是高内聚性")]),a._v(" "),_("h2",{attrs:{id:"promise"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[a._v("#")]),a._v(" Promise")]),a._v(" "),_("p",[a._v("为了解决异步编程时出现回调多层嵌套的问题。提高代码的可读性和可维护性。")]),a._v(" "),_("ul",[_("li",[a._v("原理：Promise也还是使用回调函数，只不过是把回调封装在了内部，我们使用上一直通过then方法的链式调用，使得多层的回调嵌套看起来变成了同一层的，书写上以及理解上会更直观和简洁一些。")]),a._v(" "),_("li",[a._v("三个状态 "),_("code",[a._v("pending")]),a._v(" "),_("code",[a._v("resolved")]),a._v(" "),_("code",[a._v("rejected")])]),a._v(" "),_("li",[a._v("参数是一个函数，函数的两个参数是两个函数 "),_("code",[a._v("resolve")]),a._v(" "),_("code",[a._v("reject")]),a._v(" 用与状态转换")]),a._v(" "),_("li",[a._v("实例方法"),_("code",[a._v("then")]),a._v(" 可以进行链式调用，获取上一步返回的结果")]),a._v(" "),_("li",[a._v("实例方法"),_("code",[a._v("reject")]),a._v(" 可以捕获"),_("code",[a._v("then")]),a._v("中的异常")]),a._v(" "),_("li",[_("code",[a._v("Promise.all")]),a._v(" 用于封装多个Promise对象")])]),a._v(" "),_("h2",{attrs:{id:"async-await"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#async-await","aria-hidden":"true"}},[a._v("#")]),a._v(" async/await")]),a._v(" "),_("p",[a._v("ES7提出的关于异步操作的终极方案。相较于其他异步方案 "),_("code",[a._v("async")]),a._v(" 流程清晰，直观、语义更加明显。它使得操作异步操作流程就如同操作同步流程。同时 async 函数自带执行器，执行的时候无需手动加载。")]),a._v(" "),_("ul",[_("li",[a._v("返回一个"),_("code",[a._v("Promise")]),a._v("对象")]),a._v(" "),_("li",[_("code",[a._v("async")]),a._v(" 会等待所有的"),_("code",[a._v("await")]),a._v("执行完"),_("code",[a._v("Promise")])]),a._v(" "),_("li",[a._v("其中一个"),_("code",[a._v("await")]),a._v(" 抛异常会中断后续操作，可以通过"),_("code",[a._v("try/catch")]),a._v("解决")])]),a._v(" "),_("h2",{attrs:{id:"web安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web安全","aria-hidden":"true"}},[a._v("#")]),a._v(" web安全")]),a._v(" "),_("ul",[_("li",[a._v("XSS漏洞：跨站脚本攻击/注入恶意可执行脚本-不要直接从DOM直接获取数据/不要使用可解析字符串脚本的方法/做escape转译编码")]),a._v(" "),_("li",[a._v("CSRF：跨站请求攻击/身份模拟发送服务器请求-正确使用GET/POST请求/非GET请求中携带token")]),a._v(" "),_("li",[a._v("SQL注入：服务器未过滤用户输入，执行了攻击者发送的SQL查询代码")])]),a._v(" "),_("h2",{attrs:{id:"es6典型的新特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6典型的新特性","aria-hidden":"true"}},[a._v("#")]),a._v(" ES6典型的新特性")]),a._v(" "),_("ul",[_("li",[a._v("ES6其实包含ES2015/ES2016/ES2017/ES2018等")]),a._v(" "),_("li",[a._v("let和const/模版字符串/箭头函数/symbol/Set/Map类型/for of 遍历/Promise/Async/Class/解构赋值/展开运算符等")])]),a._v(" "),_("h2",{attrs:{id:"事件模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件模型","aria-hidden":"true"}},[a._v("#")]),a._v(" 事件模型")]),a._v(" "),_("ul",[_("li",[a._v("DOM0级模型：事件不会传播，没有事件流")]),a._v(" "),_("li",[a._v("DOM2级模型：捕获阶段-自上而下/冒泡阶段-自下而上/处理阶段-到达目标元素的监听函数")])]),a._v(" "),_("h2",{attrs:{id:"浏览器兼容性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性","aria-hidden":"true"}},[a._v("#")]),a._v(" 浏览器兼容性")]),a._v(" "),_("ul",[_("li",[a._v("样式兼容性 默认状态-clear.css/CSS3属性-前缀")]),a._v(" "),_("li",[a._v("交互兼容性 事件监听-封装函数/滚动高度")]),a._v(" "),_("li",[a._v("浏览器hack 判断浏览器类型的一些方法")])]),a._v(" "),_("h2",{attrs:{id:"ajax-异步请求数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ajax-异步请求数据","aria-hidden":"true"}},[a._v("#")]),a._v(" AJAX 异步请求数据")]),a._v(" "),_("ul",[_("li",[a._v("不刷新页面的情况下，Ajax通过异步请求加载后台数据，并在页面上渲染。")]),a._v(" "),_("li",[a._v("使用核心对象 "),_("code",[a._v("XMLHttpRequest")]),a._v("的 "),_("code",[a._v("open")]),a._v(" 'send'方法建立请求")]),a._v(" "),_("li",[_("code",[a._v("responseXML")]),a._v("& "),_("code",[a._v("responseText")]),a._v(" 响应请求结果")]),a._v(" "),_("li",[a._v("使用"),_("code",[a._v("Fetch")]),a._v("替换：逻辑清晰/基于Promise 支持async-await")])]),a._v(" "),_("h2",{attrs:{id:"垂直居中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中","aria-hidden":"true"}},[a._v("#")]),a._v(" 垂直居中")]),a._v(" "),_("ul",[_("li",[a._v("line-height = height")]),a._v(" "),_("li",[a._v("display: inline-block & vertical-align: middle & ::after并列一个高度100%的伪元素")]),a._v(" "),_("li",[a._v("display:table-cell;vertical-align:middle;")]),a._v(" "),_("li",[a._v("display: flex;align-items: center;")]),a._v(" "),_("li",[a._v("transform & top")]),a._v(" "),_("li",[a._v("padding:15px 0")])]),a._v(" "),_("h2",{attrs:{id:"浏览器的构成部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的构成部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 浏览器的构成部分")]),a._v(" "),_("ul",[_("li",[a._v("用户界面：地址栏/前后按钮/书签目录等")]),a._v(" "),_("li",[a._v("浏览器引擎：查询/操作渲染引擎接口")]),a._v(" "),_("li",[a._v("渲染引擎：现实请求的内容/解析html和css")]),a._v(" "),_("li",[a._v("网络：完成网络调用")]),a._v(" "),_("li",[a._v("JS解释器：执行JS代码")]),a._v(" "),_("li",[a._v("数据存储")])]),a._v(" "),_("h2",{attrs:{id:"rem布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rem布局","aria-hidden":"true"}},[a._v("#")]),a._v(" REM布局")]),a._v(" "),_("ul",[_("li",[a._v("设置html元素的font-size和\b屏幕宽度成正比 rem单位所代表的实际尺寸就和屏幕宽度成正比")]),a._v(" "),_("li",[a._v("像素尺寸与设备尺寸并不是1：1的对应关系，而是取决于像素密度。比如设备尺寸同为350，有的是三倍屏，像素尺寸就是1125,两倍屏就是750,使用REM布局\n可以使我们只需要按照设计稿写页面，页面在其他设备尺寸上可以自适应的缩放显示，保持高度的设计稿还原。")]),a._v(" "),_("li",[a._v("正比可以通过媒介查询/JS定义/vw来实现")]),a._v(" "),_("li",[a._v("优点是灵活/还原度高")]),a._v(" "),_("li",[a._v("JS与CSS具有一定的耦合性/不适合多端适配项目")])]),a._v(" "),_("h2",{attrs:{id:"适配方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适配方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 适配方案")]),a._v(" "),_("ul",[_("li",[a._v("百分比布局-计算困难")]),a._v(" "),_("li",[a._v("媒介查询-多套样式-繁琐")]),a._v(" "),_("li",[a._v("rem布局-灵活")]),a._v(" "),_("li",[a._v("vw/vh-兼容性问题")])]),a._v(" "),_("h2",{attrs:{id:"cdn-内容分发网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn-内容分发网络","aria-hidden":"true"}},[a._v("#")]),a._v(" CDN-内容分发网络")]),a._v(" "),_("ul",[_("li",[a._v("是节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络")]),a._v(" "),_("li",[a._v("实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上")]),a._v(" "),_("li",[a._v("尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定")])]),a._v(" "),_("h2",{attrs:{id:"gzip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gzip","aria-hidden":"true"}},[a._v("#")]),a._v(" Gzip")]),a._v(" "),_("ul",[_("li",[a._v("HTTP协议上的gzip编码是一种用来改进web应用程序性能的编码协议")]),a._v(" "),_("li",[a._v("压缩比率在3到10倍左右，可以大大节省服务器的网络带宽")])]),a._v(" "),_("h2",{attrs:{id:"阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#阻塞","aria-hidden":"true"}},[a._v("#")]),a._v(" 阻塞")]),a._v(" "),_("ul",[_("li",[a._v("css不阻塞js阻塞，因为js可能会改变dom结构")])]),a._v(" "),_("h2",{attrs:{id:"webp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webp","aria-hidden":"true"}},[a._v("#")]),a._v(" webp")]),a._v(" "),_("ul",[_("li",[a._v("webpack 编译css生成两条background图片引用，由index.html头部的判断函数结果决定是否给body打上webp class，通过class确定调用那种类型的图片/img元素使用封装的img组件，在组件内判断src的值调用那种图片")])]),a._v(" "),_("h2",{attrs:{id:"前端框架比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端框架比较","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端框架比较")]),a._v(" "),_("h3",{attrs:{id:"共相同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#共相同","aria-hidden":"true"}},[a._v("#")]),a._v(" 共相同")]),a._v(" "),_("ul",[_("li",[a._v("都采用性能更高的虚拟Dom")]),a._v(" "),_("li",[a._v("都支持响应式和组件化")]),a._v(" "),_("li",[a._v("都主要维护核心库，将其他功能如状态管理/路由等交给配套组件完成")])]),a._v(" "),_("h3",{attrs:{id:"差异点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#差异点","aria-hidden":"true"}},[a._v("#")]),a._v(" 差异点")]),a._v(" "),_("ul",[_("li",[a._v("数据流 React是MVC单向数据流，Vue是MVVM双向数据流")]),a._v(" "),_("li",[a._v("React兼容性更好，支持IE8")]),a._v(" "),_("li",[a._v("React具有更加强大的社区生态")]),a._v(" "),_("li",[a._v("React对TS支持更高")]),a._v(" "),_("li",[a._v("Vue的组件优化更容易，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。")]),a._v(" "),_("li",[a._v("vue更接近传统的前端开发方式，模版/样式/逻辑代码结构更清晰，React主张用jsx表示一切，这赋予了React更高的灵活性，但是在某些情况下代码可读性不如Vue。")]),a._v(" "),_("li",[a._v("vue中的样式设置更加灵活，scope实现起来更加简便")]),a._v(" "),_("li",[a._v("Vue的指令更加丰富，使用成本更低，但是增加了学习成本")]),a._v(" "),_("li",[a._v("React具备更加完善的原生渲染能力和更好的生态支持")]),a._v(" "),_("li",[a._v("两者相互借鉴，互相补充。如Mobx 实际上使用体验更接近vue，vue也可以支持jsx语法等等方面可以体现")])]),a._v(" "),_("h2",{attrs:{id:"常用状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用状态码","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用状态码")]),a._v(" "),_("ul",[_("li",[a._v("200 请求成功")]),a._v(" "),_("li",[a._v("300 重定向，当客户端的请求引起了资源URI的变化时发送此状态码")]),a._v(" "),_("li",[a._v("404 请求资源不存在")]),a._v(" "),_("li",[a._v("500 服务器内部错误")])]),a._v(" "),_("h2",{attrs:{id:"优化首屏加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化首屏加载","aria-hidden":"true"}},[a._v("#")]),a._v(" 优化首屏加载")]),a._v(" "),_("ul",[_("li",[a._v("将公用的JS库通过"),_("code",[a._v("<script>")]),a._v("标签进行CDN引入，减小bundleJS的体积")]),a._v(" "),_("li",[a._v("分包加载/懒加载/闲时加载/预加载")]),a._v(" "),_("li",[a._v("提供Loading界面提升用户体验")])]),a._v(" "),_("h2",{attrs:{id:"优化网站性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化网站性能","aria-hidden":"true"}},[a._v("#")]),a._v(" 优化网站性能")]),a._v(" "),_("ul",[_("li",[a._v("减少HTTP请求数量")]),a._v(" "),_("li",[a._v("闲时加载")]),a._v(" "),_("li",[a._v("WEBP图片压缩方案")]),a._v(" "),_("li",[a._v("优化资源加载顺序")]),a._v(" "),_("li",[a._v("减少重排性操作")]),a._v(" "),_("li",[a._v("避免DOM操作")])]),a._v(" "),_("h2",{attrs:{id:"react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react","aria-hidden":"true"}},[a._v("#")]),a._v(" React")]),a._v(" "),_("h3",{attrs:{id:"组件控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件控制","aria-hidden":"true"}},[a._v("#")]),a._v(" 组件控制")]),a._v(" "),_("ul",[_("li",[a._v("受控组件：react 通过在表单元素上绑定value值，通过 onchange处理函数 setState 的方式控制表单元素的value")]),a._v(" "),_("li",[a._v("非受控组件：表单组件自己保存value状态，react通过ref获取节点，来进行value的控制")])]),a._v(" "),_("h3",{attrs:{id:"无状态组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无状态组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 无状态组件")]),a._v(" "),_("p",[a._v("无状态组件就是一个单纯的render函数")]),a._v(" "),_("ul",[_("li",[a._v("通过减少继承Component而来的生命周期函数而达到性能优化的效果。")]),a._v(" "),_("li",[a._v("因为没有shouldComponentUpdate生命周期函数，所以每次state更新，它都会重新绘制render函数。")])]),a._v(" "),_("h3",{attrs:{id:"高阶组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 高阶组件")]),a._v(" "),_("ul",[_("li",[a._v("高阶组件是参数为组件，返回值为新组件的函数，是 React 中用于复用组件逻辑的一种设计模式")]),a._v(" "),_("li",[a._v("装饰器是高阶组件的一种应用方式")])]),a._v(" "),_("h3",{attrs:{id:"reactdiff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reactdiff","aria-hidden":"true"}},[a._v("#")]),a._v(" ReactDiff")]),a._v(" "),_("ul",[_("li",[a._v("把树形结构按照层级分解，只比较同级元素。")]),a._v(" "),_("li",[a._v("通过给列表结构的每个单元添加的"),_("code",[a._v("Key")]),a._v("值进行区分同层次的子节点的比较。")]),a._v(" "),_("li",[a._v("React 只匹配相同名称的"),_("code",[a._v("Component")])]),a._v(" "),_("li",[a._v("合并操作，调用"),_("code",[a._v("setState")]),a._v("方法的时候, React为其添加"),_("code",[a._v("dirty")]),a._v("标记，每一个循环结束React会检查所有标记"),_("code",[a._v("dirty")]),a._v("的组件进行重新绘制。")]),a._v(" "),_("li",[a._v("可以重写 shouldComponentUpdate 提高 diff 的性能。")])]),a._v(" "),_("h3",{attrs:{id:"异步setstate"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步setstate","aria-hidden":"true"}},[a._v("#")]),a._v(" 异步"),_("code",[a._v("setState")])]),a._v(" "),_("p",[a._v("1.异步原因：合并执行，优化重新渲染机制的效率\n2.具体细节：它的工作除了要更新 this.state 之外，还要负责触发重新渲染，这里面要经过 React 核心 diff 算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个 setState 呼叫有可能在执行过程中还需要被合并，所以它被设计成延时（异步表现）\n3.同步表现：在setTimeout中/参数是一个function")]),a._v(" "),_("h3",{attrs:{id:"工程模版优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工程模版优化","aria-hidden":"true"}},[a._v("#")]),a._v(" 工程模版优化")]),a._v(" "),_("ul",[_("li",[a._v("Px2REM 移动端适配/提高设计稿还原度")]),a._v(" "),_("li",[a._v("WebP 图片格式转换 优化资源大小/提交页面加载速度")]),a._v(" "),_("li",[a._v("Tracker 埋点自动化处理/提高开发效率")]),a._v(" "),_("li",[a._v("JSONP 请求的拦截，上报发送参数和接收数据/便于移动端调试")]),a._v(" "),_("li",[a._v("禁用橡皮筋 移动端适配全屏应用或不出现滚动条时禁用橡皮筋效果")]),a._v(" "),_("li",[a._v("travisCI 持续集成化部署")])]),a._v(" "),_("h2",{attrs:{id:"vue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[a._v("#")]),a._v(" Vue")]),a._v(" "),_("h3",{attrs:{id:"双向绑定-响应式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定-响应式","aria-hidden":"true"}},[a._v("#")]),a._v(" 双向绑定/响应式")]),a._v(" "),_("p",[a._v("Vue通过数据劫持结合发布订阅模式来实现双向绑定的。当一个Vue实例被创建时，vue会遍历data选项的属性，用Object.defineProperty将他们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。")]),a._v(" "),_("h3",{attrs:{id:"mvvm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[a._v("#")]),a._v(" MVVM")]),a._v(" "),_("p",[a._v("MVVM包含三个部分Model、View、ViewModel。")]),a._v(" "),_("ul",[_("li",[a._v("Model代表数据模型，定义数据和业务逻辑")]),a._v(" "),_("li",[a._v("View代表视图，负责数据UI展示")]),a._v(" "),_("li",[a._v("ViewModel作为中间层负责监听Model中的数据改变然后控制View的更新")])]),a._v(" "),_("h2",{attrs:{id:"书籍推荐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#书籍推荐","aria-hidden":"true"}},[a._v("#")]),a._v(" 书籍推荐")]),a._v(" "),_("h3",{attrs:{id:"html与css进阶指南"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html与css进阶指南","aria-hidden":"true"}},[a._v("#")]),a._v(" HTML与CSS进阶指南")]),a._v(" "),_("p",[a._v("这本书对前端知识点的讲解深入浅出，读的时候经常有茅塞顿开的感觉。特别是刚入门的那个阶段，很多困扰和很长时间的纠结点都一扫而空，读完感觉自己就没那么菜了。")]),a._v(" "),_("h3",{attrs:{id:"javascript高级程序设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#javascript高级程序设计","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript高级程序设计")]),a._v(" "),_("p",[a._v("这本书可以说是前端领域的必读书目了吧。但是我建议不要从头到位那样读，因为知识点都比较深，从头到尾看一遍会非常痛苦。可以把它当成工具书，当项目经验积累到一定程度在去看那那些拿不稳的点。")]),a._v(" "),_("h3",{attrs:{id:"你不知道的javascript"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你不知道的javascript","aria-hidden":"true"}},[a._v("#")]),a._v(" 你不知道的JavaScript")]),a._v(" "),_("p",[a._v("这套书看了好久，到现在还没看完。以前经常听人说JS是一种很简单的弱类型脚本语言/玩具语言。但是读这套书的时候我觉得JS一点也不简单，而且越来越觉得JS是世界上最好的语言，集大成之作。")]),a._v(" "),_("h3",{attrs:{id:"黑客与画家"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#黑客与画家","aria-hidden":"true"}},[a._v("#")]),a._v(" 黑客与画家")]),a._v(" "),_("p",[a._v("这是一本非常有趣的书，里面有很多观点很奇怪，但是非常符合我的口味。例如我喜欢编程的同时也非常喜欢画画，而这本书的作者也告诉我，编程和画画没有本质上的区别。")])])}),[],!1,null,null,null);v.default=t.exports}}]);