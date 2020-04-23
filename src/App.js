import React from 'react';

import { UsersProvider } from './contexts/users';
import initialUsersStore from './stores/initial-users-store';
import Results from './components/views/results';

function App() {

  return (
    <UsersProvider initialStore={initialUsersStore} >
      <Results />
    </UsersProvider>
  );
}      
     
export default App;
