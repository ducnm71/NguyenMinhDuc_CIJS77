
import './App.css';
// import CounterFC from './Components/Counter';
// import StudentFC from './Components/Student';
// import TrafficLight from './Components/TrafficLight';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import {RegisterPage} from './Components/Form';
import { LoginPage } from './Components/Form';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

// class CounterCC extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {count: 0}
//     this.clickCount = this.clickCount.bind(this)
//   }
//   clickCount () {
//     this.setState({count: this.state.count+1})
//   }
//   render() {
//     return(
//       <div>
//         <h4>{this.state.count}</h4>
//         <button onClick={this.clickCount}>Increase</button>
//       </div>
//     )
//   }
// }
// class StudentCC extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       student: {
//         name: 'Nguyen Minh Duc',
//         age: 19
//       }
      
//     }
//     this.clickStudent = this.clickStudent.bind(this)
//   }

//   clickStudent () {
//     this.setState({
//       ...this.state,
//       student: {
//         ...this.state.student,
//         age: this.state.student.age + 1
//       } 
//     })
//   }


//   render() {
//     const {student, clickStudent} = this.state;
//     return (
      
//       <div>
//         <h4>Name: {student.name}. Age: {student.age}</h4>
//         <button onClick={clickStudent}>Click me</button>
//       </div>
//     )
//   }
  
// }