import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWJmNTQzY2ExNjE1ZDBmYzgyNmFjMDJiMjFiNWJlZCIsInN1YiI6IjY2MzhkYTU2NjY1NjVhMDEyNjE2ODhiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-tMXoB22HRLC1mO48kpYxurgX17cOVPq3h2GxyEt7A",
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, overview, poster_path, release_date, vote_average } = movieDetails;

  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}</p>
    </div>
  );
};

export default MovieDetails;
