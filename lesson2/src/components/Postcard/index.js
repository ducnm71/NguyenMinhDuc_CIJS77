import './style.css'

function Postcard (props) {
    return (
        <div className='container2'>
            <div className='pc-navi'>
                <h1>Bảng Xếp Hạng Postcard</h1>
                <p>TẤT CẢ</p>
                <i class="bi bi-chevron-right"></i>
            </div>
                
            <div className='PC'>
                <div className='PC-left'>
                    {props.left}
                </div>
                
                <div className='PC-right'>
                    {props.right}
                </div>
            </div>
        </div>
    )
}

export default Postcard