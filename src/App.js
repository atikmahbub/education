import Home from './views/HomePage/Home'
import NavigationBar from './components/NavBar'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
