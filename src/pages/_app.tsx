import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
