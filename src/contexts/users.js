import React, { useState } from 'react';

const UsersContext = React.createContext([{}, () => {}]);

const UsersProvider = ({ children, initialStore }) => {
  const [state, setState] = useState(initialStore);

  return (
    <UsersContext.Provider value={[state, setState]}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };