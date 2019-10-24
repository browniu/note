(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{223:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("h2",{attrs:{id:"一键提交-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一键提交-commit","aria-hidden":"true"}},[t._v("#")]),t._v(" 一键提交 Commit")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push \n")])])]),s("h2",{attrs:{id:"放弃更改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#放弃更改","aria-hidden":"true"}},[t._v("#")]),t._v(" 放弃更改")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"ignore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignore","aria-hidden":"true"}},[t._v("#")]),t._v(" ignore")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dependencies")]),t._v("\nnode_modules\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# builds")]),t._v("\nbuild\ndist\ntemp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# misc")]),t._v("\n.DS_Store\n.idea\n")])])]),s("h2",{attrs:{id:"travisci-持续集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travisci-持续集成","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/browniu/note",target:"_blank",rel:"noopener noreferrer"}},[t._v("TravisCI 持续集成"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#.travis.yml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn install\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn build\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n\n")])])]),s("h2",{attrs:{id:"gh-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gh-page","aria-hidden":"true"}},[t._v("#")]),t._v(" gh-page")]),t._v(" "),s("p",[t._v("部署GitHub Page 时需要关闭多仓库同步")]),t._v(" "),s("h3",{attrs:{id:"发布到指定仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布到指定仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 发布到指定仓库")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("# dependencies\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ghpages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gh-pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nghpages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gh-pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  repo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/browniu/example.git'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发布完成'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"readme模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readme模版","aria-hidden":"true"}},[t._v("#")]),t._v(" README模版")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" browniu-app")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" 标准配置应用模版\n\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("![NPM")]),t._v("](https://img.shields.io/npm/v/browniu-app.svg)")]),t._v("](https://www.npmjs.com/package/react-autocomplete) "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("![JavaScript Style Guide")]),t._v("](https://img.shields.io/badge/code_style-standard-brightgreen.svg)")]),t._v("](https://standardjs.com)\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Demo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("demo")]),t._v("](./static/logo.svg)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Usage")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Props")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token table"}},[s("span",{pre:!0,attrs:{class:"token table-header-row"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" Prop      ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" Detail                                         ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" Default              ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token table-line"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---------")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("----------------------------------------------")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("--------------------")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token table-data-rows"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Update")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 0.0.1 20191020")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 初始化\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" License")]),t._v("\n\nMIT © "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("browniu")]),t._v("](https://github.com/browniu)")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);