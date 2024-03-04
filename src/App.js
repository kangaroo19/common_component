import SuperheroesPage from './pages/Superheroes.page';
import RQSuperheroesPage from './pages/RQsuperheroes.page';
import HomePage from './pages/Home.page';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/super-heroes">
            <SuperheroesPage />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperheroesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// package.json에 작성한 명령어 터미널에 입력시
// db.json의 목업데이터 사용 가능