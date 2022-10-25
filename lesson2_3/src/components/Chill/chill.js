import './chill.css'
import { chill_img } from '../../stores/data'

function Chill(){

    return (
        <div className='container'>
            <h1>Chờ Iu Chiu </h1>
            <div className="template">
            {chill_img.map((item, index) => {
               return(
                    <div className='item'>
                        <div className='img'>
                            <img src={item.img} alt='' />
                        </div>
                        <div className='wrap'>
                            <p>{item.title}</p>
                            <span>{item.content}</span>
                        </div>
                    </div>
               ) 
            })}
            </div>
        </div>
    )
}
export default Chill