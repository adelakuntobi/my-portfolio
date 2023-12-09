import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bottomnav from './components/Bottomnav';
import { Showcase } from './components/About/Showcase';
import Navbar from './components/Navbar';

function App() {
  library.add(fab, fas)
  return (
    <div className="App items-center flex w-full flex-col min-h-screen justify-between">
        <Navbar />
        <div className="container flex items-center justify-between w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
          <div className="w-full md:w-11/12 my-8">
            <Switch>
              <Route exact path="/" component={Header} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </div>
          <div className="w-1/12">
            <Showcase />
          </div>
        </div>
        <Bottomnav />
    </div>
  );
}

export default App;
