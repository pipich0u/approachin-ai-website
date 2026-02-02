import step1 from '@/assets/images/img/moon-step1.png'
import step2 from '@/assets/images/img/moon-step2.png'
import step3 from '@/assets/images/img/moon-step3.png'
import step4 from '@/assets/images/img/moon-step4.png'
import mylogo from '@/assets/images/img/my.webp'
import mybg from '@/assets/images/img/my_bg.webp'
import aliyunlogo from '@/assets/images/img/aliyun.webp'
import aliyunbg from '@/assets/images/img/ali_bg.webp'
import moonlogo from '@/assets/images/img/shot.png'
import moonbg from '@/assets/images/img/shot_bg.webp'
import xflogo from '@/assets/images/img/xunfei.webp'
import xfbg from '@/assets/images/img/xf_bg.webp'


export const moonBannerList = {
    tag: '趋境科技旗下开源项目',
    title: 'Mooncake 大模型推理框架',
    desc: '由趋境科技与清华大学 KVCache.AI 团队联合开源的高性能异构推理框架，业界首创全系统推理架构，让大模型在更低算力、更灵活的硬件架构上高效运行。',
    btn1: '前往下载',
    btn2: 'Github',
    btn3: '模型对比'
}

export const moonFastList = {
    title: '快速开始',
    desc: 'Mooncake 吞吐量提升效果',
    tab: [
        { id: 0, label: '安装 Transfer Engine', videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4' },
        { id: 1, label: '启动 Mooncake Store', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
        { id: 2, label: 'vLLM 集成示例', videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }
    ]
}
export const MoonInfluenceList = {
    title: 'Mooncake 技术影响力',
    items: [
        {
            img: mylogo,
            bg: mybg,
            desc: '蚂蚁集团大规模多轮对话场景中，面对高并发交互需求与严苛的响应时效要求，趋境通过核心调度技术实现模块深度集成，推动首词响应时间大幅下降84%，显著优化用户交互体验；',
        },
        {
            img: aliyunlogo,
            bg: aliyunbg,
            desc: '阿里云超大规模云算力平台，针对海量用户推理需求与成本控制双重诉求，趋境依托自主研发的核心技术，在仅产生20%性能影响的前提下，助力客户成功达成低成本运营目标；',
        },
        {
            img: moonlogo,
            bg: moonbg,
            desc: '月之暗面合作中，承接千万级用户规模的 Kimi 大模型核心流量承载任务，面对超大算力调度需求与高稳定性要求，通过精准调度优化实现 75% 的系统吞吐量提升，保障大规模并发请求稳定处理；',
        },
        {
            img: xflogo,
            bg: xfbg,
            desc: '科大讯飞星辰 MaaS 大规模集群项目中，针对规模化服务落地的极致算力效率要求，趋境基于核心技术构建优化方案，实现性能突破，为 MaaS 服务规模化落地提供核心支撑；',
        },
    ]
}
export const MoonSourceList = {
    title: '开源社区',
    desc: '众多开发者、用户和社区成员共同构建繁荣生态'
}
export const MoonStepList = {
    title: '最新动态',
    list: [
        {
            title: 'Feb 25, 2025',
            desc: '荣获 FAST 2025 Best Paper Award',
            img: step1
        },
        {
            title: 'Nov 28, 2024',
            desc: 'Transfer Engine 正式开源',
            img: step2
        },
        {
            title: 'Jul 20, 2025',
            desc: '支持Kimi K2在128×H200部署',
            img: step3
        },
        {
            title: 'Sept 10, 2025',
            desc: 'SGLang HiCache集成发布',
            img: step4
        },
    ]
}