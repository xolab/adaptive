import {Link} from 'react-router-dom';
import './card-list.css';

function CardList(): JSX.Element {
  return (
    <section className="partner">
      <ul className="partner__list">
        {Array.from({length: 7}, (_: any, i: number) => i).map((iconIndex: number) => (
          <li className="partner__item" key={iconIndex}>
            <Link
              className="partner__link"
              to="/#"
            >
              <img
                className="partner__image"
                src={`img/partner-${iconIndex + 1}.svg`}
                width="60"
                height="60"
                alt={`Партнер-${iconIndex + 1}`}
              />
              {/* Для тестирования изображений с различиным ratio */}
              {/* <img className="partner__image" src="https://via.placeholder.com/350x150" alt="" /> */}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
