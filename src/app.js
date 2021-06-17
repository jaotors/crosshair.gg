import React from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-base-100">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
