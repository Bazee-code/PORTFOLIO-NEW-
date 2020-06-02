import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//local
import {Home,Projects,About,Contacts} from './components'; 

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path={["/","/profile"]} component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
};

export default App;

// Route renders all components that match the specified url
// Switch renders only the 1st component that matches the specified url