import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDom.render(
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>, 
    document.getElementById('root')
);
