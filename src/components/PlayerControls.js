import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';


function PlayerControls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => {props.SkipSong(false) }}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" id="play-btn" onClick={() => {props.setIsPlaying(!props.isPlaying)}}>
                <FontAwesomeIcon icon={faPlay} />
            </button>
            <button className="paused-btn" id="paused-btn" onClick={() => {props.setIsPlaying(!props.isPlaying)}}>
                <FontAwesomeIcon icon={faPause} />
            </button>
            <button className="skip-btn" onClick={() => {props.SkipSong()}}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

window.onload = function() {
    document.getElementById("play-btn").onclick = function(){
        document.getElementById("playingText").innerHTML = 'Playing'
        document.getElementById("play-btn").style.display = "none";
        document.getElementById("paused-btn").style.display = "block";
    }
    document.getElementById("paused-btn").onclick = function(){
        document.getElementById("playingText").innerHTML = 'Paused'
        document.getElementById("play-btn").style.display = "block";
        document.getElementById("paused-btn").style.display = "none";
    }
 }



export default PlayerControls;
