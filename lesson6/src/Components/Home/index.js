import './style.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react';

function Home() {
    const month = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const years = [2021,2022,2023,2024]
    const defaultYear = years[1]
    const dataChart = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    // const dataDate = [
        
    
    const [data, setData] = useState([
        {
            date: '2022-01-16',
            name: 'Some Books',
            amount: ' 50'
        },
        {
            date: '2022-10-10',
            name: 'Electricity',
            amount: ' 75'   
        },
        {
            date: '2022-05-8',
            name: 'New Bike',
            amount: ' 100'
        }
    ])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const updateData = [...data,datum]
        console.log(datum);
        setData(updateData)
        console.log(data);
    }
    const [selected,setSelected] = useState(true)
    const [datum, setDatum] = useState(
{   date: '',
    name: '',
    amount: ''
})
 
const process = (month) => {
    let sum = 0
    for(let i = 0; i < data.length; i++){
        if(new Date(data[i].date).getMonth() === month){
            sum+= parseInt(data[i].amount)
        }
    }
    return {height:sum + '%'}
}

const filterYear = (year) => {
   const updateYear = data.filter((item) => new Date(item.date).getFullYear() === year)
   setData(updateYear)
}
    return (
        <div className='Home'>
            <div className='header'>
            {selected ? <div className='header1'><button onClick={() => setSelected(false)} className='addbtn'>ADD NEW EXPENSE</button></div> : 
            <div className='header2'>
                <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td><label>Name</label></td>
                                <td><input type='text' placeholder='Enter name here ...' required onChange={(e) => setDatum({...datum,name: e.target.value })}/></td>
                            </tr>
                            <tr>
                                <td><label>Amount</label></td>
                                <td><input type='text' placeholder='Enter amount here ...' required onChange={(e) => setDatum({...datum,amount: e.target.value })}/></td>
                            </tr>
                            <tr>
                                <td><label>Date</label></td>
                                <td><input type='date' required onChange={(e) => setDatum({...datum,date: e.target.value })}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='btn'>
                                    <button  className="add">ADD</button>
                                    <button className='cancel' onClick={(e) => {
                                        e.preventDefault()
                                        setSelected(true)
                                    }}>CANCEL</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
        }   
        </div>
            <div  className={selected ? 'Container1' : 'Container2'}>
                <div className='Filter'>
                    <h1>Filter by year</h1>
                    <Dropdown className='dropdown' options={years} 
                        // onChange={this._onSelect} 
                        value={defaultYear} 
                        onClick={(e) => console.log(e.target.value)}
                        placeholder={defaultYear}/>
                </div>
                <div className='Chart'>
                {dataChart.map((item, index) => {
                    return (
                        <div className='chartItem' key={index} style={{order:index}}>
                            <div className='chartPerform' style={{order:index}}><div className='fill' style={process(index)}></div></div>
                            <p style={{order:index}}>{item}</p>
                        </div>
                    )
                })}
                </div>
                <div className='Expense'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='ExpenseItem'>
                            <div className='date'>
                                <p className='month'>{month[new Date(item.date).getMonth()]}</p>
                                <p className='year'>{new Date(item.date).getFullYear()}</p>
                                <p className='day'>{new Date(item.date).getDate()}</p>
                            </div>
                            <div className='title'>{item.name}</div>
                            <div className='price'><p>${item.amount}</p></div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
 export default Home