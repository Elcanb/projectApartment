import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';
import Login from './containers/Auth/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Registration from './containers/Auth/Registration/Registration';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
        <Route path="/advert/:advert_id" component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
