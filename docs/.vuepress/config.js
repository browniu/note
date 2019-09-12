module.exports = {
    title: 'BROWNIU NOTES',
    description: '前端开发工作笔记速查',
    base: '/note/',
    repo: 'https://browniu.github.io/note/',
    themeConfig: {
        repo: 'browniu/note',
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '查漏补缺',
        nav: [
            // { text: '检索',
            //     items: [
            //         { text: 'JavaScript', link: '/JavaScript/object' },
            //         { text: 'html', link: '/html/' },
            //         { text: 'workflow', link: '/workflow/git' },
            //     ]
            // },
            {text: '逻辑', link: '/JavaScript/object'},
            {text: '静态', link: '/html/'},
            {text: '工作流', link: '/workflow/git'},
        ],
        sidebar: {
            '/JavaScript/': [
                'object',
                'array',
                'string',
                'number',
                'event',
                'http',
                'scroll',
                'router',
                'environment',
                'canvas',
                'device',
                'fragment',
                'math',
                'storage',
                'decorater'
            ],
            '/html/': [
                '',
                'css',
                'mobile'
            ],
            '/workflow/': [
                'git',
                'react'
            ],
        },
        lastUpdated: '最后编辑',
    }
};

