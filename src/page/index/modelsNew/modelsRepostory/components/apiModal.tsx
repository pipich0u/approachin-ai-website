
import { CopyOutlined } from '@ant-design/icons';
import { textCopy } from '@/utils/transfrom';
import { Button, Modal, Radio, RadioChangeEvent, Steps, Tooltip } from 'antd';
import { useState } from 'react';

interface OfflineModelProps {
    isModalOpen: boolean,
    handleOk: () => void,

}

const ApiModal = (props: OfflineModelProps) => {
    const { isModalOpen, handleOk } = props;
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };
    const CodeElement = (value: string) => {
        return <div>
            <div className='bg-[#F7F7F7] rounded-lg p-4 mb-2 text-[14px] mt-4 flex justify-between items-center relative'>
                <pre className="whitespace-pre-wrap text-sm font-mono">
                    {value}
                </pre>
                <div className=' absolute right-2 top-2'>
                    <Tooltip title="复制" color='#fff'>
                        <CopyOutlined className='cursor-pointer' onClick={() => { textCopy('ollama run gpt-tts'); }} />
                    </Tooltip>
                </div>
            </div>
        </div>
    }

    return <Modal
        title={<div className='text-[#323232] font-[520]'>API参考</div>}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        footer={
            <Button style={{
                background: '#6951FF',
                color: 'white'
            }} onClick={handleOk}>
                关闭
            </Button>
        }
        width={588}
    >
        <div className='flex flex-col'>
            <div className='model-name mb-8'>
                <div className='text-[#323232] font-[550]'>模型名称</div>
                <div className='text-[14px] text-[#333]'>通义千问3-Max-Preview</div>
            </div>
            <div className='model-switch mb-8'>
                <div className='text-[#323232] font-[550]'>选择协议</div>
                <div className='text-[14px] text-[#333]'>
                    <Radio.Group
                        onChange={onChange}
                        value={value}
                        options={[
                            {
                                value: 1,
                                className: 'option-1 mr-[30px]!',
                                label: (
                                    <div>OpenAI</div>
                                ),
                            },
                            {
                                value: 2,
                                className: 'option-2 mr-[30px]!',
                                label: (
                                    <div>Ollama</div>
                                ),
                            },
                            {
                                value: 3,
                                className: 'option-3 mr-[30px]!',
                                label: (
                                    <div>Deepseek</div>
                                ),
                            },
                            {
                                value: 4,
                                className: 'option-4',
                                label: (
                                    <div>通义千问</div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='model-switch mb-8'>
                <div className='text-[#323232] font-[550]'>选择调用方式</div>
                <div className='text-[14px] text-[#333]'>
                    <Radio.Group
                        onChange={onChange}
                        value={value}
                        options={[
                            {
                                value: 1,
                                className: 'option-1 mr-[30px]!',
                                label: (
                                    <div>Python</div>
                                ),
                            },
                            {
                                value: 2,
                                className: 'option-2 ',
                                label: (
                                    <div>Curl</div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='model-code mb-8' >
                <div className='text-[#323232] font-[550]'>示例代码</div>
                <div>{CodeElement('curl -X POST "https://api.example.com/v1/models/model-id/generate"')}</div>
            </div>
        </div>
    </Modal>
};

export default ApiModal;