
import './index.css'


export default function PageConsult() {

    return (
        <div className='consult-container'>
            <div className='consult-title'>助力AI进入普惠时代！</div>
            <div className='consult-desc'>为企业级用户的 AI 落地提供从算力破局到价值交付的全链路解决方案</div>

            <button className="consult-button">
                <span className="consult-text">立即咨询</span>
                <span className="consult-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 5 15 15"
                        fill="none"
                    >
                        <path xmlns="http://www.w3.org/2000/svg" d="M2.00014 13.0001L2 11.0002H18.1719L14.2222 7.05044L15.6364 5.63623L22.0004 12.0002L15.6364 18.3642L14.2222 16.9499L18.172 13.0002L2.00014 13.0001Z" fill="#6C3AE1" />
                    </svg>
                </span>
            </button>

        </div>
    )
}