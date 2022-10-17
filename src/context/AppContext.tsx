import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  isMobile: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isModalMobileOpen: boolean;
}

const AppContext = createContext({} as AppContextProps);

export function useAppContext() {
  return useContext(AppContext);
}
export function AppProvider({ children }: AppProviderProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalMobileOpen, setIsModalMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(screen.width < 600);
  }, []);

  const openModal = () => {
    if (isMobile) setIsModalMobileOpen(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isMobile) setIsModalMobileOpen(false);
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isMobile,
        isModalOpen,
        openModal,
        closeModal,
        isModalMobileOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
