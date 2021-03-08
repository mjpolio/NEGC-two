import React, { useState }from 'react';
import './style.scss';
import { images } from './images';
import Gallery from './Gallery';
import PhotosNav from './PhotosNav';

const Photos = () => {
	const [img, setImg] = useState(images);
	const [selectedGallery, setSelectedGallery] = useState(0);

	const selectedGall = img.filter((gallery) => gallery.id == selectedGallery);
	const renderedGallery = selectedGall.map((item) => {
		return <Gallery key={item.id} {...item}/> 
	})

	return (
		<div className='photos'>
			<h2 className='heading heading-primary'>
				Our Photo Gallery
				<div className="underline"></div>
			</h2>
			<PhotosNav onSelect={id => setSelectedGallery(id)} active={selectedGallery} images={images}/>
			<div className="photos-container">
				{renderedGallery}
			</div>
		</div>
	);
};

export default Photos;
