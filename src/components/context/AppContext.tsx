import { createContext, useState, useEffect, ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  isMobile: boolean;
}

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(screen.width < 600);
  }, []);

  return (
    <AppContext.Provider value={{ isMobile }}>{children}</AppContext.Provider>
  );
}
