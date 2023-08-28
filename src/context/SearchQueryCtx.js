import { createContext, useState } from 'react';
import { useContext } from 'react';

const GlobalContext = createContext();

export const RootContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <GlobalContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useStateContext = () => useContext(GlobalContext);
