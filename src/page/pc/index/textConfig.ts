import tab1 from '@/assets/images/img/index_tab1.webp'
import tab2 from '@/assets/images/img/index_tab2.webp'
import tab3 from '@/assets/images/img/index_tab3.webp'
import tab4 from '@/assets/images/img/index_tab4.webp'
import tab5 from '@/assets/images/img/index_tab5.webp'
import tab6 from '@/assets/images/img/index_tab6.webp'

export const menuHrefListDefault = [
    {
        title: 'Token Service',
        href: 'kllm',
        isSelected: false,
        comingSoon: true
    },
    {
        title: 'Token System',
        href: 'amaas',
        isSelected: true,
        subItems: [
            { title: 'KLLM-企业级高效能推理引擎', href: 'kllm' },
            { title: 'AMaaS-模型价值即服务平台', href: 'amaas' },
            { title: 'ATaaS-Token价值即服务平台', href: '' }
        ]
    },
    {
        title: 'Token Machine',
        href: 'machine',
        isSelected: false
    },
    {
        title: 'AI Studio',
        href: 'studio',
        isSelected: false
    },
    {
        title: '开源社区',
        href: 'pageTechnology',
        isSelected: true,
        subItems: [
            { title: 'KTransformers', href: 'https://ktransformers.net/zh', logo: '/src/assets/images/img/logo_ktransformers.png', logoWidth: 150 },
            { title: 'Mooncake', href: 'mooncake', logo: '/src/assets/images/img/logo_mooncake.png', logoWidth: 130, logoOffset: -8 }
        ]
    },
    {
        title: '解决方案',
        href: 'solution',
        isSelected: false
    },
    {
        title: '模型仓库',
        href: 'models',
        isSelected: false
    },
    {
        title: '生态合作',
        href: 'cooperate',
        isSelected: false
    },
    {
        title: '趋境资讯',
        href: 'information',
        isSelected: false
    },
    {
        title: '关于我们',
        href: 'about',
        isSelected: true,
        subItems: [
            { title: '企业介绍', href: 'introduction' },
            { title: '联系我们', href: 'contact' },
        ]
    },
]
export const mobMenuHrefListDefault = [
    {
        title: '产品介绍',
        href: '/',
        isSelected: true,
        subItems: [
            // { title: 'AI Studio 便携工作站', href: '/studio' },
            { title: '大模型推理一体机', href: '/machine' },
            // { title: 'KLLM 推理引擎', href: '/kllm' }, 
            { title: 'AMaaS 平台', href: '/amaas' },
            // { title: 'MVaaS 平台', href: 'mvaas' },
        ]
    },
    // {
    //     title: '开源社区',
    //     href: '',
    //     isSelected: true,
    //     subItems: [
    //         // { title: 'KTransformers', href: 'ktransformers' },
    //         { title: 'Mooncake', href: '/mooncake' }
    //     ]
    // },
    // {
    //     title: '解决方案',
    //     href: 'solution',
    //     isSelected: false
    // },
    // {
    //     title: '生态合作',
    //     href: '/cooperate',
    //     isSelected: false
    // },
    {
        title: '趋境资讯',
        href: '/information',
        isSelected: false
    },
    {
        title: '关于我们',
        href: 'about',
        isSelected: true,
        subItems: [
            { title: '企业介绍', href: '/introduction' },
            { title: '联系我们', href: '/contact' }
        ]
    },
]

export const indexPageList = [
    {
        title: '全栈智算引擎·普惠',
        color: '高效AI',
        desc: '为企业级用户的 AI 落地提供从算力破局到价值交付的全链路解决方案',
        ask: '立即咨询',
        list: [
            { item: '10倍', desc: ['顶尖模型', '门槛降低'] },
            { item: '150%', desc: ['模型推理', '性能提升'] },
            { item: '小时级', desc: ['开箱插电', '应用上线'] },
            { item: '80%', desc: ['算力资源', '利用力达'] },
            { item: '80%', desc: ['AI应用Task', '成本降低'] },
        ]
    },

]

export const bannerList = [
    {
        title: ['趋境科技受邀参与 AIGC 开发者大会', '获评”AI行业最具影响力企业Top10”'],
        ask: '了解详情',
        link: 'https://mp.weixin.qq.com/s/HiO8FzBI6vWv5BdxNnVPNw'
    },
    {
        title: ['KTransformers 与 Mooncake 入选', '2025 清华最受师生关注十大亮点成果'],
        ask: '了解详情',
        link: 'https://mp.weixin.qq.com/s/RTfcAeq2__NgrPsjEY7YSg'
    }
]

// 首页 Hero 区域 - 左侧轮播内容
export const heroSlides = [
    {
        tag: '我们的愿景',
        title: '让算力更高效，让智能更普惠',
        desc: '趋境科技：全球领先的高效能 AI Token 生产服务商',
        btnText: '',
        btnLink: '',
        btnType: 'primary' as const,
    },
    {
        tag: 'AIGC 开发者大会',
        title: '趋境科技获评”AI行业最具影响力企业Top10”',
        desc: '受邀参与 AIGC 开发者大会，展示全栈推理引擎技术与行业解决方案',
        btnText: '了解详情',
        btnLink: 'https://mp.weixin.qq.com/s/HiO8FzBI6vWv5BdxNnVPNw',
        btnType: 'default' as const,
    },
    {
        tag: '清华十大亮点成果',
        title: 'KTransformers 与 Mooncake 入选清华十大亮点成果',
        desc: '两大开源项目同时入选 2025 清华最受师生关注十大亮点成果',
        btnText: '了解详情',
        btnLink: 'https://mp.weixin.qq.com/s/RTfcAeq2__NgrPsjEY7YSg',
        btnType: 'default' as const,
    },
]

// 首页 Hero 区域 - 右侧资讯卡片（火山引擎排版：左标题+标签，右方图）
export const heroCards = [
    {
        title: '为用户提供日均万亿级的高效能Token服务',
        tag: '产品发布',
        image: '/src/assets/images/img/hero_card1.png',
        imageLabel: 'Token\nService',
        link: 'https://mp.weixin.qq.com/s/2Ly_0FuReh03pYg7h91NjQ',
    },
    {
        title: 'ATaaS、AMaaS及KLLM引擎分层提升Token产能',
        tag: '产品发布',
        image: '/src/assets/images/img/hero_card2.png',
        imageLabel: 'Token\nSystem',
        link: 'https://mp.weixin.qq.com/s/2Ly_0FuReh03pYg7h91NjQ',
    },
    {
        title: '从桌面型小盒子到企业级智算集群的全场景硬件方案',
        tag: '产品发布',
        image: '/src/assets/images/img/hero_card3.png',
        imageLabel: 'Token\nMachine',
        link: 'https://mp.weixin.qq.com/s/2Ly_0FuReh03pYg7h91NjQ',
    },
]

export const productFeatures = [
    {
        title: 'Token Service',
        desc: '将算力资源指标与业务 SLO对齐，实时感知业务变化，并动态调度算力资源。',
        tag: ['SLO价值对齐', '智能资源规划', '自主决策'],
        link: ''
    },
    {
        title: 'Token System',
        desc: '预置数十种主流模型，集成丰富的硬件、模型、推理引擎等算力资源可视化能力。',
        tag: ['内置数十模型', '资源监控', '可视运维', '知识库'],
        link: '/amaas'
    },
    {
        title: 'Token Machine',
        desc: '内置趋境 KLLM 推理引擎，覆盖桌面级工作站、企业级一体机和大型分布式集群等形态。 ',
        tag: ['单 4090 跑671B', '低成本起步', '弹性扩容'],
        link: '/machine'
    },
    {
        title: 'AI Studio',
        desc: 'AI Studio：覆盖从数据处理、模型开发训练到推理部署的全链路 AI 研发流程。',
        tag: ['训推一体', '全链可视', '敏捷开发'],
        link: '/studio'
    },
    {
        title: 'KTransformers',
        desc: 'CPU+GPU 降低 MoE 大参数模型本地部署门槛，提升硬件资源利用率。',
        tag: ['高SLA', '国产化兼容', '异构计算'],
        link: 'https://github.com/kvcache-ai/ktransformers'
    },
    {
        title: 'Mooncake ',
        desc: 'GPU+CPU+内存+磁盘，大幅提升算力集群并发、吞吐。',
        tag: ['高SLA', '国产化兼容', 'PD分离', '以存换算'],
        link: '/mooncake'
    },
];
export const productTitle = '模型价值即服务的产品理念'

export const pageQuestionList = {
    title: 'AI落地是否还在为此烦恼？'
}


export const PageTabList = {
    title: '行业领先的场景化解决方案',
    tablist: [
        {
            name: "低门槛启动", id: 0, icon: 'tab1',
            desc: '依托趋境科技推理一体机解决方案，实现单台 4090D 工作站实现 6 个模型混合推理，成本降低 85%',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }],
            img: tab1
        },
        {
            name: "高并发高吞吐", id: 1, icon: 'tab2',
            desc: '依托趋境科技KLLM推理引擎，大幅度提升存量算力（16台8 卡 H200集群）吞吐性能，避免数千万的算力资源追加',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['开源引擎运行时，GPU 利用率不足', '集群总吞吐量仅能满足 30% 业务需求', '数千万硬件才能满足需求，投入产出比不足 1:0.2']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['KLLM推理引擎优化后，总吞吐量 6 倍 + 跃升', '无需追加任何硬件即可完全满足业务增长需求，节约数千万硬件投资和隐形能耗、人力成本']
            }],
            img: tab2
        },
        {
            name: "ISV联合共创", id: 2, icon: 'tab3',
            desc: '国内头部网络安全厂商，通过与趋境深度合作开发安全大模型一体机，实现AI赋能网络安全，抢占AI安全市场',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['部署成本高，难商业化', '网络安全行业深陷 “百亿模型内卷战”，同质化严重', '千亿级安全推理受限于高性能、低成本、易部署的“不可能三角”。']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['推理引擎技术加持，落地成本直降300%', '安全业务创新与业绩有效增长，抢占AI安全市场份额', '提升了大模型在安全场景效率，远超同类竞品方案']
            }],
            img: tab3
        },
        {
            name: "AI开发环境敏捷交付", id: 3, icon: 'tab4',
            desc: '军工行业卓越的应用开发商，面临时间紧急的AI应用开发任务，通过与趋境合作将6个月POC的目标缩短为1个月完成',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['作业场景无网络支持，无法依赖公有云 AI 开发环境', '市面多数一体机存在国产化适配不充分问题', 'AI 人才缺口大、团队规模小，推进项目难度极高']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['推理一体机集成数十种模型，联合 AMaaS 模型服务平台一体交付，云下即可获得云上体验', '信创适配，零额外适配成本', 'POC 周期 6 个月 → 1 个月，撬动超千万元商机']
            }],
            img: tab4
        },
        {
            name: "资源精细化管理", id: 4, icon: 'tab5',
            desc: '依托趋境科技AMaaS平台，实现根据业务场景精细资源匹配，大幅度提升算力资源利用率和AI性能',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['算力集群包括H100、A100 等近10种型号显卡，无专业管理平台', '高并发不足、资源利用率 <20%', '扩容需数千万元，ROI <1:0.2']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['AMaaS + KLLM，资源利用率提升 3×；', '模型吞吐提升 4 倍，处理2000 个请求仅需 1.5 分钟', '首token响应时间减少41%，批量任务完成时间缩短 20%']
            }],
            img: tab5
        },
        {
            name: "超低TTFT", id: 5, icon: 'tab6',
            desc: 'TTFT（首Token时延）不满足金融级的生产需求，依托KLLM推理优化引擎，实现无需购买高端算力TTFT下 降 84%',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['TTFT长期 300–400ms，制约 AI 财富管理“诊基”“盯盘”的实时性', 'H800 高端 GPU 集群利用率低于 40%', '峰值时段，TTFT 最长升至800毫秒，偶发风控决策超时']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['TTFT 降 84%，从优化前 350 毫秒降至 56 毫秒', '单卡 GPU 利用率 38%→82%，推理承载量提升 2.1×', '15 万次/秒峰值下，TTFT 波动 ≤5ms，风控成功率 99.99%']
            }],
            img: tab6
        },]
}

export const cooperateList = {
    title: '开放兼容的软硬件合作生态',
    mbTitle: "行业领先的场景化解决方案",
    info: '开放兼容・智算赋能',
    desc: '全栈智算引擎激发生态核心潜能，普惠高效 AI 拓宽价值增长边界，开放兼容拥抱全球硬软伙伴，引领 AI Infra 技术革新，加速智能应用规模化落地，精准服务客户核心所需。',
    mbDesc: '正在布局云、边、端上的全领域大模型推理集群和推理加速，助力提升大模型应用在各行业中的经济效益。AMD 中国与无问芯穹达成战略合作，未来双方将密切合作推动商用AI应用的性能提高，并推进相关生态系统建设。',
    btn: '加入我们',
}

export const sourceList = {
    title: '繁荣的趋境开源社区',
    list: [
        {
            title: '开发者社区',
            desc: '全球 TOP 推理引擎，首创 GPU+CPU 异构计算技术，击穿千亿/万亿大参数模型部署算力门槛，多家主流大模型首选推理引擎，获国际顶级系统会议 SOSP 论文',
            btn: '了解详情'
        },
        {
            title: '生态合作',
            desc: '业界分布式推理事实标准，以 KVCache 为核心大幅提升大模型推理吞吐量与成本效率，获 2025 USENIX FAST 最佳论文',
            btn: '了解详情'
        },
    ]
}
export const modelList = {
    title: '一键解锁 AI 管理与集成新范式！',
    btn: '前往模型仓库'
}

export const depList = {
    title: '为什么选择趋境科技',
    list: [
        {
            name: '顶尖技术团队 筑牢核心壁垒',
            desc: '核心技术团队源自清华大学计算机系高性能计算所，十余名博士骨干，沉淀十余年高性能优化技术经验，构建起国际顶尖的技术实力。',
            icon: 'icon-dep_tap1',
        },
        {
            name: '创新方案理念 引领行业变革',
            desc: '区别于传统以 token 为核心的算力解决方案，趋境科技首创 “业务 SLO 为导向的模型价值即服务” 核心理念。以更贴合实际业务需求的优化逻辑。',
            icon: 'icon-dep_tab2',
        },
        {
            name: '繁荣软硬生态 释放协同价值',
            desc: '依托 KTransformers 与 Mooncake 两大开源社区，趋境与国内外主流硬件厂商、大模型厂商及推理优化技术社区建立密切的合作生态。',
            icon: 'icon-dep_tap3',
        },
    ]
} 

export const consultList = {
    title: '助力AI进入普惠时代！',
    desc: '',
    btn: '立即咨询'
}
