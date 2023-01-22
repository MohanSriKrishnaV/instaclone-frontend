import React from "react";
import { Link } from "react-router-dom";
import "../landing.css";
// import Form from "./form";
const Landing = () => {
    return (
        <>
            <div id="landing">
                <img src="./assets/header.png" alt="none" id="header-landing"></img>
                <div id="landingleft">
                    <h1 id="team"> 10x Team</h1>
                    <Link to="/postview"> <button id="enter">Enter</button></Link>
                </div>


            </div>



        </>

    )
}

export default Landing;