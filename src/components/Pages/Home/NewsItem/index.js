import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NewsItem = (props) => {

    return (
        <Link to="/news" className="news-item">
            <div className="news-item-image">
                <img src={props.image} alt="garden" className="news-item-image-img"/>
            </div>
            <div className="news-item-description">
                <div className="news-item-description-info">{props.description}</div>
                <button className="news-item-button">
                    <Link to="/news">Read More</Link>
                </button>
                
            </div>
            
            
        </Link>
    )
}

export default NewsItem;
