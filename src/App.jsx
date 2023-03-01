import { Outlet } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Movies from './pages/Movies/Movies';

function App() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}

export default App;
