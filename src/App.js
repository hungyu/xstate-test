import React, { useEffect, useState, useRef } from 'react';
import { Machine, interpret } from 'xstate';
import trafficLightFSM from './fsm/trafficLightFSM.js';

import Light from './components/Light.js';

function App() {
  const lightMachine = Machine(trafficLightFSM);
  // lightMachine obj keep changing, so we need machineRef to ensure use effect run only once
  const machineRef = useRef(lightMachine);
  const [light, setLight] = useState(machineRef.current.initialState);

  useEffect(()=> {
    const service = interpret(machineRef.current).onTransition(state => {
      setLight(state.value);
    });
    service.start();
    return () => {
      service.stop();
    }
  }, [machineRef])

  return (
    <div className="App" style={{background: 'black'}}>
      <Light light={light === 'red' ? light : 'grey'}/>
      <Light light={light === 'yellow' ? light : 'grey'}/>
      <Light light={light === 'green' ? light : 'grey'}/>
    </div>
  );
}

export default App;
