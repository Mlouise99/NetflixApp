import React, { useEffect, useState } from "react";
import axios from "axios";

const Explore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?language=en-US",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODI5M2U0Y2RjYWFkNzUzOTNlNTRjZmY0NGM3YTk4MSIsInN1YiI6IjY2MzhkYTExNjY1NjVhMDEyODE2OTdjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RZ8ZbwazdJEcZxkrZZoLXkVKg2tn6Mo8K-EDwbWgNb4",
            },
          }
        );
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item) => (
        <div key={item.id} style={{ margin: "10px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
            alt={item.title}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Explore;
