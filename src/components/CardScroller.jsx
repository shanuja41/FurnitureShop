import { useState, useEffect } from "react";
import { productData } from "../constant/data";

export default function CardSection({heading}) {
  const [startIndex, setStartIndex] = useState(0);
  const totalCards = productData.length;
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  function getCardsPerSlide() {
    const width = window.innerWidth;
    if (width < 400) return 1;
    else if (width >= 400 && width < 767) return 2;
    else if (width >= 768 && width < 992) return 3;
    else return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    if (startIndex + cardsPerSlide <= totalCards) {
      return productData.slice(startIndex, startIndex + cardsPerSlide);
    } else {
      const endSlice = productData.slice(startIndex, totalCards);
      const startSlice = productData.slice(
        0,
        (startIndex + cardsPerSlide) % totalCards
      );
      return [...endSlice, ...startSlice];
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      {/* 🔼 Heading & Controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">{heading}</h4>
        <div>
          <button
            onClick={prevSlide}
            className="btn btn-outline-danger me-2 border"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-outline-danger me-2 border"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* 🔽 Carousel */}
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              {getVisibleCards().map((item) => (
                <div className="card m-2" key={item.id} style={{ width: "18rem" }}>
                  <div className="shadow-sm p-2 h-100 d-flex flex-column align-items-center product-card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  /></div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
