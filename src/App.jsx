import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
//import Search from "./Search"
//da665cef
const API_URL = "https://www.omdbapi.com?apikey=da665cef";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies({ searchTerm });
  }, []);
  return (
    <div className="app" tabIndex={0} onKeyDown={(e)=>{e.key==="Enter"&&searchMovies(searchTerm)}}>
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          
        />

        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// import React,{useState,useEffect} from 'react'
// //anything that start with use is called hooks
// function App() {
//   const [count,setCount]=useState(0);
// //prevCount comes with setCount function as an arguement

// useEffect(()=>{
//   alert("Reload");
// })
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
//       <button onClick={()=>setCount((prevCount)=>prevCount-1)}>-</button>

//     </div>
//   )
// }

// export default App
