import Card from './components/Card';
import './App.css';
import List from './components/Listsong';
import Chill from './components/Chill/chill';
import CarouselItem from './components/Carousel';
import Postcard from './components/Postcard';
import { postcardImg } from './stores/data';



function App() {


  return (
      <div className="App">
        <CarouselItem/>
        <Card song="BÀI HÁT" album="ALBUM"/> 
        <List/>
        <Chill/>
        <Postcard
          left={
            <div className='pc-left'>
              {postcardImg.filter((item, index) => {
                if(index < postcardImg.length/2){
                  return item
                }
              })
                .map((item, index) => {
                return (
                  <div className='left' key={index}>
                    <h3>{index+1}</h3>
                    <img src={item.img} alt=''/>
                    <div className='infor'>
                      <h4>{item.name}</h4>
                      <p>{item.channel}</p>
                      <p>{item.timeUp}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          }
          right={
            <div className='pc-right'>
              {postcardImg.filter((item, index) => {
                if(index >= postcardImg.length/2){
                  return item
                }
              })
                .map((item, index) => {
                return (
                  <div className='right' key={index}>
                    <h3>{index+(postcardImg.length/2)+1}</h3>
                    <img src={item.img} alt=''/>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.channel}</p>
                      <p>{item.timeUp}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          }
        />
      </div>
  );
}

export default App;
