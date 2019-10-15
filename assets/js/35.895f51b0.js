(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{212:function(e,a,t){"use strict";t.r(a);var r=t(0),v=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"项目经历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目经历","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目经历")]),e._v(" "),t("h2",{attrs:{id:"小游戏-决战大明宫（策略类实时对战-独立开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小游戏-决战大明宫（策略类实时对战-独立开发","aria-hidden":"true"}},[e._v("#")]),e._v(" 小游戏-决战大明宫（策略类实时对战-独立开发")]),e._v(" "),t("h3",{attrs:{id:"项目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目描述","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目描述")]),e._v(" "),t("p",[e._v("策略类实时对战小游戏。前期使用css3结合Canvas进行混合技术开发。后期内容增加后，选择使用游戏引擎cocos2D进行重构。在原生开发经验的加持下，使用游戏引擎的体验非常顺畅。")]),e._v(" "),t("h3",{attrs:{id:"项目职责"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目职责","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目职责")]),e._v(" "),t("ul",[t("li",[e._v("验证和总结出css+canvas混合开发游戏的方案")]),e._v(" "),t("li",[e._v("原生JS实现碰撞检测、手势拖拽、粒子动画、帧动画控制等游戏相关算法")]),e._v(" "),t("li",[e._v("调研游戏引擎环境，掌握Cocos2d的开发流程和优化")]),e._v(" "),t("li",[e._v("掌握通过WebSocket与服务器建立实时通信连接的技术方案")])]),e._v(" "),t("h3",{attrs:{id:"技术亮点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术亮点","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术亮点")]),e._v(" "),t("ul",[t("li",[e._v("触摸交互逻辑：返回触摸点的位置上对应的Dom节点。"),t("code",[e._v("offsetParent")]),e._v(" & "),t("code",[e._v("getBoundingClientRect")]),e._v(" & "),t("code",[e._v("ElementFromPoint")]),e._v(" 整合兼容方案")]),e._v(" "),t("li",[e._v("静态资源预加载逻辑。"),t("code",[e._v("Promise")]),e._v(" & "),t("code",[e._v("new Image()")])]),e._v(" "),t("li",[e._v("对象池。每次优先调用对象池中的元素，没有闲置对象时再创建新的元素。使用完毕的元素立即存入对象池。实现对象池的容量在满足交互峰值的前提下最小。")]),e._v(" "),t("li",[e._v("音频处理。音效的重叠播放和音频元素的内存泄露问题。")])]),e._v(" "),t("h2",{attrs:{id:"vue-router-encode编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-encode编码","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-router Encode编码")]),e._v(" "),t("h3",{attrs:{id:"项目描述-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目描述-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目描述")]),e._v(" "),t("p",[e._v("因为在使用"),t("code",[e._v("react-router-dom")]),e._v("的过程中发现在路由传参包含特殊符号"),t("code",[e._v("/")]),e._v("时，无法正确接收。因为react-router会自动对参数部分采取"),t("code",[e._v("decodeURI")]),e._v("（这个API无法对/转译），这个时候"),t("code",[e._v("/")]),e._v("后面的会被解析成路径而造成数据不完整。")]),e._v(" "),t("p",[e._v("这时可能会想在发送参数前对其进行"),t("code",[e._v("encodeURIcomponent")]),e._v("手动编码（这个API可以对包括/在内的更多特殊字符进行转译），然后在接收时使用"),t("code",[e._v("decodeURIcomponent")]),e._v("进行手动解码，然而react-router进行的"),t("code",[e._v("decodeURI")]),e._v("解码是自动的（无法阻止），所以就会对参数进行多次解码，如果参数中包含类转译字段（%2F），在接收参数时就会把"),t("code",[e._v("%2F")]),e._v("经过两次解码解码成"),t("code",[e._v("/")]),e._v("符号。")]),e._v(" "),t("h3",{attrs:{id:"项目职责-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目职责-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目职责")]),e._v(" "),t("ul",[t("li",[e._v("重构react-router的URI编码解码逻辑，解决参数中携带特殊符号的问题")])]),e._v(" "),t("h3",{attrs:{id:"技术亮点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术亮点-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术亮点")]),e._v(" "),t("ul",[t("li",[e._v("基于原生"),t("code",[e._v("encodeURI")]),e._v("之上增加了对于"),t("code",[e._v("/[\\/?#]/g")]),e._v("等对URI分割有影响的字符进行手动转译成16进制编码。")]),e._v(" "),t("li",[e._v("修改基础库"),t("code",[e._v("history")]),e._v("的编码逻辑为"),t("code",[e._v("decodeURIComponent")]),e._v("逻辑")]),e._v(" "),t("li",[e._v("'在最理想的情况下，我们应该通过增加代码就能增加系统的功能，而不是修改现有的代码'。开发辅助处理插件，重写区别于"),t("code",[e._v("encodeURIComponent")]),e._v("的特殊符号编解码的逻辑")])]),e._v(" "),t("h2",{attrs:{id:"新技术落地-数字印章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新技术落地-数字印章","aria-hidden":"true"}},[e._v("#")]),e._v(" 新技术落地 数字印章")]),e._v(" "),t("h3",{attrs:{id:"项目描述-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目描述-3","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目描述")]),e._v(" "),t("p",[e._v("场景是在线下展会活动上，有一个项目是玩家到指定摊位上收集图章，集齐若干换取礼品。传统做法是在提供的DM单上，摊位工作人员通过手写签名或印章进行任务确认。")]),e._v(" "),t("p",[e._v("在移动互联网如此发达的今天，这个流程看起来笨拙又原始。为了给展会增色，提高趣味性，决定使用H5技术进行完成智能签到。最终解决方案的技术核心是多点触控。通过采集多个点位和解密算法，给用户带来更丰富的交互体验。")]),e._v(" "),t("h3",{attrs:{id:"项目职责-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目职责-3","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目职责")]),e._v(" "),t("ul",[t("li",[e._v("编写基于H5多点触控事件形成的点位进行图形解析为密码的核心算法")]),e._v(" "),t("li",[e._v("制作电子图章原型机")])]),e._v(" "),t("h3",{attrs:{id:"技术亮点-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术亮点-3","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术亮点")]),e._v(" "),t("ul",[t("li",[e._v("通过欧几里得距离得出两点间的距离")]),e._v(" "),t("li",[e._v("选择排序获取中位值")])])])}),[],!1,null,null,null);a.default=v.exports}}]);