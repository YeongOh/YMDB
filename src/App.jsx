import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import ScrollToTop from './hooks/scrollToTop';
import NavBar from './components/NavBar/NavBar';

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
      <NavBar />
      <ScrollToTop>
        <main className={styles.main}>
          <Outlet />
        </main>
      </ScrollToTop>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
