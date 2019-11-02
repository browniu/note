# 工作流

## Yeoman

### Generator 生成器定义

```bash
yarn add -D yeoman-generator
```

```bash
# 模版文件位置
mkdir app/templates
```

```JavaScript
// generators/app/index.js 主程序
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: '请输入项目名称',
                default: this.appname
            }
        ]).then(answers => this.answers = answers)
    }

    writing() {
        const templates = [
            'README.md',
            'package.json',
            '.gitignore',
            'static/logo.svg',
            'public/index.html',
            'public/favicon.ico',
        ];
        templates.forEach(e => {
            console.log(e);
            this.fs.copyTpl(this.templatePath(e), this.destinationPath(e), this.answers)
        })

    }
};
```

## Plop

### 配置

```bash
yarn add -D plop
```
```bash
yarn plop component
```

### 主程序

```JavaScript
// plopfile.js
module.exports = plop => {
    plop.setGenerator('component', {
        description: '创建一个组件',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '请输入组件名称',
                default: 'Component'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/index.js',
                templateFile: 'plop_templates/component/component.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/styles.module.less',
                templateFile: 'plop_templates/component/styles.module.less'
            },
        ]
    })
}
```

### 模版文件
```bash
mkdir plop_tempaltes/component
touch index.js/index.hbs
touch styles.less
```

## 文件生成脚手架

### 配置
```bash
touch cli.js
chmod 755 cli.js
```

### 主程序
```JavaScript
// cli.js
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')
// 交互询问
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: '你叫啥啊？',
        default: 'browniu'
    },
    {
        type: 'input',
        name: 'sex',
        message: '你是男是女？',
        default: 'boy'
    }
]).then(answer => { // 询问结果
    const templateDir = path.join(__dirname, 'templates')
    const destDir = path.join(process.cwd(), 'dist')
    // 读取模版文件目录
    fs.readdir(templateDir, (err, files) => {
        if (err) throw err
        files.forEach(file => {
            // 渲染模版文件
            ejs.renderFile(path.join(templateDir, file), answer, (err, result) => {
                if (err) throw err
                // 写入文件
                fs.writeFileSync(path.join(destDir, file), result)
            })
        })
    })
})
```

