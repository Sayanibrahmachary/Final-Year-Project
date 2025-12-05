import react,{useState} from 'react';
import './HeroSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhoneVolume,} from '@fortawesome/free-solid-svg-icons';
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import Login from './Login';
import SignUp from './SignUp';

function HeroSection()
{
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const handleSignup = () => {
        setShowSignup(true);
    };

    const closeSignup = () => {
        setShowSignup(false);
    };
    return (<>
            <div className="whole">
                {showLogin && (
                    <>
                        <div className="login-overlay" onClick={closeLogin}></div>
                        <div className="login-popup">
                            <Login onClose={closeLogin} />
                        </div>
                    </>
                )}
                {showSignup && (
                    <>
                        <div className="signup-overlay" onClick={closeSignup}></div>
                        <div className="signup-popup">
                            <SignUp onClose={closeSignup} />
                        </div>
                    </>
                )}

                <div className="hero">
                    <div className="heroImg">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/12/12/healthy-avo-food.jpg"/>
                    </div>
                    <div className="header-contents">
                        <h2>Track your meals and calories easily</h2>
                        <p>Our platform helps you log your food, analyze nutritional values, and estimate daily calorie intake to support a healthier lifestyle.</p>
                        <div className="header-contents-button">
                            <button onClick={handleSignup}>Sign Up</button>
                            <button className='header-contents-button-right' onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="leftAboutSection">
                        <img src="https://blog.medkart.in/wp-content/uploads/2023/08/14-Healthy-foods-for-healthy-diet.jpeg"/>
                    </div>
                    <div className="rightAboutSection">
                        <h2>About Us</h2>
                        <p>Food and calorie-tracking websites are platforms designed to help users monitor what they eat and understand the nutritional value of their meals. These sites offer easy-to-use tools for logging food items, estimating calories, and analyzing nutrients such as proteins, fats, and carbohydrates. Many platforms also include large searchable food databases, allowing users to quickly find meals, packaged items, or homemade recipes. With customizable dashboards, meal planners, and progress charts, users can personalize their health journey without needing any advanced knowledge. Images, portion guides, and recipe suggestions further enhance the experience by making healthy eating more intuitive. These websites often support community features, goal tracking, and personalized recommendations, helping users stay motivated on their fitness or weight-management journey. Whether someone wants to lose weight, gain muscle, or simply eat cleaner, food and calorie-tracking platforms make nutrition management simple, accessible, and effective.</p>
                    </div>
                </div>
                <div className="contact-us">
                    <h2>Want to Know More ?</h2>
                    <div className="upperPart-contactUs">
                        <div className="contactUs-image">
                            <img src="https://img.herohealth.com/blog/veggies.jpeg"/>
                        </div>
                        <div className="upperLayer">
                            <h3>C  &nbsp; &nbsp;O &nbsp; &nbsp; N&nbsp; &nbsp;  T&nbsp; &nbsp;  A &nbsp; &nbsp; C&nbsp; &nbsp;  T  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; U &nbsp; &nbsp; S</h3>
                        </div>
                    </div>
                    <div className="bottomPart-contactUs">
                        <div className="writting-Part">
                            <div className="writting-Part-1st-line">
                                <p>Have questions, suggestions, or just want to say hello?</p>
                            </div>
                            <div className="writting-Part-2nd-line">
                                <p>Use the form below or email us directly, and we’ll get back to you soon!</p>
                            </div>    
                            <div className="writting-Part-3rd-line">
                                <p>We'd love to hear from you—drop us a message anytime.</p>
                            </div>
                        </div>
                        <div className="last-Part">
                            <div className="email">
                                <FontAwesomeIcon className="i" icon={faEnvelope} style={{color: "rgba(9, 149, 32, 1)",fontSize: '30px'}} />
                                <h2>email-address</h2>
                                <p>FinalYearProject@gmail.com</p>
                            </div>
                            <div className="phone">
                                <FontAwesomeIcon className="i" icon={faPhoneVolume} style={{color: 'rgba(9, 149, 32, 1)', fontSize: '25px'}}/>
                                <h2>phone</h2>
                                <p>3333-4444-9999</p>
                            </div>
                            <div className="insta">
                                <FontAwesomeIcon className="i"  icon={faSquareInstagram} style={{color: 'rgba(9, 149, 32, 1)', fontSize: '40px'}}/>
                                <h2>Instagram</h2>
                                <p>Final-Year-Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;