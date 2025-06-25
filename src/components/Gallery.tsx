import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;