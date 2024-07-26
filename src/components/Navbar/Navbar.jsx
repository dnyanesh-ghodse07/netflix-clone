import "./Navbar.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import bell from "../../assets/bell.svg";
import profile from "../../assets/profile.png";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";


const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  },[])

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src={search} alt="search" />
        <p>Children</p>
        <img className="icons" src={bell} alt="bell" />
        <div className="navbar-profile">
          <img src={profile} alt="profile" className="profile" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign out of netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
