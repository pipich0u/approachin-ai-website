import './index.css'

export const SolutionLogos = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    const list = [...arr, ...arr]

    const logos = import.meta.glob(
        '@/assets/images/logo/*.png',
        { eager: true, import: 'default' }
    ) as Record<string, string>

    const getLogo = (num: number) =>
        logos[`/src/assets/images/logo/partner${num}.png`]

    return (
        <div className="slt-logos-container">
            <div className="slt-logos-scroll">
                <div className="slt-logos-track">
                    {list.map((item, index) => (
                        <div className="slt-logos-item" key={index}>
                            <img src={getLogo(item)} alt={`partner-${item}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}