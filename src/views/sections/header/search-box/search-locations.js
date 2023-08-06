import pubsub from '../../../../pubsub';
import {
  FETCH_SELECTED_LOCATION,
  SEARCH_LOCATION,
} from '../../../../pubsub/events-types';

const handleSearch = (app) => {
  const searchInput = document.querySelector('header .search-box input');
  const searchResults = document.querySelector('.search-box .search-results');

  searchInput.addEventListener('keyup', (e) => {
    const query = e.target.value;

    if (query) {
      pubsub.publish(SEARCH_LOCATION, query);
    }

    searchResults.setAttribute('aria-hidden', 'false');
    searchResults.setAttribute('aria-expanded', 'true');
  });
};

const showSearchLoadingComponent = () => {
  const searchResults = document.querySelector('.search-box .search-results');
  const loadingComponent = document.querySelector(
    '.search-box .loader-container',
  );
  const noResultsSpan = document.querySelector(
    '.search-box .search-results .no-results',
  );
  const resultsList = document.querySelector(
    '.search-box .search-results .results-list',
  );

  searchResults.classList.remove('hidden');
  loadingComponent.classList.remove('hidden');
  noResultsSpan.classList.add('hidden');
  resultsList.classList.add('hidden');
};

const showSearchResults = (results) => {
  const searchResults = document.querySelector('.search-box .search-results');
  const loadingComponent = document.querySelector(
    '.search-box .loader-container',
  );
  const noResultsSpan = document.querySelector(
    '.search-box .search-results .no-results',
  );
  const resultsList = document.querySelector(
    '.search-box .search-results .results-list',
  );

  searchResults.classList.remove('hidden');
  loadingComponent.classList.add('hidden');

  if (results.length === 0) {
    noResultsSpan.classList.remove('hidden');
    resultsList.classList.add('hidden');
  } else {
    noResultsSpan.classList.add('hidden');
    resultsList.classList.remove('hidden');

    resultsList.innerHTML = '';

    results.forEach((result) => {
      const { name, region, country } = result;

      const li = document.createElement('li');
      li.classList.add('results-list-item');
      li.dataset.query = result.url;
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');

      li.textContent = `${name}, ${region}, ${country}`;

      resultsList.appendChild(li);

      ['click', 'keydown'].forEach((event) => {
        li.addEventListener(event, (e) => {
          if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') {
            return;
          }
          const { query } = li.dataset;

          pubsub.publish(FETCH_SELECTED_LOCATION, query);

          searchResults.classList.add('hidden');

          const searchInput = document.querySelector(
            'header .search-box input',
          );
          searchInput.value = '';

          searchResults.setAttribute('aria-hidden', 'true');
          searchResults.setAttribute('aria-expanded', 'false');
        });
      });
    });
  }
};

export { handleSearch, showSearchLoadingComponent, showSearchResults };
