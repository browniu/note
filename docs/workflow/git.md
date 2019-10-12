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

## [TravisCI持续集成](https://travis-ci.org/browniu/note)

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
