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

## 持续集成

```json
"script":{
  "deploy": "yarn build && gh-pages -d build"
}
```

