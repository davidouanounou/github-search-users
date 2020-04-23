const initialUsersListStore = () => {
    return {
      totalCount: 0,
      list: [],
      requestedAtLeastOnce: false,
      request: {
        loading: false,
        error: false,
        errorMessage: '',
        performed: 0,
        remaining: 10,
        limit: 10,
        reset: 0,
        tooMuch: false,
        term: null
      }
    };
  };
  
  export default initialUsersListStore;