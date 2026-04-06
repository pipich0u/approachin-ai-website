import './index.css'

const items = [
    { name: '算力管理', color: '#3D6DFC', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="6" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="6" y1="12" x2="11" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="14" cy="12" r="1" fill="currentColor"/>
        </svg>
    )},
    { name: '数据标注', color: '#10B981', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4h12v12H4z" stroke="currentColor" strokeWidth="1.5" rx="1"/>
            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )},
    { name: '流程编排', color: '#7B2FFF', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="5" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="15" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 6v4M10 10l-5 4M10 10l5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )},
    { name: '代码开发', color: '#F59E0B', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 6L3 10l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 3L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )},
    { name: '模型训练', color: '#EF4444', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 14l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 6h3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )},
    { name: '模型微调', color: '#6366F1', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M15 3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )},
    { name: '定时调度', color: '#0EA5E9', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )},
    { name: 'A/B实验', color: '#EC4899', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="3" width="7" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="11" y="3" width="7" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <text x="5.5" y="12" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="600">A</text>
            <text x="14.5" y="12" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="600">B</text>
        </svg>
    )},
    { name: '推理上线', color: '#14B8A6', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )},
]

export const StudioScrollBar = () => {
    const list = [...items, ...items, ...items]
    return (
        <div className="studio-scroll-container">
            <div className="studio-scroll-track">
                {list.map((item, index) => (
                    <div className="studio-scroll-item" key={index}>
                        <div className="studio-scroll-icon">
                            {item.icon}
                        </div>
                        <span className="studio-scroll-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
