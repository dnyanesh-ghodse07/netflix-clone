import Navbar from "../../components/Navbar/Navbar";
// import Footer from '../../components/Footer/Footer';
// import TitleCards from '../../components/TitleCards/TitleCards';
import bannerImg from "../../assets/banner-img.webp";
import bannerTitle from "../../assets/banner-title.webp";
import playIcon from "../../assets/play.svg";
import infoIcon from "../../assets/info.svg";
import TitleCards from "../../components/TitleCards/TitleCards";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={bannerImg} alt="banner-img" className="banner-img" />
        <div className="hero-caption">
          <img src={bannerTitle} alt="caption" className="caption-img" />
          <h3>Watch the Limited Series now</h3>
          <p>
            While the plague ravages 1348 Italy, the wealthy and their servants
            gather for a wedding celebration, a bit of fun — and a little
            mayhem.
          </p>
          <div className="hero-btns">
            <button className="play">
              <img src={playIcon} alt="play" />
              Play
            </button>
            <button className="info">
              <img src={infoIcon} alt="info" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title='Only on netflix' category='popular' />
        <TitleCards title='Upcoming' category='top_rated'/>
        <TitleCards title='Top pics for you' category='upcoming' />
        <TitleCards title='Blockbuster Movies' category='now_playing' />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
