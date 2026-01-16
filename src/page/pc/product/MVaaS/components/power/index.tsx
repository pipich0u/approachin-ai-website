import './index.css'
import powerImg from '@/assets/images/img/mvaas_power.png'
export const MVaaSPower = () => {

    return <div className='mvaas-power-container'>
        <div className='mvaas-power-content'>
            <div className='mvaas-power-title'>业务SLO驱动的算力规划师</div>
            <div className='mvaas-power-box'>
                <img src={powerImg} alt="" className='selectNone' />
            </div>
        </div>
    </div>
}