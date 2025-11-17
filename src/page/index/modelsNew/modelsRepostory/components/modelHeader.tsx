import { Button } from "antd";
import '../index.less'
import { IconFont } from "@/utils/antdUtils";
import logo from '@/assets/svg/logo-black.svg';
const ModelHeader = () => {

    return <div className="model-header flex justify-between items-center py-[15px] px-5 h-20">
        <div className="model-logo">
            <img src={logo} alt="" className="w-28 h-8" />
        </div>
        <div className="model-header-left flex flex-col items-center justify-center">
            <div className="text-h text-[#313135]">模型仓库</div>
            <div className="text-d text-[#808080]">模型仓库汇集多种AI模型，一站式支持模型管理与应用集成</div>
        </div>
        <div className="model-header-right">
            <Button style={{
                background: '#6951FF',
                color: 'white'
            }}>导出模型信息</Button>
        </div>
    </div>;
}

export default ModelHeader;