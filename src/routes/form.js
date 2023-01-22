import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [author, setAuthor] = useState('')
    const [location, setLocation] = useState('')
    const [imageFile, setImageFile] = useState('');
    const [description, setDescritpion] = useState("");

    const navigate = useNavigate();
    const uploadPost = () => {

        const formData = new FormData();
        formData.append("author", author)
        formData.append("location", location)
        formData.append("image_file", imageFile)
        formData.append("description", description)

        fetch("https://instaclone-project-ajw2.onrender.com/api/post", {
            method: 'POST',
            body: formData
        })
        navigate("/postview");
    }

    return (
        <>
            <div id="siteheader">
                <div id="logo">
                    <img src="./assets/icon.svg" alt="none"></img>
                    <h2 id="instaclone"> Instaclone</h2>
                </div>
                <Link to="/form"> <button id="camera">   <img src="./assets/camera.png" alt="none"></img></button></Link>
            </div>

            <div id="form">
                <div className="inputs">
                    <input name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} ></input>
                </div>
                <div className="inputs">
                    <input name="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}  ></input>
                </div>
                <div className="inputs">

                    <textarea name="description" value={description} placeholder="Description" onChange={(e) => setDescritpion(e.target.value)}  ></textarea>
                </div>

                <div className="inputs">

                    <input type="file" onChange={(e) => { setImageFile(e.target?.files[0]); }}   ></input>

                </div>
                <button onClick={uploadPost} className="inputs post">Post</button>
            </div>
        </>

    )
}

export default Form;