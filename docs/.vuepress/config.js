module.exports = {
    title: 'BROWNIU NOTES',
    description: 'BROWNIU 的工作笔记',
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