import React from 'react';
import Firstpage from './component/Firstpage';
import Props from './component/Props';
import State from './component/State';
import Eventh from './component/Eventh';
import UserDashboard from './component/Conditonalr';

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
    </>
  );
}

export default App;