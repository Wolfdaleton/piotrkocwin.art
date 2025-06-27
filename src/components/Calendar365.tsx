import React, { useEffect, useState } from 'react';
import { getImageDateFromExif } from '../utils/exifLoader';
import './styles/Calendar365Style.css';

// Helper to get all days in a month
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

interface Calendar365Props {
  images: string[];
}

const Calendar365: React.FC<Calendar365Props> = ({ images }) => {
  const [dateToImage, setDateToImage] = useState<{ [date: string]: string }>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());

  useEffect(() => {
    // Map images to their EXIF dates
    async function mapImagesToDates() {
      const mapping: { [date: string]: string } = {};
      for (const img of images) {
        const exifDate = await getImageDateFromExif(img);
        if (exifDate) {
          // EXIF date format: "YYYY:MM:DD HH:MM:SS"
          const datePart = exifDate.split(' ')[0].replace(/:/g, '-');
          mapping[datePart] = img;
        }
      }
      setDateToImage(mapping);
    }
    mapImagesToDates();
  }, [images]);

  const daysInMonth = getDaysInMonth(year, month);

  return (
    <div className="calendar-365">
      <div className="calendar-header">
        <button onClick={() => setMonth(m => m === 0 ? 11 : m - 1)}>&lt;</button>
        <span>{year} - {String(month + 1).padStart(2, '0')}</span>
        <button onClick={() => setMonth(m => m === 11 ? 0 : m + 1)}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasImage = !!dateToImage[dateStr];
          return (
            <button
              key={dateStr}
              className={`calendar-day${hasImage ? ' has-image' : ' no-image'}`}
              disabled={!hasImage}
              onClick={() => hasImage && setSelectedDate(dateStr)}
            >
              {day}
            </button>
          );
        })}
      </div>
      {selectedDate && dateToImage[selectedDate] && (
        <div className="calendar-image-preview">
          <h4>{selectedDate}</h4>
          <img src={dateToImage[selectedDate]} alt={selectedDate} />
        </div>
      )}
    </div>
  );
};

export default Calendar365;