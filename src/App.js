import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // console.log('Do a Search with', term);
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}></ImageList>
    </div>
  );
}

export default App;
