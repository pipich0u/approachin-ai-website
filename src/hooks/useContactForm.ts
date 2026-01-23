import { useState } from 'react';
import { Form, message } from 'antd';
import { SubmitFormData } from '@/common/api';

export const useContactForm = () => {
    const [form] = Form.useForm();
    const [isShaking, setIsShaking] = useState(false);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            if (!values.remember) {
                setIsShaking(true);
                setTimeout(() => setIsShaking(false), 500);
                return;
            }
            const { remember, ...requestData } = form.getFieldsValue();
            const res = await SubmitFormData(requestData);
            if (res.data.success) {
                message.success('提交成功！我们会尽快与您联系');
                form.resetFields();
            }
        } catch (error) {
            console.error('表单验证失败:', error);
        }
    };

    return {
        form,
        isShaking,
        handleSubmit
    };
};
