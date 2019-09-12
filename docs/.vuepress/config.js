module.exports = {
    title: 'BROWNIU NOTES',
    description: '前端开发工作笔记速查',
    base: '/note/',
    repo: 'https://browniu.github.io/note/',
    themeConfig: {
        nav:[
            { text: 'Start',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/object' },
                    { text: 'html', link: '/html/' },
                    { text: 'workflow', link: '/workflow/git' },
                ]
            },
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
                'storage'
            ],
            '/html/': [
                '',
                'mobile',
                'css'
            ],
            '/workflow/': [
                'git',
                'react'
            ],
        },
        lastUpdated: 'Last Updated',
    }
};

