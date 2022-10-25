import "./style.css";
import {imgs} from '../../stores/data'



function List(props) {
    return (
        <div className="listsong">
            {imgs.map((item, index) => {
            return (
                <div className="list" key={index}>
                    <div className="image">
                        <img src={item.img} alt=''/>
                    </div>
                    <div className="in4">
                        <h4>{item.name}</h4>
                        <p>{item.singer}</p>
                        <p>{item.time}</p>
                    </div>

                </div>
            )
          })}
        </div>
    );
}


export default List;
