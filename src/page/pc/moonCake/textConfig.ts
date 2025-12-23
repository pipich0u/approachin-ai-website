import step1 from '@/assets/images/img/moon-step1.png'
import step2 from '@/assets/images/img/moon-step2.png'
import step3 from '@/assets/images/img/moon-step3.png'
import step4 from '@/assets/images/img/moon-step4.png'


export const moonBannerList = {
    tag: '趋境科技旗下开源项目',
    title: 'Mooncake 大模型推理框架',
    desc: '由趋境科技与清华大学 KVCache.AI 团队联合开源的高性能异构推理框架，业界首创全系统推理架构，让大模型在更低算力、更灵活的硬件架构上高效运行。',
    btn1: '免费下载',
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
            title: '业界分布式推理事实标准',
            desc: '和 vLLM、SGLang、NVIDIA Dynamo 等一同共建',
        },
        {
            title: 'Kimi底座，并落地众多互联网公司',
            desc: 'Mooncake 作为 Kimi 底座平台，承载其近四千万的月活用户 提升 Kimi 吞吐 75% 以上。并在阿里云、美团、京东、蚂蚁集团、腾讯元宝、科大讯飞等多家头部互联网公司落地',
        },
        {
            title: '全球唯二的顶会最佳论文',
            desc: '全球存储顶级会议 2025  USENIX FAST 最佳论文',
        }
    ]
}
export const MoonSourceList = {
    title: '开源社区',
    desc: '众多开发者、用户和社区成员共同构建繁荣生态'
}
export const MoonStepList = [
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