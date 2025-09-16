import React from 'react';
import Firstpage from './component/Firstpage';
import Props from './component/Props';
import State from './component/State';

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
    </>
  );
}

export default App;