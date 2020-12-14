
export default[
    
    {
        path: '/menu/home',
        name: '首页',
        // component: () => import('../components/menu/home.vue')
        children:[
            {
                path:'/menus/home',
                name:'后台首页',
            },
            {
                path:'/menus/img',
                name:'相册管理',
            },
            {
                path:'/menus/goods',
                name:'商品列表',
            }
        ]
    },

    {
        path: '/menu/goods',
        name: '商品',
        children:[
            {
                path:'',
                name:'商品列表'
            },
            {
                path:'',
                name:'分类列表'
            },
            {
                path:'',
                name:'商品规格'
            },
            {
                path:'',
                name:'商品类型'
            },
            {
                path:'',
                name:'商品评论'
            },
        ]
    },

    {
        path: '/menu/order',
        name: '订单',
        children:[
            {
                path:'',
                name:'订单管理'
            },
            {
                path:'',
                name:'发票管理'
            },
            {
                path:'',
                name:'售后服务'
            }
        
        ]
    },

    {
        path: '/menu/vip',
        name: '会员',
        children:[
            {
                path:'',
                name:'会员列表'
            },
            {
                path:'',
                name:'会员等级'
            }
        
        ]
    },

    {
        path: '/menu/setting',
        name: '设置',
        children:[
            {
                path:'',
                name:'基础设置'
            },
            {
                path:'',
                name:'物流设置'
            },
            {
                path:'',
                name:'管理员管理'
            },
            {
                path:'',
                name:'交易设置'
            }
        
        ]
    }
]