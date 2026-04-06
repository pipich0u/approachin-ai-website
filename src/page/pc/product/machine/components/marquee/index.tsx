import './index.css'

const items = [
    '算力门槛降低10倍！',
    '利用率高达80%',
    'Token产能提升50%',
    '运维成本降低80%',
    'SLO满足度99.9%',
]

export const MachineMarquee = () => {
    const list = [...items, ...items, ...items, ...items]
    return (
        <div className="mc-marquee">
            <div className="mc-marquee-track">
                {list.map((text, index) => (
                    <span className="mc-marquee-item" key={index}>
                        <span className="mc-marquee-dot" />
                        {text}
                    </span>
                ))}
            </div>
        </div>
    )
}