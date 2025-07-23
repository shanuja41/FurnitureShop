import { useState, useEffect } from "react";
import { productData } from "../constant/data";

const responsive = {
  desktop: { max: 5000, min: 1024, items: 4 },
  tablet: { max: 1024, min: 576, items: 2 },
  mobile: { max: 576, min: 0, items: 1 },
};

export default function CardSection({ heading }) {
  const totalCards = productData.length;

  const getCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= responsive.desktop.min && width <= responsive.desktop.max) {
      return Math.min(responsive.desktop.items, totalCards);
    } else if (width >= responsive.tablet.min && width < responsive.tablet.max) {
      return Math.min(responsive.tablet.items, totalCards);
    } else {
      return Math.min(responsive.mobile.items, totalCards);
    }
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsPerSlide(getCardsPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalCards]);

  useEffect(() => {
    if (totalCards <= cardsPerSlide) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerSlide, totalCards]);

  const nextSlide = () => setStartIndex((prev) => (prev + 1) % totalCards);
  const prevSlide = () =>
    setStartIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerSlide; i++) {
      visible.push(productData[(startIndex + i) % totalCards]);
    }
    return visible;
  };

  return (
    <div className="container my-5">
      {/* Header and controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">{heading}</h4>
        {totalCards > 1 && (
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={prevSlide}
              className="btn btn-outline-danger me-2 border d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px", zIndex: 20 }}
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-outline-danger me-2 border d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px", zIndex: 20 }}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        )}
      </div>

      {/* Cards row with gap instead of margins */}
      <div
        className="d-flex overflow-hidden"
        style={{ gap: "16px" /* or 1rem or whatever spacing you want */ }}
      >
        <div
          className="d-flex flex-nowrap"
          style={{
            width: "100%",
            transition: "transform 0.5s ease",
          }}
        >
          {getVisibleCards().map((item) => (
            <div
              key={item.id}
              className="card border-1 m-1 shadow-sm post-card" 
              style={{
                flex: `0 0 calc((100% - ${(cardsPerSlide - 1) * 16}px) / ${cardsPerSlide})`,
                // This formula subtracts the total gaps width, then divides the remaining width evenly
                minWidth: `calc((100% - ${(cardsPerSlide - 1) * 16}px) / ${cardsPerSlide})`,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top "
                style={{ height: "200px"}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="text-muted">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
