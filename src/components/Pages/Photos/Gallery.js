import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';


const Gallery = ({id, title, photos}) => {
    const imageList = photos.map((photo) => {
        return (
            <a href={photo} key={id}>
			        <img src={photo} alt={title} className="photos-section-item" />
            </a>
        )
    })

    return (
        <div>
            <div className="heading heading-secondary photos-section-title">
              {title}
			    <div className='underline'></div>
            </div>
            
                <div className="photos-section-gallery">
                <SRLWrapper>
                {imageList}
                </SRLWrapper>
                </div>
        </div>
      )
}

export default Gallery;
