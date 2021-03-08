import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';



const EventItem = (props) => {
    return (
        <div className="event-item">
            <div className="event-item-image">
                <img src={props.src} alt="garden" className="event-item-image-img"/>
            </div>
            <div className="event-item-description">
                <div  className="event-item-description-date">{props.date}</div>
                <div className="event-item-description-info">
                    <div className="event-item-description-info-topic">{props.topic}</div>
                    <div className="event-item-description-info-name">{props.name}</div>
                </div>
                <div>
                    <button className="event-item-button">
                        <Link to="/calendar">Learn More</Link>
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default EventItem;
