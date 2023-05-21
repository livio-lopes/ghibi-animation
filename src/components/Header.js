import { Link, useLocation } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import studioGhibli from '../images/studio_ghibli.png';
import styles from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className={ styles.container__header }>
      <img src={ studioGhibli } alt="Studio Ghibli" />
      <nav>
        {pathname === '/favorites' ? (
          <Link to="/">
            <div className={ styles.nav__favorites }>
              <BsFillHeartFill size="30px" />
              <p>
                Films
              </p>

            </div>
          </Link>
        ) : (
          <Link to="/favorites">
            <div className={ styles.nav__favorites }>
              <BsFillHeartFill size="30px" />
              <p>
                Favorites
              </p>

            </div>

          </Link>
        )}
      </nav>
    </header>
  );
}
