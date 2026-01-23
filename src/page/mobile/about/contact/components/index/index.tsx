import './index.css'
import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig';
import img from '@/assets/images/mob/mob-contact.png';
import { useContactForm } from '@/hooks/useContactForm';

export const MobContactIndex = () => {

    const { form, isShaking, handleSubmit } = useContactForm();

    return <div className='mob-contact-in-container'>
        <div className='mob-contact-in-content'>
            <motion.div  {...initialLoadProps} className='mob-ct-in-ct-title'>联系我们</motion.div>
            <motion.div  {...initialLoadProps} className='mob-ct-in-ct-desc'>定制趋境一体化解决方案，即享受数智化升级</motion.div>
            <motion.div  {...initialLoadProps}>
                <Form form={form} initialValues={{}} >
                    <Form.Item
                        name="name"
                        rules={[
                            { required: true, message: '请输入您的姓名' }
                        ]}
                        style={{ marginBottom: 10, flex: 1 }}
                    >
                        <Input placeholder="请输入您的姓名" maxLength={10} style={{ width: '100%', height: 40, backgroundColor: '#fff' }} variant='filled' />
                    </Form.Item>
                    <Form.Item
                        name="company"
                        style={{ marginBottom: 10, flex: 1 }}
                    >
                        <Input placeholder="请输入您的公司名称" maxLength={100} style={{ width: '100%', height: 40, backgroundColor: '#fff' }} variant='filled' />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            { required: true, message: '请输入手机号' },
                            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式' }
                        ]}
                        style={{ marginBottom: 10, flex: 1 }}
                    >
                        <Input placeholder="请输入您的手机号" style={{ width: '100%', height: 40, backgroundColor: '#fff' }} variant='filled' />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: '请输入邮箱' },
                            { type: 'email', message: '请输入正确的邮箱格式' }
                        ]}
                        style={{ marginBottom: 10, flex: 1 }}
                    >
                        <Input placeholder="请输入您的邮箱" style={{ width: '100%', height: 40, backgroundColor: '#fff' }} variant='filled' />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        style={{ marginBottom: 10, flex: 1 }}
                    >
                        <Input.TextArea maxLength={200} placeholder="请输入您的需求" variant='filled'
                            style={{ width: '100%', height: 150, resize: 'none', backgroundColor: '#fff' }} />
                    </Form.Item>
                    <motion.div
                        // {...initialLoadProps}
                        animate={isShaking ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            label={null}
                            style={{ marginBottom: 10 }}
                        >
                            <Checkbox className='mob-ct-in-checkbox'>勾选表示：您同意趋境科技通过您填写的联系方式联系您，且数据仅用于与您沟通。</Checkbox>
                        </Form.Item>
                    </motion.div>
                    <Form.Item>
                        <motion.button
                            className='animated-button mob-contact-in-button rounded-lg mt-8!'
                            type="button"
                            onClick={handleSubmit}
                        >
                            <span className="text-white font-[380] bt-text">立即咨询</span>
                        </motion.button>
                    </Form.Item>
                </Form>
            </motion.div>
            <motion.img  {...initialLoadProps} src={img} alt="Contact Us" className='mob-contact-in-image' />
        </div>
    </div >
}