export const amaasTextConfig = {
    index: {
        title: 'AMaaS',
        subtitle: '一站式大模型服务平台',
        features: [
            '国产芯片加速',
            '异构算力纳管',
            '模型天级更新',
            '极致推理性能'
        ],
        buttonText: '立即下载'
    },
    introduce: {
        title: 'AMaaS产品简介',
        items: [
            {
                title: '软硬件资源可视',
                description: '各类异构算力硬件资源、大模型、各推理引擎统一纳管，资源使用情况图形化展现;',
                features: [
                    '多卡异构管理',
                    '运维管理可视化',
                    '开箱即用'
                ]
            },
            {
                title: '全球TOP推理引擎',
                description: '内置趋境 KLLM 推理引擎，相比于国际主流开源框架各项性能有数倍提升，国产硬件深度适配优化',
                features: [
                    '单机极致性能',
                    '多机分布式推理',
                    '国产卡深度优化'
                ]
            },
            {
                title: '内置各类大模型',
                description: '各类异构算力硬件资源、大模型、各推理引擎统一纳管，资源使用情况图形化展现;',
                features: [
                    '新模型天级更新',
                    '内置数十种主流模型',
                    '多模型并行运行'
                ]
            },
            {
                title: '内置办公辅助系统',
                description: '各类异构算力硬件资源、大模型、各推理引擎统一纳管，资源使用情况图形化展现;',
                features: [
                    'RAG 知识库',
                    '智能搜索',
                    '文案辅助'
                ]
            }
        ]
    },
    relation: {
        title: '大模型产品关系图',
        layers: [
            {
                name: 'AMaaS层',
                subtitle: '丰富的算力资源可视化管理',
                features: [
                    {
                        title: '模型测试与评估',
                        items: ['多模型效果对比', '一键模型切换', '模型精度评估', '多推理实例部署']
                    },
                    {
                        title: '大模型管理及运维',
                        items: [
                            'DeepSeek、KIMI、GLM、千问等主流SOTA模型支持',
                            '大模型使用量监控',
                            '模型仓库',
                            '模型自定义部署',
                            '模型副本/路由'
                        ]
                    },
                    {
                        title: '多样化API接口',
                        items: ['大模型\nAPI', 'RAG\nAPI', '文本解析\nAPI', 'AI搜索\nAPI', '模型记忆\nAPI', '批处理\nCache']
                    }
                ]
            },
            {
                name: '引擎与框架层',
                subtitle: '按需调用的AI优化工具',
                sections: [
                    { title: '推理引擎' },
                    { title: '分布式框架' }
                ]
            },
            {
                name: '资源层',
                subtitle: '统一纳管的异构混合算力池'
            }
        ],
        sidebar: {
            title: 'AMaaS',
            description: '各类异构算力硬件资源、大模型、各推理引擎统一纳管，资源使用情况图形化展现，内置数十种主流模型，结合趋境云端模型仓库实现模型天级更新',
            advantages: {
                title: '架构优势',
                items: ['自研全球top推理引擎', '秒级弹性扩缩容', '多硬件异构管理']
            },
            buttonText: '立即资讯',
            relatedCapabilities: {
                title: '相关能力',
                items: ['模型仓库', 'KLLM', '一体机']
            }
        }
    }
}