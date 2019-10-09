module.exports = {
    title: 'BROWNIU NOTES',
    description: '前端开发工作笔记速查',
    base: '/note/',
    repo: 'https://browniu.github.io/note/',
    themeConfig: {
        repo: 'browniu/note',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
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
            {text: '效率', link: '/workflow/git'},
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
                'react',
                'npm',
                'exam'
            ],
        },
        lastUpdated: '最后编辑',
    }
};

