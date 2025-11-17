import { modelTabColor } from '../index.config';
import { useState } from "react";
import Deep from '@/assets/svg/Deepseek.svg';
import Qw from '@/assets/svg/qw.svg';
import classNames from "classnames";
export const useModels = () => {

    const base = 'model-content-left-tab-item-btn w-[116px] h-[36px] rounded-[8px] flex justify-center items-center text-d text-[#7B7A85]'

    const [activeBtn, setActiveBtn] = useState<string[]>([''])
    const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApiModalOpen, setIsApiModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const onSearch=(value: string)=>{
        console.log('search value:', value);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const [tabList, setTabList] = useState([
        {
            id: 1,
            title: "供应商列表",
            category: "suppliers",
            items: [
                { id: "glm", name: "GLM", icon: Deep },
                { id: "tongyi", name: "通义千问", icon: Qw },
                { id: "deepseek", name: "DeepSeek", icon: Deep },
                { id: "meta", name: "Meta", icon: Deep },
                { id: "meta1", name: "Meta", icon: Deep },
                { id: "meta2", name: "Meta", icon: Deep },
                { id: "meta3", name: "Meta", icon: Deep },
                { id: "meta4", name: "Meta", icon: Deep },
                { id: "meta5", name: "Meta", icon: Deep },
            ]
        },
        {
            id: 2,
            title: "模型类型",
            category: "types",
            items: [
                { id: "types1", name: "文本生成" },
                { id: "types2", name: "图片理解" },
                { id: "types3", name: "图片生成" },
                { id: "types4", name: "语音识别" },
                { id: "types5", name: "语音生成" },
                { id: "types6", name: "文本调试" },
            ]
        },
        {
            id: 3,
            title: "参数类型",
            category: "parameters",
            items: [
                { id: "parameters1", name: "10B以下", num: [0, 10] },
                { id: "parameters2", name: "10-50B", num: [10, 50] },
                { id: "parameters3", name: "50-100B", num: [50, 100] },
                { id: "parameters4", name: "100B以上", num: [100, Infinity] },
            ]
        },
        // {
        //     id: 4,
        //     title: "模型状态",
        //     category: "status",
        //     items: [
        //         { id: "status1", name: "服务中", type: 'serving' },
        //         { id: "status2", name: "可部署", type: 'deployable' },
        //         { id: "status3", name: "更新中", type: 'updating' },
        //         { id: "status4", name: "可更新", type: 'updatable' },
        //         { id: "status5", name: "异常", type: 'error' },
        //         { id: "status6", name: "未下载", type: 'not' },
        //     ]
        // },
        {
            id: 5,
            title: "模型精度",
            category: "states",
            items: [
                { id: "1", name: "AWQ-int4", },
                { id: "2", name: "GPTQ-int4", },
                { id: "3", name: "GPTQ-int8", },
                { id: "4", name: "FP8", },
                { id: "5", name: "FP16", },
                { id: "6", name: "BF16", },
                { id: "7", name: "FP32", },
            ]
        },
        // {
        //     id: 6,
        //     title: "模型类别",
        //     category: "modelCategory",
        //     items: [
        //         { id: "modelCategory1", name: "官方模型" },
        //         { id: "modelCategory2", name: "私有模型", type: 'private' },
        //     ]
        // },
    ])

    const colorMap = modelTabColor.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
    }, {} as Record<string, { color: string; bg: string }>);

    const tabClass = (tab: any) => {
        return classNames(
            base,
            {
                'model-btn-active':
                    activeBtn.includes(tab.id),
            }
        );
    };
    const getTabStyle = (tab: any) => {
        if (!tab.type) return {};

        const c = colorMap[tab.type];
        if (!c) return {};
        return {
            color: c.color,
            backgroundColor: c.bg,
        };
    };
    const handleClickTab = (tab: any) => {
        setActiveBtn((prev) => {
            if (prev.includes(tab.id)) {
                return prev.filter((i) => i !== tab.id);
            }
            return [...prev, tab.id];
        });
    };
    const clearTab = () => {
        setActiveBtn([]);
    }
    const toggleExpand = (id: number) => {
        setExpandedMap((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    return {
        tabList,
        activeBtn,
        expandedMap,
        isModalOpen,
        isApiModalOpen,
        setIsApiModalOpen,
        tabClass,
        getTabStyle,
        handleClickTab,
        clearTab,
        showModal,
        handleOk,
        onSearch,
        toggleExpand,
    };
}
