import studio1 from '@/assets/images/img/studio1.webp';
import studio2 from '@/assets/images/img/studio2.webp';
import studio3 from '@/assets/images/img/studio3.webp';

import tab1 from '@/assets/images/img/tab1.webp'
import tab2 from '@/assets/images/img/tab2.webp'
import tab3 from '@/assets/images/img/tab3.webp'
import tab4 from '@/assets/images/img/tab4.webp'
import tab5 from '@/assets/images/img/tab5.png'
import tab6 from '@/assets/images/img/tab6.png'

export const studioTextConfig = {
    pageName: 'AI-Studio页面',
    index: {
        title: 'AI-Studio',
        desc: '一站式机器学习 / 深度学习 / 大模型 AI 平台，以 K8s 为底座，覆盖数据接入、Notebook 开发、拖拽式任务流编排、分布式训练、超参搜索、大模型微调与推理、LLMOps、模型应用商店等全链路能力。',
        buttons: [
            { text: '立即咨询', className: 'bg-[#806BFF]' },
            { text: '产品文档', className: 'studio-btn bg-[#333]' }
        ]
    },
    link: {
        title: 'AI开发全链路可视',
        desc: '云原生一站式机器学习/深度学习/大模型AI平台',
        buttonText: '了解详情'
    },
    tab: {
        title: '产品能力',
        consultText: '立即咨询'
    },
    carousel: {
        title: '应用场景',
        imageName: 'studio_carousel',
        data: [
            {
                id: 0,
                title: '训练场景',
                desc: 'AI任务稳定运行，训练效率跟随卡数线性变化，趋境自研高性能引擎为千亿大模型的训练保驾护航。',
                img: studio1
            },
            {
                id: 1,
                title: '多框架开发场景',
                desc: '兼容 Python/Java/C++ 及 PyTorch/TensorFlow 等主流框架，集成 Jupyter/VSCode 等在线 IDE，一键完成数据处理、模型调试与代码管理。',
                img: studio2
            },
            {
                id: 2,
                title: '镜像与资源管理场景',
                desc: '提供 Web Shell 在线镜像构建能力，预置 GPU / 推理等基础镜像，支持 K8s 资源弹性调度，降低 AI 环境部署与运维成本。',
                img: studio3
            }
        ]
    }
}

export const StudioTabList = {
    tablist: [
        {
            name: "数据管理", id: 0, icon: 'tab-a',
            desc: '支持图/文/音/多模态/大模型多种类型标注功能，用户管理，工作任务分发，项目组权限控制',
            info: [{
                title: '对接模型市场，支持自动化标注',
                content: '目标识别，目标边界识别，目标遮罩识别，图片分类，图片描述，ocr，关键点检测。'
            }, {
                title: '支持大模型自动化标注',
                content: '文本分类，文本翻译，命名实体识别，阅读理解，问答，摘要提取...'
            }
            ],
            btn: '立即咨询',
            img: tab1
        },
        {
            name: "在线开发", id: 1, icon: 'tab-b',
            desc: '支持多租户 / 多实例管理，浏览器即可在线交互开发调试，无需安装三方控件；',
            info: [{
                title: '兼容 VSCode、Jupyter、Matlab、RStudio 等多类在线 IDE，支持环境保存与定期清理续期；',
                content: ''
            }, {
                title: 'Jupyter 适配 cube-studio SDK 及 Julia、R、Python、PySpark 多内核；',
                content: ''
            }, {
                title: '支持 C++、Java、Conda 等开发语言，集成 TensorBoard、Git、GPU 监控等插件；',
                content: ''
            }, {
                title: '打通 SSH 远程与 Notebook，支持本地代码开发；',
                content: ''
            }, {
                title: '提供 Web Shell 在线镜像构建能力，预置 Notebook、推理、GPU、Python 等基础镜像',
                content: ''
            }],
            btn: '立即咨询',
            img: tab2
        },
        {
            name: "模型训练", id: 2, icon: 'tab-c',
            desc: '支持多训练加速框架，多模型全流程训练评估，兼容 RDMA 与多 GPU',
            info: [{
                title: '支持tfjob/pytorch/paddlejob/mindspore/mxnet等分布式训练框架',
                content: ''
            },
            //  {
            //     title: '支持Deepspeed/Megatron/ColossalAI/Horovod/MPI等分布式加速框架',
            //     content: ''
            // }, 
            {
                title: '支持Deepseek/ChatGLM4/Baichuan2/Qwen2等Full/LoRA微调，支持Llama Factory 100+ LLMs',
                content: ''
            }, {
                title: '支持大模型量化，大模型sft/奖励模型/强化学习训练，大模型评估',
                content: ''
            }, {
                title: '支持RDMA网址，支持IB/ROCE底层，国产GPU卡，不同GPU厂商/卡型选择',
                content: ''
            }],
            btn: '立即咨询',
            img: tab3
        },
        {
            name: "流程自动化", id: 3, icon: 'tab-d',
            desc: '',
            info: [{
                title: '数据导入，数据预处理，超参搜索，模型训练，模型评估，模型压缩，模型注册，服务上线全',
                content: ''
            }, {
                title: '便捷的拖拉拽方式，支持单任务和pipeline整体等多种调试运行方式',
                content: ''
            }],
            btn: '立即咨询',
            img: tab4
        },
        {
            name: "推理服务", id: 4, icon: 'tab-e',
            desc: '',
            info: [{
                title: '开源大模型的部署，VLLM/Ollama/Mindie/Xinference等多种部署形式',
                content: ''
            }, {
                title: '支持VLLM/Mindie单机多卡/多机多卡推理加速，形成OpenAI流式接口',
                content: ''
            }, {
                title: '支持大模型网关：秘钥匹配，限速，黑白名单，token限额，统计监控，有效期设定等',
                content: ''
            }],
            btn: '立即咨询',
            img: tab5
        },
        {
            name: "模型市场", id: 5, icon: 'tab-f',
            desc: '支持图/文/音/多模态/大模型多种类型标注功能，用户管理，工作任务分发，项目组权限控制',
            info: [{
                title: '定义标准模型应用开发框架，对接mlops平台实现模型的一键部署/开发/微调',
                content: ''
            }, {
                title: '系统自带通用模型数量400+，覆盖绝大数行业场景，根据需求可以自行扩充',
                content: ''
            }],
            btn: '立即咨询',
            img: tab6
        },
    ]
}