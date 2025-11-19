import ModelHeader from './components/modelHeader'
import ModelLeftContent from './components/modelLeftContent'
import ModelRightContent from './components/modelRightContent'
import { useModels } from '../hooks/useModels';
import OfflineModel from './components/offlineModel';
import ApiModal from './components/apiModal';
import { useEffect, useState } from 'react';
const ModelsRepository = () => {
    const { tabList, expandedMap, getModelsData, downloadModelInfo, tabClass, getTabStyle, handleClickTab, clearTab, toggleExpand, showModal, handleOk, isModalOpen, isApiModalOpen, setIsApiModalOpen, onSearch } = useModels();

    useEffect(() => {
        getModelsData();
    }, [])
    return <div className="model-repostory box-border w-full h-screen flex flex-col">
        <ModelHeader downloadModelInfo={downloadModelInfo} />
        <div className="model-content flex bg-[#FAFAFA] box-border w-full h-[calc(100%-80px)]">
            <ModelLeftContent
                tabList={tabList}
                expandedMap={expandedMap}
                tabClass={tabClass}
                getTabStyle={getTabStyle}
                handleClickTab={handleClickTab}
                clear={clearTab}
                toggleExpand={toggleExpand}
            />
            <ModelRightContent showModal={showModal} openApi={() => { setIsApiModalOpen(true) }} onSearch={onSearch} />
            <OfflineModel isModalOpen={isModalOpen} handleOk={handleOk} />
            <ApiModal isModalOpen={isApiModalOpen} handleOk={() => { setIsApiModalOpen(false) }} />
        </div>
    </div>;
}

export default ModelsRepository;