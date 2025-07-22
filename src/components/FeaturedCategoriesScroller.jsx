import { useEffect, useRef, useState } from 'react';
import { featuredCategoryData } from '../constant/data';

export default function FeaturedCategoriesScroller() {
  const itemsPerPage = 6;  // changed here
  const cardCount = featuredCategoryData.length;
  const [currentIndex, setCurrentIndex] = useState(cardCount); // start from middle
  const containerRef = useRef(null);

  const loopedData = [
    ...featuredCategoryData,
    ...featuredCategoryData,
    ...featuredCategoryData,
  ]; // simulate infinite scroll

  useEffect(() => {
    const totalLength = cardCount * 3;
    if (currentIndex >= totalLength - itemsPerPage) {
      const timeout = setTimeout(() => {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(cardCount);
      }, 600);
      return () => clearTimeout(timeout);
    }
    if (currentIndex <= 0) {
      const timeout = setTimeout(() => {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(cardCount);
      }, 600);
      return () => clearTimeout(timeout);
    }

    containerRef.current.style.transition = 'transform 0.6s ease-in-out';
  }, [currentIndex, cardCount]);

  const handlePrev = () => setCurrentIndex((prev) => prev - 1);
  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  const cardWidthPercent = 30 / itemsPerPage;

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-4 px-3">
        <h4 className="fw-bold m-0 text-uppercase">Featured Categories</h4>
        <div>
          <button onClick={handlePrev} className="btn btn-outline-danger me-2 border">
            &#8592;
          </button>
          <button onClick={handleNext} className="btn btn-outline-danger me-2 border">
            &#8594;
          </button>
        </div>
      </div>

      <div className="position-relative overflow-hidden">
        <div
          ref={containerRef}
          className="d-flex"
          style={{
            transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
            width: `${(loopedData.length / itemsPerPage) * 100}%`,
          }}
        >
          {loopedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                flex: `0 0 ${cardWidthPercent}%`,
                maxWidth: `${cardWidthPercent}%`,
              }}
            >
              <div className="me-0 rounded-4 shadow-sm mx-2 bg-white h-100">
                <div className=" d-flex flex-column align-items-center text-center h-100">
                   <div className="hover-image-wrapper w-100 h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                    style={{
                      height: '200px',
                      width: '100%',
                    }}
                  />
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}