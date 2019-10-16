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
