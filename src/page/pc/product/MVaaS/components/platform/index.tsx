import { CollapseProps, Collapse } from 'antd';
import './index.css'
import platfromImg from '@/assets/images/img/mvaas_pl.webp'
import { IconFont } from '@/utils/antdUtils';
import { motion } from 'motion/react';
import { scrollInViewOnceProps } from '@/utils/motionConfig';
import { mvaasTextConfig } from '../../textConfig';
import { trackButtonClick } from '@/utils/umami';

export const MVaaSPlatform = () => {
    const { platform } = mvaasTextConfig;

    const renderFeatures = (features: string[]) => {
        return <div className='mvaas-platform-collapse-box'>
            {features.map((feature, idx) => (
                <div key={idx} className='mvaas-platform-collapse-items'>
                    <IconFont type='icon-dui' className='text-[#6C3AE1] text-[22px]!' />
                    <div>{feature}</div>
                </div>
            ))}
        </div>
    };

    const items: CollapseProps['items'] = platform.items.map(item => ({
        key: item.key,
        label: <div className='mvaas-platform-collapse-label'>{item.label}</div>,
        children: renderFeatures(item.features),
    }));

    return <div className='mvaas-platform-container'>
        <div className='mvaas-platform-content'>
            <motion.div {...scrollInViewOnceProps} className='mvaas-platform-title'>{platform.title}</motion.div>
            <div className='mvaas-platform-box'>
                <motion.div {...scrollInViewOnceProps} className='mvaas-platform-item'>
                    <img src={platfromImg} alt="" className='selectNone' />
                </motion.div>
                <motion.div {...scrollInViewOnceProps} className='mvaas-platform-item'>
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
                        onClick={() => trackButtonClick(platform.buttonText, 'MVaaS平台智能调度')}
                    >
                        <span className="text-white font-[380] w-full">{platform.buttonText}</span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    </div>
}