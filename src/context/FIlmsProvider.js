import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import FilmsContext from './FilmsContext';

export default function FilmsProvider({ children }) {
  const [filmsList, setFilmsList] = useState([]);
  const values = useMemo(() => (
    { filmsList,
      setFilmsList,
    }
  ), [filmsList,
    setFilmsList,

  ]);

  return (
    <FilmsContext.Provider value={ values }>
      <div>
        { children }
      </div>
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
