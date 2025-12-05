import React,{useState,useEffect} from "react";
import './Header.css';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhoneVolume,} from '@fortawesome/free-solid-svg-icons';
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
function Header()
{
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // cleanup
        };
    }, []);

    return(<>
        <div  className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="leftSideHeader">
                <h1>BlogStore</h1>
            </div>
            <div className="rightSideHeader">
                <NavLink to="" className="home">Home</NavLink>
                <NavLink to="" className="about">About</NavLink>
                <NavLink to="" className="contact">Contact</NavLink>
                <img src="https://www.peakparent.org/wp-content/uploads/2023/06/profile-icon-design-free-vector.jpg" class="profilePic"></img>
            </div>
        </div>
    </>)
}

export default Header;
