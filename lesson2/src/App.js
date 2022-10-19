import Card from './components/Card';
import './App.css';
import List from './components/Listsong';
import {imgs} from './stores/data';
import Chill from './components/Chill/chill';


function App() {


  return (
      <div className="App">
        <header className="App-header">
          <Card song="BÀI HÁT" album="ALBUM"/>  
        </header>
        <div className='body'>
          {imgs.map((item, index) => {
            return (
            <List img={item.img} namesong={item.name} singer={item.singer} time={item.time} key={index}/>

            )
          })}
          
          <Chill />
        </div>
      </div>
  );
}

export default App;
