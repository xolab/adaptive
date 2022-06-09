import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import CardList from '../card-list/card-list';
import './app.css';

function App(): JSX.Element {

  return (
    <>
      <header className="page-header">
        <div className="page-header__wrapper container">
          <Link className="page-header__link link-inactive" to={AppRoute.Main}>
            <img src="img/logo.svg" width="41" height="41" alt="Страница «Наши партнеры»." />
          </Link>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item nav-mobile">
                <Link className="main-nav__link" to={AppRoute.Login}>
                  <img src="img/icon-user.svg" width="25" height="25" alt="Войти." />
                </Link>
              </li>
              <li className="main-nav__item nav-tablet">
                <Link className="main-nav__link" to={AppRoute.Logout}>
                  <span className="main-nav__link-text">Константин</span>
                  <img src="img/avatar-user.jpg" width="40" height="40" alt="Выйти." />
                </Link>
              </li>
            </ul>
          </nav>
          <input
            className="page-header__input-search"
            type="text"
            placeholder="Найти..."
          />
        </div>
      </header>
      <main className="page-main">
        <div className="container">
          <h1 className="page-main__title">Наши партнёры</h1>
          <CardList />
        </div>
      </main>
      <footer className="page-footer"></footer>
    </>
  );
}

export default App;
