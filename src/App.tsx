import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import FriendListRoute from "./components/FriendListRoute";
import SongRoute from "./components/SongRoute";
import SongListRoute from "./components/SongListRoute";
import { songs } from "./components/songs";

function App() {
  return (
    <Router>
      <header>
        <h1>Friends & Songs App</h1>
        <nav>
          <p>
            <Link to="/">Friend List </Link>
          </p>
          <p>
            <Link to="/song-list"> Song List</Link>
          </p>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <FriendListRoute />
        </Route>
        <Route path="/song-list" exact>
          <SongListRoute songs={songs} />
        </Route>
        <Route path="/song/:id" exact>
          <SongRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
