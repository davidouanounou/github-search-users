import { useContext, useEffect } from 'react';
import { UsersContext } from '../contexts/users';
import useFetch from './use-fetch';

const useUsers = () => {
  const [users, setUsers] = useContext(UsersContext);
  const {request, execute} = useFetch();

  // Fill in store with results
  useEffect(() => {
    if(request.response.items) {
      setUsers(
      {
        list: request.response.items , 
        totalCount: request.response.total_count,
        requestedAtLeastOnce: true,
        request
      });
    } else {
      setUsers(
        {
          list: [], 
          totalCount: 0,
          requestedAtLeastOnce: true,
          request
        });
    }
    
  }, [setUsers, request]);

  const search = term => {
    execute(`https://api.github.com/search/users?q=`, term);
  };

  return {
    count: users.list.length,
    users: users.list,
    totalCount: users.totalCount,
    requestedAtLeastOnce: users.requestedAtLeastOnce,
    request: users.request,
    search
  };
};

export default useUsers;