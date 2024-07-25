import "./TitleCards.css";
import data  from "../../assets/thumbnails/thumbnails";
import { useEffect, useRef } from "react";

const TitleCards = () => {

  const cardsRef = useRef();
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {data.map((card, index) => {
          return <div key={index} className="card">
            <img src={card.image} alt="" />
          </div>;
        })}
      </div>
      {/* {cardsData} */}
    </div>
  );
};

export default TitleCards;
