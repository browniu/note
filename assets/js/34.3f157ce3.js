(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{208:function(e,t,a){"use strict";a.r(t);var r=a(0),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"项目经历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目经历","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目经历")]),e._v(" "),a("h2",{attrs:{id:"小游戏-决战大明宫（策略类实时对战-独立开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小游戏-决战大明宫（策略类实时对战-独立开发","aria-hidden":"true"}},[e._v("#")]),e._v(" 小游戏-决战大明宫（策略类实时对战-独立开发")]),e._v(" "),a("h3",{attrs:{id:"项目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目描述","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目描述")]),e._v(" "),a("p",[e._v("策略类实时对战小游戏。前期使用css3结合Canvas进行混合技术开发。后期内容增加后，选择使用游戏引擎cocos2D进行重构。在原生开发经验的加持下，使用游戏引擎的体验非常顺畅。")]),e._v(" "),a("h3",{attrs:{id:"项目职责"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目职责","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目职责")]),e._v(" "),a("ul",[a("li",[e._v("验证和总结出css+canvas混合开发游戏的方案")]),e._v(" "),a("li",[e._v("原生JS实现碰撞检测、手势拖拽、粒子动画、帧动画控制等游戏相关算法")]),e._v(" "),a("li",[e._v("调研游戏引擎环境，掌握Cocos2d的开发流程和优化")]),e._v(" "),a("li",[e._v("掌握通过WebSocket与服务器建立实时通信连接的技术方案")])]),e._v(" "),a("h3",{attrs:{id:"技术亮点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术亮点","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术亮点")]),e._v(" "),a("ul",[a("li",[e._v("触摸交互逻辑：返回触摸点的位置上对应的Dom节点。"),a("code",[e._v("offsetParent")]),e._v(" & "),a("code",[e._v("getBoundingClientRect")]),e._v(" & "),a("code",[e._v("ElementFromPoint")]),e._v(" 整合兼容方案")]),e._v(" "),a("li",[e._v("静态资源预加载逻辑。"),a("code",[e._v("Promise")]),e._v(" & "),a("code",[e._v("new Image()")])]),e._v(" "),a("li",[e._v("对象池。每次优先调用对象池中的元素，没有闲置对象时再创建新的元素。使用完毕的元素立即存入对象池。实现对象池的容量在满足交互峰值的前提下最小。")]),e._v(" "),a("li",[e._v("音频处理。音效的重叠播放和音频元素的内存泄露问题。")])]),e._v(" "),a("h2",{attrs:{id:"vue-router-encode编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-encode编码","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-router Encode编码")]),e._v(" "),a("h3",{attrs:{id:"项目描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目描述-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目描述")]),e._v(" "),a("ul",[a("li",[e._v("因为在使用"),a("code",[e._v("react-router-dom")]),e._v("的过程中发现在路由传参"),a("code",[e._v("测试@哈哈/进度%40")]),e._v("时，无法正确接收。因为react-router会自动对参数部分采取"),a("code",[e._v("decodeURI")]),e._v("&"),a("code",[e._v("encodeURI")]),e._v("（这个API无法对/转译），这个时候"),a("code",[e._v("/")]),e._v("后面的会被解析成路径而造成数据不完整。这时可能会想在发送参数前对其进行"),a("code",[e._v("encodeURIcomponent")]),e._v("手动编码（这个API可以对包括/在内的更多特殊字符进行转译），然后在接收时使用"),a("code",[e._v("decodeURIcomponent")]),e._v("进行手动解码，然而react-router进行的编解码是自动的（无法阻止），所以就会对参数进行多次解码，如果参数中包含类转译字段（%40），在接收参数时就会把"),a("code",[e._v("%40")]),e._v("经过两次解码解码成"),a("code",[e._v("@")]),e._v("符号。")])]),e._v(" "),a("h3",{attrs:{id:"项目职责-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目职责-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目职责")]),e._v(" "),a("ul",[a("li",[e._v("重构react-router的URI编码解码逻辑，解决参数中携带特殊符号的问题")])]),e._v(" "),a("h3",{attrs:{id:"技术亮点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术亮点-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术亮点")]),e._v(" "),a("ul",[a("li",[e._v("基于原生"),a("code",[e._v("encodeURI")]),e._v("增加了对于")])]),e._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//encode")]),e._v("\n\n")])])]),a("ul",[a("li",[e._v("经过观察vue-router源码发现其在进行URL传参时调用一个自定义的"),a("code",[e._v("encodeURIComponentPretty")]),e._v("方法。这个方法采用的方案是结合两种编码方式，优雅的解决了这个问题。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);