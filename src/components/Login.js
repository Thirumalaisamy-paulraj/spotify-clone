import React from "react";
import styled from "styled-components";
import logo from  "../spotify-images/logo-and-brand-assets/Spotify_Logo_RGB_Black.png";

export default function Login() {
    const handleClick = async () => {
        const client_id = "d3313de413c043178c2ad5c47fe422f8";
        const redirect_url = "http://localhost:3000/callback/";
        const api_url ="https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href =`${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
    };
    return (
        <Container>
            <img src={logo} alt="spotify"/>
            <button onClick = {handleClick}>Connect Spotify</button>
        </Container>
    );
}
const Container = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 height:100vh;
 width:100vw;
 background-color:#1db954;
 gap:5rem;
 img{
    height:20vh;
 }
 button {
    padding: 1rem 5rem;
    border-radius:5rem;
    background-color:black;
    color:#49f585;
    border:none;
    font-size:1.4 rem;
    cursor: pointer;
 }
` ;
