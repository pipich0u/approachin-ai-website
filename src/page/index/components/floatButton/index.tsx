import React from 'react';
import { FloatButton } from 'antd';
import './index.css'
import btn1 from '@/assets/images/img/floatbtn1.svg'
import btn2 from '@/assets/images/img/floatbtn2.svg'
import phone from '@/assets/images/img/phone.svg'
import msg from '@/assets/images/img/message.svg'
import wechat from '@/assets/images/img/wechat.svg'
import ewm from '@/assets/images/img/ewmfl.png'
import { QuestionCircleOutlined } from '@ant-design/icons';


const FloatBtnEle: React.FC = () => (

    <>
        <FloatButton.Group
            trigger="click"
            style={{ insetInlineEnd: 24 }}
            icon={<QuestionCircleOutlined />}
        >
            <FloatButton
                style={{ bottom: 208 }}
                className='floatbtn1'
                tooltip={{
                    color: '#fff',
                    placement: 'left',
                    title: <div className='flex flex-col items-start justify-between p-5 gap-[30px] '>
                        <div className='flex items-start'>
                            <img src={phone} alt="" style={{ fontSize: '20px', width: '20px', height: '20px' }} />
                            <div className='flex flex-col ml-2.5'>
                                <div className='font-[450] text-[#1a1a1a]'>联系我们</div>
                                <div className='text-[#6C3AE1] text-[14px] font-[330]'>123-123-12345</div>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <img src={msg} alt="" style={{ fontSize: '20px', width: '20px', height: '20px' }} />
                            <div className='flex flex-col ml-2.5'>
                                <div className='font-[450] text-[#1a1a1a]'>售前咨询</div>
                                <div className='text-[#8D8D8D] text-[14px] font-[330]'>我们会第一时间为您解决问题</div>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <img src={wechat} alt="" style={{ fontSize: '20px', width: '20px', height: '20px' }} />
                            <div className='flex flex-col ml-2.5'>
                                <div className='font-[450] text-[#1a1a1a]'>微信咨询</div>
                                <img src={ewm} alt="" />
                            </div>
                        </div>
                    </div>
                }}
                icon={<div className='flex flex-col items-center bg-none'>
                    <img src={btn1} alt="咨询" style={{ fontSize: '24px' }} />
                    <div className='w-6 mt-2 text-[12px] text-white font-[330]'>咨询</div>
                </div>}
            />
            <FloatButton
                style={{ bottom: 128 }}
                tooltip={<div>Documents</div>}
                icon={<div className='flex flex-col items-center bg-none'>
                    <img src={btn2} alt="咨询" style={{ fontSize: '24px' }} />
                    <div className='w-6 mt-2 text-[12px] text-black font-[330]'>售后</div>
                </div>}
                className='floatbtn2'
            />
        </FloatButton.Group>
    </>
);

export default FloatBtnEle;