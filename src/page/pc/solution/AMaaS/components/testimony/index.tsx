import './index.css'

export const AMaasTestimony = () => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,15,15,15,15];
    return <div className='amaas-testimony-container'>
        <div className='amaas-testimony-content'>
            <div className='amaas-testimony-title'>客户证言</div>
            <div className='amaas-testimony-desc'>将企业用户算力与技术起步门槛降低10倍</div>

            <div className='amaas-testimony-scroll'>
                <div className='testimony-scroll-container'>
                    <div className='testimony-scroll-track'>
                        {images.map((item, index) => (
                            <div className='testimony-items'>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
}