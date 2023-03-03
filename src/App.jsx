import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { ReactQueryDevtools } from 'react-query/devtools';
import ScrollToTop from './hooks/scrollToTop';

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
      <SearchBar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
