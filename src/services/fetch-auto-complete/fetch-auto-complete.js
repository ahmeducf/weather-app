import fetchAutoCompleteFactory from './fetch-auto-complete.factory';

const fetchAutoComplete = async (query) =>
  fetchAutoCompleteFactory(fetch, query);

export default fetchAutoComplete;
