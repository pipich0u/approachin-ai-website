import { Button, Input, Tooltip } from 'antd';
import type { GetProps } from 'antd';
const { Search } = Input;
import Deep from '@/assets/svg/Deepseek.svg';
type SearchProps = GetProps<typeof Input.Search>;
import '../index.less'
import { IconFont } from '@/utils/antdUtils';
import { useState } from 'react';
interface ModelRightContentProps {
    showModal: () => void,
    openApi: () => void,
    onSearch: (value: string) => void,
}
const ModelRightContent = (props: ModelRightContentProps) => {
    const { showModal, openApi, onSearch } = props;
    const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const loadMore = () => {
        const newArr = [...arr];
        const len = newArr.length;
        for (let i = len + 1; i <= len + 12; i++) {
            newArr.push(i);
        }
        setArr(newArr);
    }

    const btnBase = 'flex items-center text-[12px] model-content-card-btn-item h-7 justify-center px-1'

    return <div className='flex-1 p-[18px] box-border w-[calc(100%-280px)] h-full'>
        <div className="model-content-right flex  items-center justify-between w-full mb-5">
            <div className='text-t flex'>
                <div>模型数</div>
                <div className='text-[#ccc]'>&nbsp;|&nbsp;134个</div>
            </div>
            <div>
                <Search placeholder="输入模型名称" onSearch={(value) => { onSearch(value) }} style={{ width: 329 }} allowClear />
            </div>
        </div>
        <div className='overflow-y-auto h-[calc(100%-70px)] scrollbar'>
            <div className='flex flex-wrap gap-5'>
                {
                    arr.map((item) => {
                        return <div key={item + ''} className='model-content-right-card w-[385px] h-[200px] rounded-[10px] p-3'>
                            <div className='flex h-[50px]'>
                                <img src={Deep} alt="" style={{ width: "50px", height: '50px', marginRight: '10px' }} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex justify-between items-center  w-full mb-2'>
                                        <div className='text-[#313135] font-[550]'>DeepSeek V2</div>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <div className='model-content-card-tag'>文本生成</div>
                                        <div className='model-content-card-tag'>256K</div>
                                        <div className='model-content-card-tag'>20K</div>
                                        <div className='model-content-card-tag'>AWQ-int4</div>
                                    </div>
                                </div>
                            </div>
                            <Tooltip color='#fff' title="DeepSeek是2023年成立于杭州的人工智能公司，由幻方量化创立并投资，致力于通用人工智能技术研发，推出了DeepSeek Coder、DeepSeek LLM、DeepSeek V3、DeepSeek R1等一系列开源模型，涵盖代码生成、">
                                <div className='px-2 ellipsis-2 mb-[5px] mt-[13px] text-[#7B7A85] text-[14px] font-[380]'>
                                    DeepSeek是2023年成立于杭州的人工智能公司，由幻方量化创立并投资，致力于通用人工智能技术研发，推出了DeepSeek Coder、DeepSeek LLM、DeepSeek V3、DeepSeek R1等一系列开源模型，涵盖代码生成、
                                </div>
                            </Tooltip>
                            <div className='font-light pb-2.5 px-2 text-[12px] flex justify-between items-center text-[#B3B2B2]'>
                                <div>通义</div>
                                <div>2024-05-08更新</div>
                            </div>
                            <div className='model-content-card-btn flex justify-between items-center px-2 py-1'>
                                <Button type='text' className={btnBase}>
                                    <IconFont
                                        className='model-content-card-btn-item-icon'
                                        type='icon-mx'
                                        style={{ fontSize: "18px" }}
                                    />
                                    <div>模型详情</div>
                                </Button>
                                <Button type='text' className={btnBase} onClick={openApi}>
                                    <IconFont
                                        className='model-content-card-btn-item-icon'
                                        type='icon-api'
                                        style={{ fontSize: "18px" }}
                                    />
                                    <div>API参考</div>
                                </Button>
                                <Button type='text' onClick={showModal} className={btnBase}>
                                    <IconFont
                                        className='model-content-card-btn-item-icon'
                                        type='icon-qxz'
                                        style={{ fontSize: "18px" }}
                                    />
                                    <div>去下载</div>
                                </Button>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='flex items-center justify-center mt-8 text-[12px] font-[330]  text-[#666666]' >
                <div className='cursor-pointer' onClick={loadMore}>展示更多</div>
            </div>
        </div>
    </div>;
}
export default ModelRightContent;
