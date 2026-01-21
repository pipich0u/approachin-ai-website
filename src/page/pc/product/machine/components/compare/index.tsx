import './index.css'
import img from '@/assets/images/img/machine_compare.png'
export const MachineCompare = () => {

    return <div className='mac_compare_container'>
        <div className='mac_compare_content'>
            <div className='mac_compare_title'>相比自建数据库功能更丰富</div>
            <img src={img} alt="" className='mac_compare_img'/>
        </div>
    </div>
}