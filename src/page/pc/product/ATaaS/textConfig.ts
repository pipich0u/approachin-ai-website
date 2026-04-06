export const ataasTextConfig = {
    pageName: 'ATaaS页面'
}

export const overviewText = {
    name: 'ATaaS',
    title: '全球领先的高效能Token生产平台',
    features: '异构推理2.0｜以存换算2.0｜虚实同构｜极致弹性｜万卡扩展',
    desc: '基于趋境自研推理引擎与异构算力调度技术，构建面向大规模 Token 生产的全栈基础设施，为企业提供极致性价比的 AI 推理算力底座。',
}

export const advantagesText = {
    title: '核心能力',
    advantagesList: [
        {
            title: '异构推理 2.0',
            items: [
                '第二代 CPU+GPU+NPU 异构协同推理架构',
                '算子级调度优化，自动适配多种芯片组合',
                '相比纯 GPU 方案，推理成本降低 60% 以上'
            ]
        },
        {
            title: '以存换算 2.0',
            items: [
                '显存+内存+SSD 三级 KVCache 分层存储池',
                '热数据常驻显存、温数据缓存内存、冷数据持久化 SSD',
                '缓存命中率提升 3 倍，有效降低重复计算开销'
            ]
        },
        {
            title: '虚实同构',
            items: [
                '虚拟化算力与物理算力统一调度框架',
                '支持裸金属、容器、虚拟机等多种算力形态纳管',
                '屏蔽底层差异，实现算力资源池化与弹性调度'
            ]
        },
        {
            title: '极致弹性与万卡扩展',
            items: [
                '秒级模型冷启动，按需弹性扩缩容',
                '支持百节点到万卡规模集群平滑扩展',
                'PD 分离架构，计算与存储独立伸缩'
            ]
        },
    ]
}

export const serviceText = {
    list: [
        {
            title: '整机交付',
            desc: '预装 ATaaS 平台的一体化算力设备，开箱即用，适合快速构建私有化推理集群。',
        },
        {
            title: '软件授权',
            desc: '在客户已有硬件上部署 ATaaS 平台，充分利用存量算力资源，最大化投资回报。',
        },
        {
            title: '联合运营',
            desc: '与客户共建 Token 生产基地，提供全生命周期运营支持，按 Token 产能分成。',
        },
    ]
}
