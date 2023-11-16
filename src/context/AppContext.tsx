import {
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AppContext = createContext({} as AppContextProps);

export function useAppContext() {
  return useContext(AppContext);
}
export function AppProvider({ children }: AppProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
   
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
