import './index.css'
import { Checkbox, Form, Input } from 'antd';
import { motion } from 'motion/react';
import { initialLoadProps } from '@/utils/motionConfig';
import { useContactForm } from '@/hooks/useContactForm';
import { contactTextConfig } from '../../textConfig';

export const ContactIndex = () => {

    const { form, isShaking, handleSubmit } = useContactForm();

    return <div className='contact-in-container'>
        <div className='contact-in-content'>
            <motion.div  {...initialLoadProps} className='ct-in-ct-title'>{contactTextConfig.title}</motion.div>
            <motion.div  {...initialLoadProps} className='ct-in-ct-desc'>{contactTextConfig.desc}</motion.div>
            <motion.div  {...initialLoadProps}>
                <Form form={form} initialValues={{}} >
                    <div className='flex gap-2.5 w-[530px]'>
                        <Form.Item
                            name="name"
                            rules={[
                                { required: true, message: '请输入您的姓名' },
                                { min: 2, message: '姓名至少2个字符' }
                            ]}
                            style={{ marginBottom: 10, flex: 1 }}
                        >
                            <Input placeholder="请输入您的姓名" className='ct-in-input' maxLength={10} style={{ width: '260px', height: 40 }} />
                        </Form.Item>
                        <Form.Item
                            name="company"
                            style={{ marginBottom: 10, flex: 1 }}
                        >
                            <Input placeholder="请输入您的公司名称" className='ct-in-input' maxLength={100} style={{ width: '260px', height: 40 }} />
                        </Form.Item>
                    </div>
                    <div className='flex gap-2.5 w-[530px]'>
                        <Form.Item
                            name="phone"
                            rules={[
                                { required: true, message: '请输入手机号' },
                                { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式' }
                            ]}
                            style={{ marginBottom: 10, flex: 1 }}
                        >
                            <Input placeholder="请输入您的手机号" className='ct-in-input' style={{ width: '260px', height: 40 }} />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: '请输入邮箱' },
                                { type: 'email', message: '请输入正确的邮箱格式' }
                            ]}
                            style={{ marginBottom: 10, flex: 1 }}
                        >
                            <Input placeholder="请输入您的邮箱" className='ct-in-input' style={{ width: '260px', height: 40 }} />
                        </Form.Item>
                    </div>
                    <div className='flex gap-2.5 w-[530px]'>
                        <Form.Item
                            name="description"
                            style={{ marginBottom: 10, flex: 1 }}
                        >
                            <Input.TextArea maxLength={200} placeholder="请输入您的需求" className='ct-in-input'
                                style={{ width: '530px', height: 150, resize: 'none' }} />
                        </Form.Item>
                    </div>
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
                            <Checkbox className='ct-in-checkbox'>{contactTextConfig.rule}</Checkbox>
                        </Form.Item>
                    </motion.div>
                    <Form.Item>
                        <motion.button
                            className='animated-button w-[530px] rounded-lg mt-8!'
                            type="button"
                            onClick={handleSubmit}
                        >
                            <span className="text-white font-[380] bt-text">{contactTextConfig.btnText}</span>
                        </motion.button>
                    </Form.Item>
                </Form>
            </motion.div>
        </div>
    </div >
}