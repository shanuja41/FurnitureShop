import { useState } from 'react';
import { logoData } from '../constant/data';

export default function LogoScroller() {
  const itemsPerPage = 6;
  const totalItems = logoData.length;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    if (startIndex === 0) {
      setStartIndex(totalItems - itemsPerPage);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex >= totalItems - itemsPerPage) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleLogos = logoData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold">Our Partners</h5>
        <div className="d-flex gap-2">
          <button
            onClick={handlePrev}
            className="btn btn-outline-danger me-2 border"
            style={{ width: '36px', height: '36px' }}
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="btn btn-outline-danger me-2 border"
            style={{ width: '36px', height: '36px' }}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        {visibleLogos.map((logo) => (
          <div
            key={logo.id}
            className="col-6 col-sm-4 col-md-2 d-flex justify-content-center"
          >
            <div
              className="d-flex align-items-center justify-content-center "
              style={{
                width: '120px',
                height: '80px',
            
                backgroundColor: '#fff',
            
              }}
            >
              <div className="logo-overlay-wrapper">
              <img
                src={logo.image}
                alt={logo.alt}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
