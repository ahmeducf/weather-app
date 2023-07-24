import { handleSearch } from './search-box/search-locations';
import handleUseMyLocation from './search-box/use-my-location';
import handleUnitChange from './unit-switcher';

const renderHeader = (app) => {
  handleUnitChange(app);

  handleUseMyLocation(app);
  handleSearch(app);
};

export default renderHeader;
