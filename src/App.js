import CounterPage from "./counter/CounterPage";
import JokePage from "./joke/JokePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Nav bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/joke">Joke</Link>
            </li>
            <li>
              <Link to="/count">Counter</Link>
            </li>
          </ul>
        </nav>
        {/* Component switcher */}
        <Switch>
          <Route path="/count">
            <CounterPage />
          </Route>
          <Route path="/joke">
            <JokePage />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
