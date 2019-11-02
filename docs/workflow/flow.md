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


