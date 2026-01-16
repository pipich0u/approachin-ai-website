import { CollapseProps, Collapse } from 'antd';
import './index.css'
import platfromImg from '@/assets/images/img/mvaas_pl.png'
import { IconFont } from '@/utils/antdUtils';
import { motion } from 'motion/react';
import { scrollInViewOnceProps } from '@/utils/motionConfig';

export const MVaaSPlatform = () => {
    const text = () => {
        return <div className='mvaas-platform-collapse-box'>
            <div className='mvaas-platform-collapse-items'>
                <IconFont type='icon-dui' className='text-[#6C3AE1] text-[22px]!' />
                <div>实时SLO感知</div>
            </div>
            <div className='mvaas-platform-collapse-items'>
                <IconFont type='icon-dui' className='text-[#6C3AE1] text-[22px]!' />
                <div>集群资源计算</div>
            </div>
            <div className='mvaas-platform-collapse-items'>
                <IconFont type='icon-dui' className='text-[#6C3AE1] text-[22px]!' />
                <div>自动扩缩容稳定SLO </div>
            </div>
        </div>
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <div className='mvaas-platform-collapse-label'>洞察罗盘</div>,
            children: text(),
        },
        {
            key: '2',
            label: <div className='mvaas-platform-collapse-label'>策略蓝图</div>,
            children: text(),
        },
        {
            key: '3',
            label: <div className='mvaas-platform-collapse-label'>自主决策</div>,
            children: text(),
        },
    ];
    return <div className='mvaas-platform-container'>
        <div className='mvaas-platform-content'>
            <div className='mvaas-platform-title'>MVaaS平台智能调度能力</div>
            <div className='mvaas-platform-box'>
                <div className='mvaas-platform-item'>
                    <img src={platfromImg} alt="" className='selectNone' />
                </div>
                <div className='mvaas-platform-item'>
                    <Collapse
                        defaultActiveKey={['3']}
                        className='mvaas-platform-collapse'
                        expandIconPosition="end"
                        ghost
                        items={items}
                        accordion
                    />
                    <motion.button {...scrollInViewOnceProps}
                        className='animated-button w-[100px] rounded-lg mvaas-platform-btn'
                    // onClick={() => trackButtonClick(index.buttonText, 'AMaaS第1屏', { slideIndex: 0 })}
                    >
                        <span className="text-white font-[380] w-full">立即下载</span>
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
}