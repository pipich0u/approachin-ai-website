
import './index.css'
import audio from '@/assets/audio/audio.mp4'

export default function PageQuestion() {

    return (
        <div className='qt-container'>
            <div className='qt-title'>AI落地是否还在为此烦恼？
                <video
                    className="video-bg"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={audio} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}