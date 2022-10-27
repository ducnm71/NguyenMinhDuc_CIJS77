import './style.css'
import { useState} from "react";
import Display from '../Display';

const TrafficLight = () => {
    const stages = {
      stop: { red: true, amber: false, green: false, next: "readyToGo" },
      readyToGo: { red: true, amber: true, green: false, next: "go" },
      go: { red: false, amber: false, green: true, next: "readyToStop" },
      readyToStop: { red: false, amber: true, green: false, next: "stop" }
    };
  
    const [stage, setStage] = useState(stages.stop);
  
    return <Display {...stage} onClick={() => setStage(stages[stage.next])} />;
  };

  

export default TrafficLight