import React from 'react';
import IdPhoto from '../IdPhoto/IdPhoto';
import './BookCard.css';

const BookCard = (props) => {
    return <div className="wrapper-book">
        <div className="book-img">
            <IdPhoto src={props.src}/>
        </div>
        <div className="book-content">
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.author}
            </h2>
            <span>Originally published </span>
            <h3>{props.publishYear}</h3>
            <span>Quote</span>
            <h3>{props.quote}</h3>
            <span className="publisher">{props.publisher}</span>
        </div>
    </div>
}

export default BookCard;