import React from 'react';
import Image from '../Image/Image';
import './MovieCard.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MovieIcon from '@material-ui/icons/Movie';

const MovieCard = (props) => {
    return <div className="wrapper-movie">
        <div className="movie-img">
            <Image src={props.image}></Image>
        </div>
        <div className="movie-content">
            <h1>{props.name} ({props.releaseYear})</h1>
            <p>{props.director}  / {props.genre}  </p>
            <h2>SUMMARY</h2>
            <p>
                {props.summary}
            </p>
            <span>
                {props.actors}
            </span>
            <div className="movie-bottom">
                <a href={props.trailer} className="trailer" target="_blank">
                    <PlayArrowIcon/> 
                    <span>WATCH TRAILER</span> 
                </a>
                
                <a href={props.imdb} className="imdb" target="_blank">
                    <MovieIcon/> 
                    <span>IMDb</span> 
                </a>
            </div>
        </div>
    </div>
}

export default MovieCard;