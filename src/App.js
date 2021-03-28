import NavigationBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { routes } from "./routes/routes";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            {routes.map((item) => (
              <Route exact path={item.pathname} component={item.component} />
            ))}
          </Switch>
        </Router>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
