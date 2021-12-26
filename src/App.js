import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Blog from "./components/Blog";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
