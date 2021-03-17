module.exports = {
    home: true,
    title: 'Whitepaper',
    base: '/',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: 'Docs', link: 'https://docs.zenchain.co'}
        ],
        sidebar: [
            {
                title: 'Home',
                path:'/'
            },
            {
                title: 'Overview',
                path:'/overview',
            },
            {
                title: 'The problem',
                path:'/the_problem',
            },
            {
                title: 'ZenChain Solutions',
                collapsable: false,
                path:'/zenchain_solution',
                sidebarDepth: 3,
                children: [
                    '/zenchain_solution/scalable,_high-throughput_blockchain.md',
                    '/zenchain_solution/cross-chain_solutions.md',
                    '/zenchain_solution/decentralized_oracles.md',
                    '/zenchain_solution/defi_primitives_built-in.md',
                    '/zenchain_solution/non-fungible_token_applications.md',
                    '/zenchain_solution/NFTs_x_defi.md'
                ]
            },
            {
                title: 'Token sales and economics',
                collapsable: false,
                path:'/token_sales_and_economics',
                sidebarDepth: 3,
                children: [
                    '/token_sales_and_economics/token_allocation.md',
                    '/token_sales_and_economics/token_sales_data.md',
                    '/token_sales_and_economics/token_governance_and_use_of_funds.md',
                    '/token_sales_and_economics/zen_token_release_schedule.md',
                    '/token_sales_and_economics/zen_token_overview_and_use-cases.md'
                ]
            },
            {
                title: 'Benefits of ZenChain',
                path:'/benefits_of_zenchain',
            },
            {
                title: 'Milestones',
                path:'/milestones',
            },
        ]
    }
}
