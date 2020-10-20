export default {
  search: {
    placeholder: 'Type a keyword...',
  },
  sort: {
    sortAsc: 'Sort column ascending',
    sortDesc: 'Sort column descending',
  },
  pagination: {
    previous: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    navigate: (page, pages) => `Page ${page} of ${pages}`,
    page: (page) => `Page ${page}`,
    showing: 'Showing',
    of: 'of',
    to: 'to',
    results: 'results',
  },
  loading: 'Loading...',
  noRecordsFound: 'No matching records found',
  error: 'An error happened while fetching the data',
};
