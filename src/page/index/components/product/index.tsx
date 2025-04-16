import './index.css'
import line from '../../../../assets/images/line.png'
import productImg from '../../../../assets/images/product.png'
const productFeatures = [
    {
        title: '首创以存换算全系统推理架构',
        texts: ['成本降低 10 倍', '响应延迟降低 20 倍']
    },
    {
        title: '软硬一体交付 开箱即用',
        texts: ['多种算力配置，兼容业界主流大模型的不同参数;', '丰富的 API 接口，提供使用页面，并内置搜索、AI应用功能']
    },
    {
        title: '企业专属大模型推理平台',
        texts: ['私有化部署，数据安全与隐私有保障轻松构建企业的专属知识大脑']
    },

];

export default function PageProduct() {
    return (
        <div className="section section-2">
             <div className='center-shadow'></div>
            <div className='product-box'>
                <div className='product-box-left'>
                    <div className='product-box-left-title'>
                        大模型知识<span>推理一体机</span><br />
                        提供企业专属推理平台
                    </div>
                    <div className='line-pro'> <img src={line} alt="" /> </div>
                    <div className='product-box-left-content'>
                        {productFeatures.map((feature, index) => (
                            <div key={index + ''} className='product-content-item'>
                                <div className='product-content-item-title'>
                                    {feature.title}
                                </div>
                                {feature.texts.map((text, textIndex) => (
                                    <div key={textIndex + ''} className='product-content-item-text'>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='product-box-right'>
                    <div className='product-box-right-img'>
                        <img src={productImg} alt="" />
                    </div>
                </div>
            </div>
           
        </div>
    );
}