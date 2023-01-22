import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../postview.css";
// import { td } from "./assets/more_icon.svg";
// import gif from "./assets/loading-gif.gif";
const Postview = () => {

    const getDate = () => {
        let date = new Date().toLocaleDateString();
        return date;
    }
    const [data, setdata] = useState([]);

    const showPosts = async () => {
        const resp = await fetch('http://localhost:8080/api')
        setdata(await resp.json())

    }
    console.log(data?.result);
    useEffect(() => {
        showPosts()
    }, [])

    return (
        <>
            <div id="siteheader">
                <div id="logo">
                    <img src="./assets/icon.svg" alt="none"></img>
                    <h2 id="instaclone"> Instaclone</h2>
                </div>
                <Link to="/form"> <button id="camera">   <img src="./assets/camera.png" alt="none"></img></button></Link>
            </div>

            {data?.result?.map((post, index) => {
                return (
                    <ul key={index} id="post-box">
                        {/* <li>{post?._id}</li> */}
                        <div className="top-left">
                            <li className="author">{post?.author}</li>
                            <li className="location">{post?.location}</li>
                        </div>
                        <div className="more-icons"><img src={"./assets/more_icon.svg"} alt="more_icons"></img></div>                        <li className="pic"><img src={`http://localhost:8080/images/${post.image_file}`} alt="none" className="image" /></li>
                        <div className="like-share">
                            <li className="heart"><img src={"./assets/heart.png"} alt="heart"></img></li>
                            <li className="share"><img src={"./assets/share.png"}></img></li>
                            <li className="date">{getDate()}</li>
                        </div>
                        <div className="bottom-left">
                            <li className="likes">{`${Math.floor(Math.random() * 100)} likes`}</li>
                            <li className="description">{post?.description}</li>
                        </div>
                    </ul >
                )
            })}


        </>

    )
}

export default Postview;