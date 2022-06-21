import React, { useEffect, useRef } from "react";
import useGifSearch from "./application/useGifSearch";
import GifList from "./components/GifList";
import SearchForm from "./components/SearchForm";

const App = () => {
  const { load, loadMore, data, isLoading } = useGifSearch({ limit: 2 });
  const searchFormRef = useRef<any>(null);

  const handleSearch = React.useCallback((query: string) => {
    load(query);
  }, [load]);

  useEffect(() => {
    if (searchFormRef.current) {
      searchFormRef.current.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <h1>Gif search test</h1>
      <SearchForm ref={searchFormRef} onSearch={handleSearch} />
      <GifList items={data} />
      {isLoading && <p>Loading...</p>}
      <button type="button" onClick={loadMore}>Load more</button>
    </React.Fragment>
  );
};

export default App;