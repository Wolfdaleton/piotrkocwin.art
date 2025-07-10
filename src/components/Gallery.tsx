import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './styles/GalleryStyle.scss';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {

  const galleryImages = images.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <div className="gallery">
      <ImageGallery items={galleryImages} showPlayButton={false} />
    </div>
  );
};

export default Gallery;