import { ClearOutlined } from "@ant-design/icons";
import '../index.less'

interface ModelLeftContentProps {
    tabList: any[],
    expandedMap: Record<number, boolean>,
    tabClass: (tab: any) => string,
    getTabStyle: (tab: any) => React.CSSProperties,
    handleClickTab: (tab: any) => void,
    clear: () => void,
    toggleExpand: (id: number) => void,
}
const ModelLeftContent = ({ tabList, expandedMap, tabClass, getTabStyle, handleClickTab, clear, toggleExpand }: ModelLeftContentProps) => {

    return <div className='model-content-left w-[280px] h-full px-5 py-5 bg-[#FFFFFF]'>
        <div className="flex items-center justify-between mb-3">
            <div className="text-t text-[#313135]">模型筛选</div>
            <ClearOutlined style={{ fontSize: '18px', color: '#808080', cursor: 'pointer' }} onClick={clear} />
        </div>
        <div className=" overflow-y-auto w-full h-[calc(100%-40px)] scrollbar-none">
            {
                tabList.map((item, index: number) => {
                    const isOpen = expandedMap[item.id] ?? false;
                    return <>
                        <div className={`model-content-left-tab flex flex-col justify-between mb-5 transition-all duration-300 
                                ${isOpen ? 'max-h-full overflow-visible' : 'max-h-[150px] overflow-hidden'}`} key={item.id + '_' + index}>
                            <div className="flex justify-between items-center w-full mb-2">
                                <div className="model-content-left-tab-item-title text-t !text-[12px] text-[#999999]">{item.title}</div>
                                {item.items.length > 6 && <div className="model-content-left-tab-item-open cursor-pointer"
                                    onClick={() => toggleExpand(item.id)}>{isOpen ? '收起' : '展开'}</div>}
                            </div>
                            <div className="gap-2 w-full flex flex-wrap">
                                {
                                    item.items.map((tab:any, tabIndex: number) => {
                                        return <div className={tabClass(tab)}
                                            style={{ ...getTabStyle(tab) }}
                                            key={tab.id + '_' + tabIndex}
                                            onClick={() => handleClickTab(tab)}
                                        >
                                            {tab.icon && <img src={tab.icon} alt="" className="w-[25px] mr-1 rounded-[50%]" />}
                                            <div>{tab.name}</div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </>
                })
            }
        </div>
    </div>;
}
export default ModelLeftContent;