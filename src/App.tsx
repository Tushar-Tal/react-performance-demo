import React from "react";
import "./App.css";
import routes from "./routes/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const finalRoutes = [...routes];
const App = (): React.ReactElement => {
  return (
    <div className="content">
      <Router>
        <>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {finalRoutes.map((route, index) => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </React.Suspense>
        </>
      </Router>
    </div>
  );
};

export default App;
