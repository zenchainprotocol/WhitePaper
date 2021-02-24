module.exports = {
    home: true,
    title: 'Democracia. Manual de uso web',
    base: '/',
    themeConfig: {
        nav: [
            {text: 'Democracia', link: 'https://democracia.com.es'}
        ],
        sidebar: [
            {
                title: 'Contenido',
                collapsable: false,
                children: [
                '/',
                'front-page',
                ]
            },
        ]
    }
}