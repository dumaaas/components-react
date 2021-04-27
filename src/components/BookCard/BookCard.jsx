import React from 'react';
import Image from '../Image/Image';
import './BookCard.css';

const BookCard = (props) => {
    return <div className="wrapper-book">
        <div className="hidden book-img">
            <Image src={props.src}/>
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
            <span className="hidden publisher">{props.publisher}</span>
            <div className="hidden-lg img-mobile">
                <Image src={props.src}/>
            </div>
        </div>
    </div>
}

export default BookCard;