import { Link } from "react-router-dom";
import "./TitleCards.css";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWIzNjM4ZGUxMzgxYjQwNWFlZDc4NWJlOTM4OWFmMyIsIm5iZiI6MTcyMTkzMzM5OC41NzcxNDcsInN1YiI6IjY2YTEyYjVmMWU3YjBlOGJmNWRkNzhkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWVGHZBcUjVgVZmQIn65wA9AumwM6esLD9bnFf-bf2k",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  console.log(apiData);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div key={index} className="card">
              <Link  to={`/player/${card.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt=""
                />
                <p>{card.original_title}</p>
              </Link>
            </div>
          );
        })}
      </div>
      {/* {cardsData} */}
    </div>
  );
};

export default TitleCards;
