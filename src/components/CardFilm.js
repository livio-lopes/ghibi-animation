import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import FilmsContext from '../context/FilmsContext';
import styles from './CardFilm.module.css';

export default function CardFilm(props) {
  const { title, description, image, filmeId, isFavorite } = props;
  const [favorite, setFavorite] = useState(isFavorite);
  const { filmsList, setFilmsList } = useContext(FilmsContext);

  const saveFavorite = () => {
    if (!favorite) {
      const attFilmList = filmsList
        .map((film) => (film.id === filmeId ? ({ ...film, isFavorite: true }) : film));
      setFilmsList(attFilmList);
    } else {
      const attFilmList = filmsList
        .map((film) => (film.id === filmeId ? ({ ...film, isFavorite: false }) : film));
      setFilmsList(attFilmList);
    }
    setFavorite(!favorite);
  };

  return (
    <div className={ styles.container__card }>

      <div className={ styles.front__card }>
        <img
          className={ styles.imagem__card }
          src={ image }
          alt={ title }
        />
        <button
          className={ styles.favorite }
          onClick={ () => saveFavorite() }
          type="button"
        >
          {isFavorite ? (<MdOutlineFavorite />) : (<MdOutlineFavoriteBorder />)}
        </button>

      </div>
      <div className={ styles.back__card }>
        <h2>{title}</h2>
        <p>{description}</p>

        <button
          className={ styles.favorite }
          onClick={ () => saveFavorite() }
          type="button"
        >
          {isFavorite ? (<MdOutlineFavorite />) : (<MdOutlineFavoriteBorder />)}
        </button>
      </div>

    </div>
  );
}

CardFilm.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
