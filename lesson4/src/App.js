
import './App.css';
import CounterFC from './Components/Counter';
import StudentFC from './Components/Student';
import TrafficLight from './Components/TrafficLight';
import React from 'react'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <div>
          (Function Component)
          <CounterFC/>
          <StudentFC/>
        </div>
        
        <div>
          (Class Component)
          <CounterCC/>
          <StudentCC/>
        </div>

        <TrafficLight/>
      </div>
    </div>
  );
}

export default App;

class CounterCC extends React.Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
    this.clickCount = this.clickCount.bind(this)
  }
  clickCount () {
    this.setState({
      ...this.state,
      count: this.state.count+1
    })
  }
  render() {
    return(
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.clickCount}>Increase</button>
      </div>
    )
  }
}
class StudentCC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {
        name: 'Nguyen Minh Duc',
        age: 19
      }
      
    }
    this.clickStudent = this.clickStudent.bind(this)
  }

  clickStudent () {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        age: this.state.student.age + 1
      }
    })
  }


  render() {
    return (
      <div>
        <h4>Name: {this.state.student.name}. Age: {this.state.student.age}</h4>
        <button onClick={this.clickStudent}>Click me</button>
      </div>
    )
  }
  
}