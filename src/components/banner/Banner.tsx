import axios from "../axios";
import requests from "../utils/requests";
import  { IPropsTypes } from "../row/Row";
import React, { useEffect, useState } from "react";

import {
   Header,
   BannerContent,
} from "./Banner.styles";

type IMoveTypes={
  title: string ;
  original_name: string;
  poster_path: any; 
  name: string | undefined;
  id:number;
  backdrop_path:any
  overview: string;
}


function Banner({ title, name, original_name }:IMoveTypes) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str: string, n: number){
    return str?.length > n ? str?.substr(0, n-1) + "...": str;
  }
  return (
    <Header
    
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
      }}
    >
      <BannerContent>
     
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
    
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
        </div>

        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner__fadeBottom"></div>
      </BannerContent>
    </Header>
  );
}

export default Banner;
