import './style.css'
import 'boxicons'
import { useState } from 'react';


function Card(props) {
  const [selected, setSelected] = useState(true)

    return (
        <div>
            <div className="card">
                <h1>Mới Phát Hành</h1>
                <div className="button">
                    <button onClick={()=> setSelected(!selected)} className={selected ? "song active" : "song"}>{props.song}</button>
                    <button onClick={()=> setSelected(!selected)} className={!selected ? "album active" : "album"}>{props.album}</button>
                    <div className="all">
                        <p>TẤT CẢ</p>
                        <box-icon name='chevron-right'></box-icon>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}


export default Card
