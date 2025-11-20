import { Button } from "antd";
import '../index.less'
import { IconFont } from "@/utils/antdUtils";
import logo from '@/assets/svg/logo-black.svg';
import { memo } from "react";

interface ModelHeaderProps {
    downloadModelInfo: () => void,
}


const ModelHeader = memo(({ downloadModelInfo }: ModelHeaderProps) => {

    return <div className="model-header flex justify-between items-center py-[15px] px-5 h-20">
        <div className="model-logo w-[280px]">
            <img src={logo} alt="" className="w-28 h-8" />
        </div>
        <div className="flex justify-between items-center flex-1">
            <div className="model-header-left flex flex-col items-start justify-center">
                <div className="flex items-center">
                    <div className="text-h text-[#313135] mr-1 font-[450]">模型仓库</div>
                    <div className="text-[12px] text-[#313135] font-[305]">
                        V3.0
                    </div>
                </div>
                <div className="text-d text-[#C8C8D0]">模型仓库汇集多种AI模型，一站式支持模型管理与应用集成</div>
            </div>
            <div className="model-header-right">
                <Button
                    onClick={downloadModelInfo}
                    style={{
                        background: '#6951FF',
                        color: 'white'
                    }}>导出模型信息</Button>
            </div>
        </div>

    </div>;
})

export default ModelHeader;