import React from 'react';
import Firstpage from './component/Firstpage';
import Props from './component/Props';
import State from './component/State';
import Eventh from './component/Eventh';
import UserDashboard from './component/Conditonalr';
import PlayButton from './component/button';

function App() {
  return (
    <>
      <div>
        <Firstpage />
      </div>
      <br />
      <div>
        <Props name="priya" age="24" />
      </div>
      <br />
      <div>
        <State/>
      </div>
      <br />
      <div>
        <Eventh/>
      </div>
      <br />
      <div>
        <UserDashboard/>
      </div>
      <br />
      <div>
        <PlayButton songTitle="Tum Hi Ho" />    
      </div>
    </>
  );
}

export default App;