import { useState } from "react";
import "./SignUp.css"; // Import external CSS
import { useRef} from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope,faLock,faCircleUser,faLocationDot,faPlus} from '@fortawesome/free-solid-svg-icons';

export default function SignUp({ onClose }) {

    const [files, setFiles] = useState(null);
    const[isFile,setIsFile]=useState(false);
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [imgPath, setImgPath] = useState("");

    const handleFileChange = (event) => {
        //console.log(event.target.files[0]);
        setFiles(event.target.files[0]); // Save only the first file
        setIsFile(true);
        setImgPath(event.target.files[0]);
    };
    const fileInputRef = useRef(null);
    const handleClick = () => {
        fileInputRef.current.click(); // Programmatically click the hidden file input
    };

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("address", address);
        formData.append("avatar", files);
        console.log(username+" "+" "+email+" "+password+" "+address+" "+files);

        try
        {
            const response=await fetch(`http://localhost:8000/api/v1/users/register`,{
                method:"POST",
                credentials: "include",
                body:formData,
            });
            console.log(response);

            const result = await response.json();
            if (response.ok) {
                alert("user created successfully!");
            } else {
                alert(result.message || "Something went wrong!");
            }

            setUsername("");
            setEmail("");
            setAddress("");
            setPassword("");
            setFiles(null);
            setImgPath("");

        }catch (e) {
            console.error("Error:", e);
            alert("Something went wrong!");
            setUsername("");
            setEmail("");
            setAddress("");
            setPassword("");
            setFiles(null);
            setImgPath("");
        }
    }

    return (
        <div className="popup">
            <div className="selectAmount">
                    <div className="right">
                        <div className="rightTop">
                            <div className="upperText">
                                <div className="firstDiv">
                                    <h2>Sign up</h2>
                                </div>
                                <div className="line">
                                    <p>Sign up to Continue</p>
                                </div>
                            </div>
                            <div className="inputProfilePic">
                                    <button onClick={handleClick} className="customer1">
                                      <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: 'grey' }} />
                                    </button>

                                    {/* Hidden file input */}
                                    <input
                                      type="file"
                                      ref={fileInputRef}
                                      onChange={handleFileChange}
                                      style={{ display: 'none' }}
                                    />

                                    {/* <div className="imageProfilePic">
                                      {isFile? <img src={`./src/assets/${imgPath.name}`} alt="profile" /> :<img src="./src/assets/download (5).jpg" alt="profile" />}
                                    </div> */}
                                    <div className="imageProfilePic">
                                        {isFile && imgPath
                                          ? <img src={URL.createObjectURL(imgPath)} alt="profile" />
                                          : <img src="./src/assets/download (5).jpg" alt="profile" />
                                        }
                                    </div>
                            </div>
                            <div className="input-div">
                                <div className="i1"> 
                                    <FontAwesomeIcon icon={faUser} className="customer"/>
                               </div>
                                <input type="text" id="text" placeholder="username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
                            <div className="input-div">
                                <div className="i1"> 
                                    <FontAwesomeIcon icon={faEnvelope} className="customer"/>
                               </div>
                                <input type="email" id="email" placeholder="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="input-div">
                                <div className="i1"> 
                                    <FontAwesomeIcon icon={faLock} className="customer"/>
                               </div>
                               <input required type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className="input-div">
                                <div className="i1"> 
                                    <FontAwesomeIcon icon={faLocationDot} className="customer" />
                               </div>
                               <input required type="text" placeholder="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="amountButtons">
                <button className="btn1" onClick={handleSubmit}>Submit</button>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}