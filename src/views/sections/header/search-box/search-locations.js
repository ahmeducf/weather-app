import pubsub from '../../../../pubsub';
import {
  FETCH_SELECTED_LOCATION,
  SEARCH_LOCATION,
} from '../../../../pubsub/events-types';

const handleSearch = (app) => {
  const searchInput = document.querySelector('header .search-box input');

  searchInput.addEventListener('keyup', (e) => {
    const query = e.target.value;

    if (query) {
      pubsub.publish(SEARCH_LOCATION, query);
    }
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

      li.textContent = `${name}, ${region}, ${country}`;

      resultsList.appendChild(li);

      li.addEventListener('click', (e) => {
        const { query } = e.target.dataset;
        pubsub.publish(FETCH_SELECTED_LOCATION, query);

        searchResults.classList.add('hidden');

        const searchInput = document.querySelector('header .search-box input');
        searchInput.value = '';
      });
    });
  }
};

export { handleSearch, showSearchLoadingComponent, showSearchResults };
