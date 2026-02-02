export const machineTextConfig = {
    pageName: 'AI算力解决方案页面',
    index: {
        title: '企业级推理一体机',
        desc: '内置趋境KLLM推理引擎及AMaaS模型服务平台，搭配深度优化的硬件，提供最低成本最高性能的私有化算力设施',
        btn: '加入我们',
        bottomList: [
            {
                title: '算力门槛',
                color: '10倍',
                desc: '业界首创CPU+GPU异构推理技术，算力不捆绑GPU，灵活搭配降低大参数模型部署成本'
            },
            {
                title: '利用率',
                color: '80%',
                desc: '基于计算强度卸载MOE算子，以存换算降低重复计算，硬件资源综合利用率达80%'
            },
            {
                title: '硬件性能',
                color: '50%',
                desc: '深度的适配优化，包括NUMA亲和、算子加速，相比只兼容不优化的方案硬件性能提升50%'
            },
            {
                title: '智能运维',
                color: '80%',
                desc: '大模型服务平台，丰富的算力资源、模型可视化监控管理，相比人工节约 80% 时间成本'
            },
        ]
    },
    introduce: {
        title1: '高性价比，极致系统优化',
        title2: '10倍算力门槛降低',
        list: [
            {
                title: '异构推理',
                items: ['GPU+CPU异构推理', '算力门槛降低10倍', '让671B放到办公桌上',],
                img: "/src/assets/images/mob/mob-machine1.png"
            },
            {
                title: '以存换算',
                items: ['将推理中间结果存储在内存或磁盘', '避免重复计算，计算量降低 10倍', '用户请求延迟降低10倍',],
                img: "/src/assets/images/mob/mob-machine2.png"
            },
            {
                title: 'PD分离',
                items: ['基于算力特征搭配GPU，优化总体成本', 'P/D分离，集群并发量提升5倍', '12节点既支持万级并发',],
                img: "/src/assets/images/mob/mob-machine3.png"
            },
            {
                title: '多样场景',
                items: ['桌面级小盒子百亿模型流畅跑', '企业级服务器单4090跑千亿模型', '支持弹性扩容至大规模集群',],
                img: "/src/assets/images/mob/mob-machine4.png"
            },
        ]
    },
    amaas: {
        title: '智能化运维，大幅降低运维成本', 
        platform: 'AMaaS平台',
        list: [{
            title: '模型仓库内置数十主流模型',
            desc: '新模型发布天级更新，多模型混合推理，一键启停'
        }, {
            title: '丰富可视化的运维管理',
            desc: '各类硬件、大模型、推理引擎统一管理，资源情况图形化展示'
        }, {
            title: '智问办公辅助',
            desc: '内置智问办公辅助系统，包括AI搜索、文案复制、RAG搭建、多模型对话'
        },]
    },
    product: {
        title: '产品形态',
        buttonText: '了解详情',
        list: [
            {
                title: '灵启桌面级AI工作站',
                desc: '趋境✖️智谱联合发布，桌面级百亿参数工作站',
                btn: '了解更多',
                herf: '',
                open: 'https://item.jd.com/10209754712094.html'
            }, {
                title: '企业级推理一体机',
                desc: '软硬一体深度优化，云下享受云上体验',
                btn: '了解更多',
                herf: '/contact',
                open: ''
            }
        ]
    },
    scene: {
        title: '应用场景',
        buttonText: '立即体验',
        tabItems: [
            {
                id: 'tab1',
                label: '企业自建AI算力场景',
                desc: '在企业自建AI算力基础设施场景，性能、成本、稳定性、弹性扩缩容等能力同时重要。',
                features: ['自研全球TOP推理引擎，顶尖团队技术兜底', '软硬生态携手深度优化，最大程度发挥算力性能', '大参数门槛最低成本起步', 'PD分离，随业务增量弹性扩容']
            },
            {
                id: 'tab2',
                label: 'ISV合作场景',
                desc: '在竞争对手还困在成本、效率、效果的不可能三角时，趋境助力ISV合作伙伴打造极具市场竞争力的的AI应用！',
                features: ['价格竞争力提升', '更智能的AI应用', '客户满意度更高', '更领先的技术优势','更丰富的场景方案']
            },
            {
                id: 'tab3',
                label: '研发环境极速搭建场景',
                desc: '最低的起步门槛 —— AI·灵启小盒子由趋境科技与智谱联合发布，独家内置 FP4 精度的 106B 模型',
                features: ['内置趋境AMaaS资源管理平台', '预置数十种主流办公助手']
            },
        ]
    }
}

// 兼容旧的导出名称
export const MachinList = machineTextConfig.index
export const machinIntroduce = machineTextConfig.introduce
export const machinAmaas = machineTextConfig.amaas
export const machinProduct = machineTextConfig.product