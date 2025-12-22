import { CopyOutlined } from '@ant-design/icons';
import { textCopy } from '@/utils/transfrom';
import { Button, Modal, Radio, Tooltip } from 'antd';
import { useState } from 'react';

interface OfflineModelProps {
    isModalOpen: boolean;
    handleOk: () => void;
    apiModelName: any;
}

const ApiModal = (props: OfflineModelProps) => {
    const { isModalOpen, handleOk, apiModelName } = props;

    // 当前选中的协议，如：openai
    const [protocol, setProtocol] = useState<string>('');
    // 当前选中的调用方式：curl | python
    const [apiType, setApiType] = useState<string>('');

    /** 模态框打开时初始化 */
    const onModalOpen = () => {
        if (!apiModelName) return;

        // 初始化默认值（取第一项）
        const firstProtocol = apiModelName.protocols?.[0] || '';
        const firstApiType = apiModelName.api_types?.[0] || '';

        setProtocol(firstProtocol);
        setApiType(firstApiType);
    };

    /** 选择协议 */
    const onProtocolChange = (e: any) => {
        const newProtocol = e.target.value;
        setProtocol(newProtocol);
    };

    /** 选择调用方式 */
    const onApiTypeChange = (e: any) => {
        const newType = e.target.value;
        setApiType(newType);
    };

    /** 得到当前示例代码 */
    const getCurrentTemplate = () => {
        if (!protocol || !apiType) return '';
        return apiModelName?.api_templates?.[protocol]?.[apiType] || '';
    };

    const CodeElement = (value: string) => {
        return (
            <div className='bg-[#F7F7F7] rounded-lg p-4 mb-2 text-[14px] mt-4 flex justify-between items-center relative'>
                <pre className="whitespace-pre-wrap text-sm font-mono">
                    {value}
                </pre>
                <div className='absolute right-2 top-2'>
                    <Tooltip title="复制" color='#fff'>
                        <CopyOutlined
                            className='cursor-pointer'
                            onClick={() => textCopy(value)}
                        />
                    </Tooltip>
                </div>
            </div>
        );
    };

    return (
        <Modal
            title={<div className='text-[#323232] font-[520]'>API参考</div>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleOk}
            afterOpenChange={(open) => open && onModalOpen()}
            footer={
                <Button
                    style={{ background: '#6951FF', color: 'white' }}
                    onClick={handleOk}
                >
                    关闭
                </Button>
            }
            width={588}
        >
            <div className='flex flex-col'>

                {/* 模型名称 */}
                <div className='model-name mb-8'>
                    <div className='text-[#323232] font-[550]'>模型名称</div>
                    <div className='text-[14px] text-[#333]'>
                        {apiModelName?.model_name || '未传名称'}
                    </div>
                </div>

                {/* 协议选择 */}
                <div className='model-switch mb-8'>
                    <div className='text-[#323232] font-[550]'>选择协议</div>
                    <Radio.Group
                        className='mt-2'
                        value={protocol}
                        onChange={onProtocolChange}
                    >
                        {apiModelName?.protocols?.map((p: string) => (
                            <Radio key={p + ''} value={p} className='mr-[30px]'>
                                {p}
                            </Radio>
                        ))}
                    </Radio.Group>
                </div>

                {/* 调用方式选择 */}
                <div className='model-switch mb-8'>
                    <div className='text-[#323232] font-[550]'>选择调用方式</div>
                    <Radio.Group
                        className='mt-2'
                        value={apiType}
                        onChange={onApiTypeChange}
                    >
                        {apiModelName?.api_types?.map((t: string) => (
                            <Radio key={t} value={t} className='mr-[30px]'>
                                {t}
                            </Radio>
                        ))}
                    </Radio.Group>
                </div>

                {/* 示例代码 */}
                <div className='model-code mb-8'>
                    <div className='text-[#323232] font-[550]'>示例代码</div>
                    {CodeElement(getCurrentTemplate())}
                </div>

            </div>
        </Modal>
    );
};

export default ApiModal;
