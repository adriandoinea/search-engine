import './search.style.scss';
import mGlassWhiteImg from '../../images/mglass-white.png';
 
export const searchComponent = () => {
  const search = document.createElement('div');
  const form = document.createElement('div');
  form.classList = 'search__wrapper';
  const searchInput = document.createElement('input');
  const mGlass = document.createElement('div');

  search.classList = 'search';

  searchInput.id = "search-input";
  searchInput.classList = "search__input";
  searchInput.placeholder = "ce vrei să te faci când vei fi mare?";

  mGlass.classList = 'search__icon'
  mGlass.innerHTML = `<img src=${mGlassWhiteImg} />`;

  form.appendChild(mGlass);
  search.appendChild(form);
  form.appendChild(searchInput);

  return search;
}
