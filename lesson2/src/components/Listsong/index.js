import './style.css'

function List(props) {
    return (
        <div className="listsong">
            <div className='img'>
                <img src={props.img} alt="" />

            </div>
            <div className="infor">
                <h4 className="namesong">{props.namesong}</h4>
                <p className="singer">{props.singer}</p>
                <p className="time">{props.time}</p>
            </div>
        </div>
    )
}

export default List