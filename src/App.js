import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutPage from "./components/pages/About";
import Header from "./components/layout/Header";


class App extends Component {
    render(){
    return (
      <Provider store={store}>
          <Router>
              <Header />
              <Switch>
                  <Route exact path='/'>
                      <AboutPage key={'about'}/>
                  </Route>
              </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
