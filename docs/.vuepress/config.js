module.exports = {
    title: 'BROWNIU NOTES',
    description: '布朗牛的工作笔记速查',
    base: '/note/',
    repo: 'https://browniu.github.io/note/',
    themeConfig: {
        nav:[
            { text: '检索',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'html', link: '/html/' }
                ]
            },
        ],
        sidebar: {
            '/JavaScript/': [
                '',
                'array'
            ],
            '/html/': [
                '',
                'mobile'
            ],


        }
    }
};