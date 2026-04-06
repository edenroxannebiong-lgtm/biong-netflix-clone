import React, { useState, useEffect } from 'react'; 
import './App.css';
import Row from "./Row";
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import LoadingScreen from './LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  // 1. Create state for the search query
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          
          <Nav setSearchQuery={setSearchQuery} />
          
          
          {searchQuery ? (
            <div className="search-results-container" style={{ paddingTop: "100px" }}>
               <Row 
                 title="Search Results" 
                 fetchUrl={`${requests.fetchSearch}&query=${searchQuery}`} 
                 isLargeRow={true} 
               />
            </div>
          ) : (
            <>
              <Banner />
              <Row 
                title="NETFLIX ORIGINALS" 
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow={true} 
              />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
              <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
              <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;