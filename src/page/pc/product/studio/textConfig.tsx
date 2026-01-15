
export const StudioTabList = {
    tablist: [
        {
            name: "数据管理", id: 0, icon: 'tab2',
            desc: '支持图/文/音/多模态/大模型多种类型标注功能，用户管理，工作任务分发，项目组权限控制',
            info: [{
                title: '对接模型市场，支持自动化标注',
                content: '目标识别，目标边界识别，目标遮罩识别，图片分类，图片描述，ocr，关键点检测。'
            }, {
                title: '支持大模型自动化标注',
                content: '文本分类，文本翻译，命名实体识别，阅读理解，问答，摘要提取...'
            }
            ],
            btn: '立即咨询'
        },
        {
            name: "在线开发", id: 1, icon: 'tab1',
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
            btn: '立即咨询'
        },
        {
            name: "模型训练", id: 2, icon: 'tab5',
            desc: '支持多训练加速框架，多模型全流程训练评估，兼容 RDMA 与多 GPU',
            info: [{
                title: '支持tfjob/pytorch/paddlejob/mindspore/mxnet等分布式训练框架',
                content: ''
            }, {
                title: '支持deepspeed/megatron/colossalai/horovod/mpi等分布式加速框架',
                content: ''
            }, {
                title: '支持deepseek/chatglm4/baichuan2/qwen2等full/lora微调，支持llama factory 100+ LLMs',
                content: ''
            }, {
                title: '支持大模型量化，大模型sft/奖励模型/强化学习训练，大模型评估',
                content: ''
            }, {
                title: '支持RDMA网址，支持IB/roce底层，国产gpu卡，不同gpu厂商/卡型选择',
                content: ''
            }],
            btn: '立即咨询'
        },
        {
            name: "流程自动化", id: 3, icon: 'tab6',
            desc: '',
            info: [{
                title: '数据导入，数据预处理，超参搜索，模型训练，模型评估，模型压缩，模型注册，服务上线全',
                content: ''
            }, {
                title: '便捷的拖拉拽方式，支持单任务和pipeline整体等多种调试运行方式',
                content: ''
            }],
            btn: '立即咨询'
        },
        {
            name: "推理服务", id: 4, icon: 'tab3',
            desc: '',
            info: [{
                title: '开源大模型的部署，vllm/ollama/mindie/xinference等多种部署形式',
                content: ''
            }, {
                title: '支持vllm/mindie单机多卡/多机多卡推理加速，形成openai流式接口',
                content: ''
            }, {
                title: '支持大模型网关：秘钥匹配，限速，黑白名单，token限额，统计监控，有效期设定等',
                content: ''
            }],
            btn: '立即咨询'
        },
        {
            name: "模型市场", id: 5, icon: 'tab4',
            desc: '支持图/文/音/多模态/大模型多种类型标注功能，用户管理，工作任务分发，项目组权限控制',
            info: [{
                title: '定义标准模型应用开发框架，对接mlops平台实现模型的一键部署/开发/微调',
                content: ''
            }, {
                title: '系统自带通用模型数量400+，覆盖绝大数行业场景，根据需求可以自行扩充',
                content: ''
            }],
            btn: '立即咨询'
        },
    ]
}