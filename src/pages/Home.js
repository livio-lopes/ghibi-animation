import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import CardFilm from '../components/CardFilm';
import Header from '../components/Header';
import styles from '../App.module.css';

export default function Home() {
  const { filmsList } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h2 className={ styles.title__page }>Films</h2>
      <div className={ styles.container__cardlist }>
        {filmsList.map((film, index) => (
          <CardFilm
            key={ index }
            title={ film.title }
            description={ film.description }
            image={ film.image }
            isFavorite={ film.isFavorite }
            filmeId={ film.id }
          />
        ))}
      </div>
    </div>
  );
}
