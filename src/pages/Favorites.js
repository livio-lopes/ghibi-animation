import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import CardFilm from '../components/CardFilm';
import styles from '../App.module.css';

export default function Favorites() {
  const { filmsList } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h2 className={ styles.title__page }>Favorites</h2>
      <div className={ styles.container__cardlist }>
        {filmsList.map((film, index) => (film.isFavorite ? (<CardFilm
          key={ index }
          title={ film.title }
          description={ film.description }
          image={ film.image }
          isFavorite={ film.isFavorite }
          filmeId={ film.id }
        />) : undefined))}
      </div>
    </div>
  );
}
