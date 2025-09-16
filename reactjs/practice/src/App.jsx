import React from 'react';
import Firstpage from './component/Firstpage';
import Props from './component/Props';

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
    </>
  );
}

export default App;