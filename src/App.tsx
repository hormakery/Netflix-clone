import React from 'react'
import './App.css';

import Nav from './components/nav/Nav';
import Row from "./components/row/Row";
import Banner from './components/banner/Banner';
import requests from "./components/utils/requests"

function App(props:any) {
  return (
    <div className='App'>
      <Nav />
    <Banner title={''} original_name={''} poster_path={undefined} name={undefined} id={0} backdrop_path={undefined} overview={''}   />

    <Row 
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        name={''} poster_path={''} id={0}
        isLargeRow backdrop_path={''}   />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} name={''} poster_path={''} id={0} backdrop_path={''} isLargeRow={false} />
    
    </div>
  );
}

export default App;
