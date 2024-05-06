import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [otherMovies, setOtherMovies] = useState([]);

  useEffect(() => {
    // Fetch trending movies
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODI5M2U0Y2RjYWFkNzUzOTNlNTRjZmY0NGM3YTk4MSIsInN1YiI6IjY2MzhkYTExNjY1NjVhMDEyODE2OTdjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RZ8ZbwazdJEcZxkrZZoLXkVKg2tn6Mo8K-EDwbWgNb4",
            },
          }
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch other movies
    const fetchOtherMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWJmNTQzY2ExNjE1ZDBmYzgyNmFjMDJiMjFiNWJlZCIsInN1YiI6IjY2MzhkYTU2NjY1NjVhMDEyNjE2ODhiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-tMXoB22HRLC1mO48kpYxurgX17cOVPq3h2GxyEt7A",
            },
          }
        );
        setOtherMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
    fetchOtherMovies();
  }, []);

  // Function to extract year from date string
  const getYearFromDate = (dateString) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="px-6 lg:px-36 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col">
          <h1 className="text-4xl text-white">FIND MOVIES</h1>
          <h1 className="text-4xl text-white">
            TV SHOWS <span className="text-red-700">AND MORE </span>
          </h1>
          <p className="text-white mb-8">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <button className="bg-black text-white px-6 py-3 border border-white rounded-lg shadow-md hover:bg-white w-40">
            Watch Tutorial
          </button>
        </div>
        <div className="relative mb-6">
          <img
            src=".././public/Guard.png"
            alt=""
            className="mb-4 w-full h-auto "
          />
          <div className="absolute right-10 top-20">
            <img
              src=".././public/spider.png"
              alt=""
              className="mb-4 w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-36 mb-10">
        <h4 className="text-white">Trending</h4>
        <h4 className="text-white">See more</h4>
      </div>

      <div className="flex flex-wrap justify-center px-6 lg:px-36 gap-5 mb-10">
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="max-w-xs">
            <a href={`/movie/${movie.id}`}>
              <img
                className="w-full h-60 object-cover"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </a>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {movie.title}
              </div>
              <p className="text-white">{getYearFromDate(movie.release_date)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-36 mb-10">
        <h4 className="text-white">YOU MAY LIKE THIS</h4>
      </div>

      <div className="flex flex-wrap justify-center px-6 lg:px-36 gap-5">
        {otherMovies.map((movie) => (
          <div key={movie.id} className="max-w-xs">
            <a href={`/movie/${movie.id}`}>
              <img
                className="w-full h-60 object-cover"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </a>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {movie.title}
              </div>
              <p className="text-white">{getYearFromDate(movie.release_date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
