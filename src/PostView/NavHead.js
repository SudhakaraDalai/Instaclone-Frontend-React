import React from "react";
import "../Styles/NavHead.css"
import { Link } from "react-router-dom";

export default function NavHead(){
    return(
        <nav className='header'>
        <section className='logo'>
            <img src={require('../Svg/instagram.png')} alt='logo' />
                <span>INSTACLONE</span>
        </section>
        <section className="camera-icon">
        <Link to = "/uploadview" >
            <img src={require('../Svg/camera.png')} alt='camera' />
        </Link>
        </section>
    </nav>
    )
}