import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import ScrollToTop from './components/ui/scrollToTop';
import NavBar from './components/NavBar/NavBar';
import { WatchListProvider } from './context/WatchlistContext';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 2 minute stale time
      staleTime: 1000 * 120,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WatchListProvider>
        <HelmetProvider>
          <NavBar />
          <ScrollToTop>
            <main className={styles.main}>
              <Outlet />
            </main>
            <Footer />
          </ScrollToTop>
          <ReactQueryDevtools initialIsOpen={false} />
        </HelmetProvider>
      </WatchListProvider>
    </QueryClientProvider>
  );
}

export default App;
