import kllm1 from '@/assets/images/img/kllm-st1.png';
import kllm2 from '@/assets/images/img/kllm-st2.png';
import kllm3 from '@/assets/images/img/kllm-st3.png';
import kllm4 from '@/assets/images/img/kllm-st4.png';

export const kllmTextConfig = {
    pageName: 'KLLM页面'
}

export const advantagesText = {
    title: '产品优势',
    advantagesList: [
        {
            title: '强大的技术基座',
            items: [
                'Mooncake与KTransformers技术底座',
                'NVIDIA、昇腾、沐曦、海光等主流芯片算子级优化',
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
                '多种企业场景在NVIDIA、昇腾实测，性能超开源引擎3倍',
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
            desc: '通过混合精度量化、异构推理等场景优化技术，最大化单机算力利用率，实现单点推理性能的突破性提升',
            img: kllm1
        },
        {
            id: 1,
            title: '超大规模分布式集群',
            desc: '依托 PD 分离、全局 KVCache 调度等核心技术实现节点间资源解耦与故障容错，支撑集群规模化稳定部署和高效协同',
            img: kllm2
        },
        {
            id: 2,
            title: '日均万亿token服务',
            desc: '通过 KVCache 高复用、批处理优化与流量智能调度，大幅提升有效请求处理能力，实现海量 token 的低成本、高吞吐处理',
            img: kllm3
        },
        {
            id: 3,
            title: '金融级的TTFT要求',
            desc: '凭借前缀缓存复用、PD分离、零拷贝通信与最优节点智能调度算法，严控首 token 响应延迟，保障 TTFT 指标在金融 SLO 约束下达标率 99.9%+',
            img: kllm4
        },
    ]
}