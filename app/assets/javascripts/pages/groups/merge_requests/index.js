import projectSelect from '~/project_select';
import initFilteredSearch from '~/pages/search/init_filtered_search';
import { FILTERED_SEARCH } from '~/pages/constants';

export default () => {
  initFilteredSearch({
    page: FILTERED_SEARCH.MERGE_REQUESTS,
  });
  projectSelect();
};
