# Git

## 一键提交 Commit
```bash
git add . && git commit -m '+' && git push 
```

## 放弃更改
```bash
git checkout .
```

## ignore
```git
# dependencies
node_modules

# builds
build
dist
temp

# misc
.DS_Store
.idea
```

## [TravisCI 持续集成](https://travis-ci.org/browniu/note)

```yml
#.travis.yml

language: node_js
node_js:
  - lts/*

cache: yarn

install:
  - yarn install

script:
  - yarn build

deploy:
  provider: pages
  skip-cleanup: true
  local_dir: docs/.vuepress/dist
  github-token: $GITHUB_TOKEN
  keep-history: true

on:
  branch: master

```

## gh-page
部署GitHub Page 时需要关闭多仓库同步

### 发布到指定仓库
```javascript
# dependencies
const ghpages = require('gh-pages')

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/browniu/example.git'
}, () => console.log('发布完成'))
```

## README模版
```md
# browniu-app

> 标准配置应用模版

[![NPM](https://img.shields.io/npm/v/browniu-app.svg)](https://www.npmjs.com/package/react-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
![demo](./static/logo.svg)

## Usage


## Props

| Prop      | Detail                                         | Default              |
| --------- | ---------------------------------------------- | -------------------- |
|   |  |    |
|   |  |    |

## Update
### 0.0.1 20191020
* 初始化

## License

MIT © [browniu](https://github.com/browniu)

```
