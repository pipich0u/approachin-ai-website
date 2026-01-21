import './index.css'
import React, { useState } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig';

export const ContactIndex = () => {

    const [form] = Form.useForm();

    return <div className='contact-in-container'>
        <div className='contact-in-content'>
            <motion.div  {...initialLoadProps} className='ct-in-ct-title'>联系我们</motion.div>
            <motion.div  {...initialLoadProps} className='ct-in-ct-desc'>定制趋境一体化解决方案，即享受数智化升级</motion.div>
            <Form form={form} initialValues={{}} >
                <motion.div  {...initialLoadProps} className='flex gap-2.5 w-[530px]'>
                    <Form.Item style={{ marginBottom: 10 }}>
                        <Input placeholder="请输入您的姓名" style={{ width: '260px', height: 40 }} />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 10 }}>
                        <Input placeholder="请输入您的公司名称" style={{ width: '260px', height: 40 }} />
                    </Form.Item>
                </motion.div>
                <motion.div  {...initialLoadProps} className='flex gap-2.5 w-[530px]'>
                    <Form.Item style={{ marginBottom: 10 }}>
                        <Input placeholder="请输入您的手机号" style={{ width: '260px', height: 40 }} />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 10 }}>
                        <Input placeholder="请输入您的邮箱" style={{ width: '260px', height: 40 }} />
                    </Form.Item>
                </motion.div>
                <motion.div  {...initialLoadProps} className='flex gap-2.5 w-[530px]'>
                    <Form.Item style={{ marginBottom: 10 }}>
                        <Input.TextArea maxLength={100} placeholder="请输入您的需求"
                            style={{ width: '530px', height: 150, resize: 'none' }} />
                    </Form.Item>
                </motion.div>
                <motion.div  {...initialLoadProps}>
                    <Form.Item name="remember" valuePropName="checked" label={null} style={{ marginBottom: 10 }}>
                        <Checkbox className='ct-in-checkbox'>勾选表示：您同意趋境科技通过您填写的联系方式联系您，且数据仅用于与您沟通。</Checkbox>
                    </Form.Item>
                </motion.div>
                <Form.Item>
                    <motion.button {...initialLoadProps} className='animated-button w-[530px] rounded-lg mt-8!' >
                        <span className="text-white font-[380] bt-text">立即咨询</span>
                    </motion.button>
                </Form.Item>
            </Form>
        </div>
    </div >
}