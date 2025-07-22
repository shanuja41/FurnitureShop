import { useState, useEffect, useRef } from 'react';
import { productData } from '../constant/data';

export default function CardScroller({heading}) {
  const itemsPerPage = 5;
  const totalItems = productData.length;
  const middleIndex = totalItems;
  const [currentIndex, setCurrentIndex] = useState(middleIndex);
  const containerRef = useRef(null);
  const transitionRef = useRef(true);
  const isResettingRef = useRef(false);

  const loopedData = [...productData, ...productData, ...productData];
  const cardWidthPercent = 50 / itemsPerPage;

  // Update scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const offset = currentIndex * cardWidthPercent;

    if (transitionRef.current) {
      container.style.transition = 'transform 0.5s ease';
    } else {
      container.style.transition = 'none';
    }

    container.style.transform = `translateX(-${offset}%)`;
  }, [currentIndex, cardWidthPercent]);

  // Smooth infinite loop without flicker
  useEffect(() => {
    const totalLength = totalItems * 3;
    const container = containerRef.current;

    if (!container) return;

    const handleTransitionEnd = () => {
      if (isResettingRef.current) {
        transitionRef.current = false;
        isResettingRef.current = false;
        setCurrentIndex(totalItems);
      }
    };

    container.addEventListener('transitionend', handleTransitionEnd);

    if (currentIndex === 0 || currentIndex === totalLength - itemsPerPage) {
      isResettingRef.current = true;
      transitionRef.current = true; // allow transition to finish before jump
    } else {
      transitionRef.current = true;
    }

    return () => {
      container.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">{heading}</h4>
        <div>
          <button
            onClick={handlePrev}
            className="btn btn-outline-danger me-2 border"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="btn btn-outline-danger me-2 border"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="overflow-hidden" style={{ width: '100%' }}>
        <div
          ref={containerRef}
          className="d-flex"
          style={{
            width: `${(loopedData.length / itemsPerPage) * 100}%`,
          }}
        >
          {loopedData.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              style={{
                flex: `0 0 ${cardWidthPercent}%`,
                maxWidth: `${cardWidthPercent}%`,
                padding: '0 0.5rem',
              }}
            >
              <div className="shadow-sm p-2 h-100 d-flex flex-column align-items-center product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid mb-3"
                  style={{
                    height: '250px', 
                    border: '1px solid rgba(0,0,0,0.1)',
                    width: '100%',
                  }}
                />
                <h6 className="fw-semibold">{product.name}</h6>
                <p className="text-muted">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
