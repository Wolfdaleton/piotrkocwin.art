import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './styles/GalleryStyle.scss';

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface GalleryProps {
  images: string[];
  pdfs?: string[];
}


const Gallery: React.FC<GalleryProps> = ({ images, pdfs }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  if (pdfs && pdfs.length > 0) {
    return (
      <div className="pdf-gallery">
        <Document file={pdfs[0]} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="pdf-spread">
            <Page 
              pageNumber={pageNumber} 
              scale={0.8}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
            {pageNumber < (numPages || 0) && (
              <Page 
                pageNumber={pageNumber + 1} 
                scale={0.8}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            )}
          </div>
        </Document>
        <div className="pdf-controls">
          <button
            onClick={() => setPageNumber(p => Math.max(1, p - 2))}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <span>
            Pages {pageNumber}-{Math.min(pageNumber + 1, numPages || 0)} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(p => (numPages ? Math.min(numPages - 1, p + 2) : p))}
            disabled={numPages ? pageNumber >= numPages - 1 : true}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

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