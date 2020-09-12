import React from 'react';
import './App.css';
import Fullpage from './components/Fullpage/Fullpage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(fab, fas, faCheckSquare, faCoffee)
  return (
    <div className="App">
      <Fullpage />
    </div>
  );
}

export default App;
