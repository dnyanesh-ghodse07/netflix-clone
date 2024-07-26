import "./Player.css";
import back_arrow from "../../assets/arrow-back.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [youtubeId, setYoutubeId] = useState('');

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWIzNjM4ZGUxMzgxYjQwNWFlZDc4NWJlOTM4OWFmMyIsIm5iZiI6MTcyMTkzMzM5OC41NzcxNDcsInN1YiI6IjY2YTEyYjVmMWU3YjBlOGJmNWRkNzhkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWVGHZBcUjVgVZmQIn65wA9AumwM6esLD9bnFf-bf2k",
    },
  };

  useEffect(() => {
    if(!id) return;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setYoutubeId(response.results[0].key)
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log('yt id ', youtubeId);

  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={() => navigate(-2)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
