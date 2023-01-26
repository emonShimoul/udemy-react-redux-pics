import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const handleSubmit = (term) => {
    // console.log('Do a Search with', term);
    searchImages(term);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
