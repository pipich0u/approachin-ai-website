import './index.css'
import React from 'react';
import { FloatButton } from 'antd';
import btn1 from '@/assets/svg/floatbtn1.svg'
import btn2 from '@/assets/svg/floatbtn2.svg'
import phone from '@/assets/svg/phone.svg'
import msg from '@/assets/svg/message.svg'
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '@/utils/umami';

const FloatBtnEle: React.FC = () => {
    const navigator = useNavigate()
    return <>
        <FloatButton
            style={{ bottom: 148 }}
            onClick={() => {
                trackButtonClick('悬浮按钮-咨询', '页面悬浮按钮', { href: '/contact' });
                navigator('/contact');
            }}
            className='floatbtn1'
            icon={<div className='flex flex-col items-center bg-none'>
                <img src={btn1} alt="咨询" style={{ fontSize: '24px' }} />
                <div className='w-6 mt-2 text-[12px] text-white font-[330]'>咨询</div>
            </div>}
        />
        <FloatButton
            style={{ bottom: 68 }}
            className='floatbtn2'
            icon={<div className='flex flex-col items-center bg-none'>
                <img src={btn2} alt="咨询" style={{ fontSize: '24px' }} />
                <div className='w-6 mt-2 text-[12px] text-black font-[330]'>售后</div>
            </div>}
            tooltip={{
                color: '#fff',
                placement: 'left',
                title: <div className='flex flex-col items-start justify-between p-2 gap-[30px] '>
                    <div className='flex items-start'>
                        <img src={phone} alt="" style={{ fontSize: '20px', width: '20px', height: '20px' }} />
                        <div className='flex flex-col ml-2.5'>
                            <div className='font-[450] text-[#1a1a1a]'>联系我们</div>
                            <div className='text-[#6C3AE1] text-[14px] font-[330]'>quxin@approaching.ai</div>
                        </div>
                    </div>
                    {/* <div className='flex items-start'>
                        <img src={msg} alt="" style={{ fontSize: '20px', width: '20px', height: '20px' }} />
                        <div className='flex flex-col ml-2.5'>
                            <div className='font-[450] text-[#1a1a1a]'>售前咨询</div>
                            <div className='text-[#8D8D8D] text-[14px] font-[330]'>我们会第一时间为您解决问题</div>
                        </div>
                    </div> */}
                </div>
            }}
        />
    </>
};

export default FloatBtnEle;