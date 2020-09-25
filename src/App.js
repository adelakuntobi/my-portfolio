import React from 'react';
import './App.css';
import Fullpage from './components/Fullpage/Fullpage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import Testingpage from './components/Testingpage/Testingpage';

function App() {
  library.add(fab, fas)
  return (
    <div className="App">
      <Fullpage />
      {/* <Testingpage /> */}
    </div>
  );
}

export default App;
