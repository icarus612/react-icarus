import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes.js';
import NavBar from './pages/components/navBar.js';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";



var hist = createBrowserHistory();

ReactDOM.render(
  <div>
    <NavBar />
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);

