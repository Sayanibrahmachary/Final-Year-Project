import { useState } from "react";
import "./Login.css"; // Import external CSS

function Login({ onClose }) {

    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const data=
        {
            username:username,
            email: email,
            password:password,
        }

        try
        {
            const response=await fetch(`http://localhost:8000/api/v1/users/login`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                alert("user login successfully!");
                localStorage.setItem("token", result.data.accessToken);
				const token =localStorage.getItem("token");

                localStorage.setItem("userId", result.data.user._id);
                const userId =localStorage.getItem("userId");
            } else {
                alert(result.message || "Something went wrong!");
            }

            setUsername("");
            setEmail("");
            setPassword("");
        }catch (e) {
            console.error("Error:", e);
            alert("Something went wrong!");
            setUsername("");
            setEmail("");
            setPassword("");
        }
    }


    return (
        <div className="popup">
            <h2>Login</h2>
            <div className="selectAmount">
                <input type="text" placeholder="Required Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="email" placeholder="Required Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Required Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="amountButtons">
                <button className="btn1" onClick={handleSubmit}>Submit</button>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
export default Login;