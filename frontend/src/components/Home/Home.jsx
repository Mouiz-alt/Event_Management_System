import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    // localStorage.clear();
    const [isLoggedIn, setLoggedIn] = useState("false");

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, [])
    }, 5000)

    if (!isLoggedIn || isLoggedIn === "false"){
        return(
            <div class="content">
                <div>
                <h1>Eventro</h1>
                    <p className="tagline">
                        <em> ‘ Simplify ’ your Events </em>
                    </p>
                    <p className="about">
                    Discover the magic of EVENTRO — your ultimate solution for seamless event management.
                    From quick sign-ups to effortless registration and schedule coordination, our intuitive
                    platform simplifies every step. Packed with powerful features, EVENTRO takes care of the 
                    details so you can focus on bringing your event vision to life. Let us make your event 
                    planning smooth, smart, and stress-free!
                    </p>
                </div>
                
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div class = "content">
                <div>
                <h1>Eventify</h1>
                    <p className="tagline">
                        <em> ‘ Simplify ’ your Events </em>
                    </p>
                    <p className="about">
                    Explore the magic of our application 'EVENTIFY'.
                    A go-to solution for managing amazing events effortlessly. From easy sign-ups to registering and managing event schedules, our user-friendly platform has everything you need for a flawless experience. 
                    With powerful features, trust our system to handle the details, and let's bring your event vision to life!!!
                    </p>
                </div>
            </div>
            
        )
    }
    
}