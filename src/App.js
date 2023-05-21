import { Route, Switch } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';

function App() {
  const { setFilmsList } = useContext(FilmsContext);
  useEffect(() => {
    const URL = 'https://api-trybe-frontend.vercel.app/api/ghibli-animations';
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const dataWithFavorite = data.map((e) => ({ ...e, isFavorite: false }));
        setFilmsList(dataWithFavorite);
      });
  }, [setFilmsList]);

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/favorites" component={ Favorites } />
    </Switch>
  );
}

export default App;
