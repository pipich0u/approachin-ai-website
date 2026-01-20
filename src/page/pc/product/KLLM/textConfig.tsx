export const advantagesText = {
    title: '产品优势',
    advantagesList: [
        {
            title: '强大的技术基座',
            items: [
                'Mooncake与KTransformers技术底座',
                'Nvdia、昇腾、沐曦、海光等主流芯片算子级优化',
                '高适配新模型，模型发布当日即支持推理部署'
            ]
        }, {
            title: '全球TOP的引擎性能',
            items: [
                '作为底层框架支撑Kimi日均万亿token',
                '业界首创单卡4090推理满血671B模型',
                '业界首创2卡4090微调万亿模型'
            ]
        }, {
            title: '企业级场景优化',
            items: [
                '多种企业场景在Nvdia、昇腾实测，性能超开源引擎3倍',
                'CPU/GPU/NPU异构、模型弹性扩缩容、秒级模型冷启动',
                '百节点集群资源调度，案例落地'
            ]
        }, {
            title: '金融级SLA保障',
            items: [
                '可用性：PD 分离架构、故障自动切换、多副本冗余',
                '延迟：以KVCache 为中心的分布式缓存管理，显存+内存+SSD分层池',
                '稳定性：早期拒绝策略、弹性伸缩、缓存一致性保障'
            ]
        },
    ]
}

export const carouselText = {
    title: '应用行业场景',
    imageName: 'studio_carousel',
    data: [
        {
            id: 0,
            title: '单机资源下的极致性能',
            desc: 'AI任务稳定运行，训练效率跟随卡数线性变化，趋境自研高性能引擎为千亿大模型的训练保驾护航。'
        },
        {
            id: 1,
            title: '超大规模分布式集群',
            desc: '依托 PD 分离、全局 KVCache 调度等核心技术实现节点间资源解耦与故障容错，支撑集群规模化稳定部署和高效协同'
        },
        {
            id: 2,
            title: '日均万亿token服务',
            desc: '提供 Web Shell 在线镜像构建能力，预置 GPU / 推理等基础镜像，支持 K8s 资源弹性调度，降低 AI 环境部署与运维成本。'
        }
    ]
}