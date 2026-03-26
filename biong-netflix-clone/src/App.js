import logo from 'react';
import './App.css';
import Row from "./Row";
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey Biong! Let's build a Netflix clone front-end today</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
