import axios from "../axios"
import React, { useEffect, useState } from 'react'

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import
 {
  RowWrapper,

}from "./Row.styles"




export type IPropsTypes = {
  title: string;
  fetchUrl: string;
  poster_path: string;
  name: string
  id: number;
  isLargeRow: boolean;
  backdrop_path: string;
};

const base_URL="https://image.tmdb.org/t/p/original/";



function Row({title, fetchUrl, isLargeRow}: IPropsTypes) {
  const [movies, setMovies]=useState([]);
  const [trailerUrl, setTrailerUrl]= useState("");

  useEffect(()=>{
    //if[], run once when the list loads and it doesnt run again
  
     async function fetchData() {
      const request=await axios.get(fetchUrl);
      setMovies(request.data.results);
      
      return request;
     }
     fetchData()
    },[fetchUrl])
    console.table(movies)

    const opts={
      height:"390",
      width: "100%",
      playerVars: {
        autoPlay: 1,
      }
    };

    const handleClick =(movie: { backdrop_path?: any; poster_path?: any; name: any; id?: number; })=>{
      if (trailerUrl){
        setTrailerUrl("");
      }else{
        movieTrailer(movie?.name || " " )
        .then((url: string | URL)=>{
          const urlParams= new URLSearchParams (new URL(url).search);
          //https://www.youtube.com/watch?v=..
         setTrailerUrl(urlParams.get("v")); 
        })
        .catch((error: any)=>alert("No available Trailer"));
      }  

      
    }

  return (
    <RowWrapper>
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie: {
          backdrop_path: any; poster_path: any; name: string | undefined; id:number;
        })=>(
        
          <img 
          key={movie.id}
          onClick={()=>handleClick(movie)}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${base_URL}${
            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} />
        ))}
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>

    {/* {container-> posters} */}



    </RowWrapper>
  )
}
export default Row;





