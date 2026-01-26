export const menuHrefListDefault = [
    {
        title: '产品介绍',
        href: '/',
        isSelected: true,
        subItems: [
            // { title: '灵启·AI小盒子', href: 'spark' },
            { title: 'AI Studio 便携工作站', href: 'studio' },
            { title: '大模型推理一体机', href: 'machine' },
            { title: 'KLLM 推理引擎', href: 'kllm' },
            { title: 'AMaaS 平台', href: 'amaas' },
            // { title: 'MVaaS 平台', href: 'mvaas' },
        ]
    },
    {
        title: '开源社区',
        href: 'pageTechnology',
        isSelected: true,
        subItems: [
            // { title: 'KTransformers', href: 'ktransformers' },
            { title: 'Mooncake', href: 'mooncake' }
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
            // { title: '灵启·AI小盒子', href: 'spark' },
            { title: 'AI Studio 便携工作站', href: 'studio' },
            { title: '大模型推理一体机', href: 'machine' },
            { title: 'KLLM 推理引擎', href: 'kllm' },
            { title: 'AMaaS 平台', href: 'amaas' },
            // { title: 'MVaaS 平台', href: 'mvaas' },
        ]
    },
    {
        title: '开源社区',
        href: 'pageTechnology',
        isSelected: true,
        subItems: [
            // { title: 'KTransformers', href: 'ktransformers' },
            { title: 'Mooncake', href: 'mooncake' }
        ]
    },
    {
        title: '解决方案',
        href: 'solution',
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
            { title: '联系我们', href: 'contact' }
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
        title: ['趋境科技受邀参与 AIGC 开发者大会', '获评“AI行业最具影响力企业Top10”'],
        ask: '了解详情',
        link: "https://mp.weixin.qq.com/s/HiO8FzBI6vWv5BdxNnVPNw"
    },
    {
        title: ['KTransformers 与 Mooncake 入选', '2025 清华最受师生关注十大亮点成果'],
        ask: '了解详情',
        link: "https://mp.weixin.qq.com/s/RTfcAeq2__NgrPsjEY7YSg"
    }
]

export const productFeatures = [
    {
        title: 'A·Spark 便携工作站',
        desc: '内置趋境 KLLM 推理引擎，覆盖桌面级工作站、企业级一体机和大型分布式集群等型态',
        tag: ['单 4090 跑671B', '低成本起步', '弹性扩容', '国产化深度优化']
    },
    {
        title: '全可视化的“AI开发平台”',
        desc: 'AI Studio：覆盖从数据处理、模型开发训练到推理部署的全链路 AI 研发流程。',
        tag: ['训推一体', '全链可视', '敏捷开发']
    },
    {
        title: '自主决策的“算力规划大脑”',
        desc: '将算力资源指标与业务 SLO对齐，实时感知业务变化，并动态调度算力资源',
        tag: ['SLO价值对齐', '智能资源规划', '自主决策']
    },
    {
        title: '开箱即用的“模型服务平台”',
        desc: '预置数十种主流模型，集成丰富的硬件、模型、推理引擎等算力资源可视化能力',
        tag: ['内置数十模型', '资源监控', '可视运维', '知识库', '办公辅助']
    },
    {
        title: 'KTransformers',
        desc: 'CPU+GPU降低MOE大参数模型本地部署门槛，提升硬件资源利用率',
        tag: ['高SLA', '国产化兼容', '异构计算']
    },
    {
        title: 'Mooncake ',
        desc: 'GPU+CPU+内存+磁盘，大幅提升算力集群并发、吞吐',
        tag: ['高SLA', '国产化兼容', 'PD分离', '以存换算']
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
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        },
        {
            name: "高并发高吞吐", id: 1, icon: 'tab2',
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        },
        {
            name: "ISV联合共创", id: 2, icon: 'tab3',
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        },
        {
            name: "AI开发环境敏捷交付", id: 3, icon: 'tab4',
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        },
        {
            name: "精准资源管理", id: 4, icon: 'tab5',
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        },
        {
            name: "超低TTFT", id: 5, icon: 'tab6',
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        },
        {
            name: "更多场景", id: 6, icon: 'tab7',
            desc: '依托趋境科技推理一体机解决方案，实现单 4090D 工作站实现 6 个模型混合推理，成本降低 85% 某海外投资机构',
            info: [{
                title: '客户痛点',
                icon: 'icon-no',
                content: ['数据不能上云，私有部署算力数百万起步', '缺少 AI 人才，部署调试运维等技术门槛高', 'AI 场景复杂，4 个业务场景需要 6 个模型混合推理']
            }, {
                title: '趋境价值',
                icon: 'icon-dui',
                content: ['单 4090D 工作站实现 6 个模型混合推理，成本降低 85%', '支撑 4 个场景/台，满足首 Token 延迟 和 decode 速度要求', 'AMaaS 管理平台屏蔽技术复杂性，客户只需关注业务自身']
            }]
        }]
}

export const cooperateList = {
    title: '开放兼容的软硬件合作生态',
    mbTitle: "行业领先的场景化解决方案",
    info: '开放兼容・智算赋能',
    desc: '全栈智算引擎激发生态核心潜能，普惠高效 AI 拓宽价值增长边界，开放兼容拥抱全球硬软伙伴，引领 AI Infra 技术革新，加速智能应用规模化落地，精准服务客户核心所需。',
    mbDesc: '正在布局云、边、端上的全领域大模型推理集群和推理加速，助力提升大模型应用在各行业中的经济效益。AMD 中国与无问芯穹达成战略合作，未来双方将密切合作推动商用AI应用的性能提高，并推进相关生态系统建设。',
    btn: '成为合作伙伴',
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
            name: '顶尖技术团队\n筑牢核心壁垒',
            desc: '核心技术团队源自清华大学计算机系高性能计算所，十余名博士骨干，沉淀十余年高性能优化技术经验，构建起国际顶尖的技术实力。',
            icon: 'icon-dep_tap1',
        },
        {
            name: '创新方案理念\n引领行业变革',
            desc: '区别于传统以 token 为核心的算力解决方案，趋境科技首创 “业务 SLO 为导向的模型价值即服务” 核心理念。以更贴合实际业务需求的优化逻辑，为客户创造差异化价值。',
            icon: 'icon-dep_tab2',
        },
        {
            name: '繁荣软硬生态\n释放协同价值',
            desc: '依托 KTransformers 与 Mooncake 两大开源社区，趋境与国内外主流硬件厂商、大模型厂商及推理优化技术社区建立密切的的合作生态，第一时间将行业前沿技术转化为客户可感知的技术红利。',
            icon: 'icon-dep_tap3',
        },
    ]
}

export const consultList = {
    title: '助力AI进入普惠时代！',
    desc: '为企业级用户的 AI 落地提供从算力破局到价值交付的全链路解决方案',
    btn: '立即咨询'
}
