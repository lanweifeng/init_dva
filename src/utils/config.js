const menuGlobal = [
    {
        id:'aaa',
        pid:'0',
        name:'aaa页',
        icon:'user',
        path:'/aaa',
        models:() => [import('../pages/aaa/model')],
        component: () => import('../pages/aaa/AAA')
    },
    {
        id:'bbb',
        pid:'0',
        name:'bbb页',
        icon:'user',
        path:'/bbb',
        models:() => [import('../pages/bbb/model')],
        component: () => import('../pages/bbb/BBB')
    },
    {
        id:'ccc',
        pid:'0',
        name:'ccc页',
        icon:'user',
        path:'/ccc',
        models:() => [import('../pages/ccc/model')],
        component: () => import('../pages/ccc/CCC')
    },
]

export default {
    menuGlobal
}