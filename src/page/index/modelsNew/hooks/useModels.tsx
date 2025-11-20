import { modelTabColor } from '../index.config';
import { useState } from "react";
import Deep from '@/assets/svg/Deepseek.svg';
import Qw from '@/assets/svg/qw.svg';
import classNames from "classnames";
import { getModels, modelExportApi, getModelApi, filterTagsApi, ModelStepInfoApi, searchModels } from '@/common/api';
import { message } from 'antd';
interface setModelStepName {
    download_command: string;
    update_command: string;
}
export const useModels = () => {

    const base = 'model-content-left-tab-item-btn w-[116px] h-[36px] rounded-[8px] flex justify-center items-center text-d text-[#7B7A85]'

    const [activeBtn, setActiveBtn] = useState<string[]>([''])
    const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApiModalOpen, setIsApiModalOpen] = useState(false);
    const [modelList, setModelList] = useState([]);
    const [ModelStepName, setModelStepName] = useState<setModelStepName>();
    const [apiModelName, setApiModelName] = useState();
    const [filters, setFilters] = useState<any>({});
    const colorMap = modelTabColor.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
    }, {} as Record<string, { color: string; bg: string }>);
    const updateSearch = (value: string) => {
        setFilters((prev: any) => ({
            ...prev,
            name: value ? { FUZZY: value } : undefined
        }));
    };

    const onSearch = async (value: string) => {
        updateSearch(value);
        try {
            const response = await searchModels(filters);
            console.log(response);
            setModelList(response.data.items);
        } catch (err) {

        }
    }


    const handleOk = () => {
        setIsModalOpen(false);
    };
    const [tabList, setTabList] = useState<any[]>([])

    const downloadModelInfo = async () => {
        try {
            const response = await modelExportApi();

            const blob = new Blob([JSON.stringify(response, null, 2)], {
                type: 'application/json'
            });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'model-metadata.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };

    const getModelsData = async () => {
        try {
            const response = await getModels();
            setModelList(response.data.items);
        } catch (error) {
            console.error('Error fetching models data:', error);
        }
    };
    const getFilterTags = async () => {
        try {
            const response = await filterTagsApi();
            const converted = convertNewFilterDataToTabs(response.data);
            setTabList(converted);
        } catch (error) {
            console.error('Error fetching filter tags data:', error);
        }
    }

    const showModel = async (value: string) => {
        setIsModalOpen(true);
        try {
            const response = await ModelStepInfoApi(value);
            setModelStepName(response.data);
        } catch (err) {

        }
    }
    const openApi = async (value: string) => {
        setIsApiModalOpen(true)
        try {
            const response = await getModelApi(value);
            setApiModelName(response.data);
        } catch (err) {

        }
    }

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

    const clearTab = () => {
        setActiveBtn([]);
    }
    const toggleExpand = (id: number) => {
        setExpandedMap((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    const downloadBashInfo = () => {
        try {

            window.open(location.origin + '/api/model-metadata/download_script');
            message.success('下载模型脚本成功');
        } catch (error) {

        }
    }
    function convertNewFilterDataToTabs(data: Record<string, any>) {
        let idCounter = 1;
        const tabs: any[] = [];

        Object.entries(data).forEach(([title, item]) => {
            const { type, filter_key, tags } = item;
            const category = filter_key ?? title;

            const tab = {
                id: idCounter++,
                title,
                category,
                items: tags.map((tag: any) => {
                    const itemData: any = {
                        id: tag.filter_value || tag.tag, // 确保有唯一 id
                        name: tag.tag,
                        icon: tag.icon,
                        type,
                        category,
                    };

                    if (type === "MULTI_EQUAL") {
                        itemData.filter_value = tag.filter_value;
                    }

                    if (type === "MULTI_RANGE") {
                        const match = tag.filter_value?.match(/\((\d+),\s*(\d+)\)/);
                        if (match) {
                            itemData.num = [Number(match[1]), Number(match[2])];
                        } else if (tag.num) {
                            itemData.num = tag.num;
                        } else {
                            itemData.num = [0, Infinity];
                        }
                    }

                    return itemData;
                }),
            };

            tabs.push(tab);
        });

        return tabs;
    }
    const handleClickTab = (key: string, tab: any) => {
        setActiveBtn((prev) => {
            if (prev.includes(tab.id)) {
                return prev.filter((i) => i !== tab.id);
            }
            return [...prev, tab.id];
        });
        toggleFilter(key, tab);
    };
    const toggleFilter = (category: string, item: any) => {
        setFilters((prev: any) => {
            const categoryData = prev[category] ?? {};
            let newCategoryData;

            // MULTI_EQUAL
            if (item.type === "MULTI_EQUAL") {
                const list = new Set(categoryData["MULTI_EQUAL"] ?? []);
                if (list.has(item.filter_value)) list.delete(item.filter_value);
                else list.add(item.filter_value);

                newCategoryData = list.size ? { MULTI_EQUAL: Array.from(list) } : undefined;
            }

            // MULTI_RANGE
            if (item.type === "MULTI_RANGE") {
                const ranges: [number, number][] = categoryData["MULTI_RANGE"] ?? [];
                const exists = ranges.find((r) => r[0] === item.num[0] && r[1] === item.num[1]);
                const newRanges = exists
                    ? ranges.filter((r) => r[0] !== item.num[0] || r[1] !== item.num[1])
                    : [...ranges, item.num];

                newCategoryData = newRanges.length ? { MULTI_RANGE: newRanges } : undefined;
            }

            const newFilters = { ...prev, [category]: newCategoryData };

            leftSearchModels(newFilters);

            return newFilters;
        });
    };

    // 修改 leftSearchModels 接收 filters 参数
    const leftSearchModels = async (currentFilters?: any) => {
        try {
            const response = await searchModels(currentFilters || filters);
            console.log(response);
            setModelList(response.data.items);
        } catch (err) { }
    };
    return {
        tabList,
        activeBtn,
        expandedMap,
        modelList,
        ModelStepName,
        isModalOpen,
        apiModelName,
        isApiModalOpen,
        setIsApiModalOpen,
        tabClass,
        openApi,
        showModel,
        getTabStyle,
        handleClickTab,
        clearTab,
        handleOk,
        onSearch,
        toggleExpand,
        getModelsData,
        getFilterTags,
        downloadModelInfo,
        downloadBashInfo,
    };
}
