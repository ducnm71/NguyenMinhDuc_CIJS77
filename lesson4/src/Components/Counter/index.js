import {useState} from 'react'

function CounterFC () {
    const [count, setCount] = useState(0)
    const clickCount = () => {
        setCount(count+1)
    }
    return (
        <div className="Counter">
            <h3>{count}</h3>
            <button onClick={clickCount}>Increase</button>
        </div>
    )
}

export default CounterFC