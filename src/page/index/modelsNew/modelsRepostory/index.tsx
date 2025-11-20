import ModelHeader from './components/modelHeader'
import ModelLeftContent from './components/modelLeftContent'
import ModelRightContent from './components/modelRightContent'
import { useModels } from '../hooks/useModels';
import OfflineModel from './components/offlineModel';
import ApiModal from './components/apiModal';
import { useEffect, useState } from 'react';
const ModelsRepository = () => {
    const { tabList, expandedMap, modelList, ModelStepName
        , getModelsData, getFilterTags, downloadModelInfo,page,
        openApi, showModel, tabClass, getTabStyle, handleClickTab, clearTab,
        toggleExpand, handleOk, isModalOpen, isApiModalOpen, apiModelName,
        setIsApiModalOpen, onSearch, downloadBashInfo, loadMore, } = useModels();

    useEffect(() => {
        getModelsData();
        getFilterTags();
    }, [])

    return <div className="model-repostory box-border w-full h-screen flex flex-col">
        <ModelHeader downloadModelInfo={downloadModelInfo} />
        <div className="model-content flex bg-[#FAFAFA] box-border w-full h-[calc(100%-80px)]">
            <ModelLeftContent
                tabList={tabList}
                expandedMap={expandedMap}
                // toggleMultiEqual={toggleMultiEqual}
                tabClass={tabClass}
                getTabStyle={getTabStyle}
                handleClickTab={handleClickTab}
                clear={clearTab}
                toggleExpand={toggleExpand}
            />
            <ModelRightContent page={page} loadMore={loadMore} showModal={showModel} modelList={modelList} openApi={openApi} onSearch={onSearch} />
            <OfflineModel downloadBashInfo={downloadBashInfo} isModalOpen={isModalOpen} handleOk={handleOk} ModelStepName={ModelStepName} />
            <ApiModal isModalOpen={isApiModalOpen} handleOk={() => { setIsApiModalOpen(false) }} apiModelName={apiModelName} />
        </div>
    </div>;
}

export default ModelsRepository;