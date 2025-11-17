
import { CopyOutlined } from '@ant-design/icons';
import { textCopy } from '@/utils/transfrom';
import { Button, Modal, Steps } from 'antd';

interface OfflineModelProps {
    isModalOpen: boolean,
    handleOk: () => void,

}

const OfflineModel = (props: OfflineModelProps) => {
    const { isModalOpen, handleOk } = props;

    const CodeElement = () => {
        return <div>
            <div className='bg-[#F7F7F7] rounded-lg p-4 mb-2 text-[14px] mt-4 flex justify-between items-center'>
                <div className='text-[#999]  font-[330] '>ollama run gpt-tts</div>
                <div>
                    <CopyOutlined className='cursor-pointer' onClick={() => textCopy('ollama run gpt-tts')} />
                </div>
            </div>
        </div>
    }

    return <Modal
        title={
            <div>
                <div className='text-[#323232] font-[520]'>模型离线下载说明</div>
                <div className='text-[#999] font-[330] text-[14px]'>当前模型因网络原因无法在线下载，请按以下步骤进行离线下载</div>
            </div>
        }
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
        <div>
            <Steps
                progressDot
                current={2}
                direction="vertical"
                items={[
                    {
                        title: <div className='text-[14px] font-[330] text-[#999]'>第一步</div>,
                        description: <div className='text-[#333] font-[380]'>点击获取模型下载脚本，放到需要下载的文件夹</div>,
                    },
                    {
                        title: <div className='text-[14px] font-[330] text-[#999]'>第二步</div>,
                        description: <div className='text-[#333] font-[380]'>
                            <div> 打开模型下载未知的传输，粘贴一下命令并运行</div>
                            {CodeElement()}
                        </div>,
                    },
                    {
                        title: <div className='text-[14px] font-[330] text-[#999]'>第三步</div>,
                        description: <div className='text-[#333] font-[380]'>后端提供文本信息</div>,
                    },
                ]}
            />
        </div>
    </Modal>
};

export default OfflineModel;