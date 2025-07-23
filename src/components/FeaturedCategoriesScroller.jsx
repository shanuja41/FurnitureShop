import { useState, useEffect } from "react";
import { featuredCategoryData } from "../constant/data";

const responsive = {
  desktop: { max: 5000, min: 1024, items: 4 },
  tablet: { max: 1024, min: 576, items: 2 },
  mobile: { max: 576, min: 0, items: 1 },
};

export default function FeaturedCategoriesScroller({ heading = "FEATURED CATEGORIES" }) {
  const totalItems = featuredCategoryData.length;

  const getItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= responsive.desktop.min && width <= responsive.desktop.max) {
      return Math.min(responsive.desktop.items, totalItems);
    } else if (width >= responsive.tablet.min && width < responsive.tablet.max) {
      return Math.min(responsive.tablet.items, totalItems);
    } else {
      return Math.min(responsive.mobile.items, totalItems);
    }
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setItemsPerSlide(getItemsPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalItems]);

  const nextSlide = () => setStartIndex((prev) => (prev + 1) % totalItems);
  const prevSlide = () => setStartIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visible.push(featuredCategoryData[(startIndex + i) % totalItems]);
    }
    return visible;
  };

  return (
    <div className="container my-5">
      {/* Header and buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">{heading}</h4>
        {totalItems > 1 && (
          <div className="d-flex gap-2">
            <button
              onClick={prevSlide}
              className="btn btn-outline-danger me-2 border d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-outline-danger me-2 border d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        )}
      </div>

      <div className="d-flex overflow-hidden" style={{ gap: "16px" }}>
        <div
          className="d-flex"
          style={{ width: "100%", transition: "transform 0.6s ease" }}
        >
          {getVisibleItems().map((item) => (
            <div
              key={item.id}
              className="card border-0 shadow-sm"
              style={{
                flex: `0 0 calc((100% - ${(itemsPerSlide - 1) * 16}px) / ${itemsPerSlide})`,
                borderRadius: 0,
                overflow: "hidden",
                padding: 3,
                height: "280px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="hover-image-wrapper position-relative w-100"
                style={{ flex: "0 0 auto", height: "220px", overflow: "hidden" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "100%",
                   
                    borderRadius: 0,
                    display: "block",
                  }}
                />
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-light read-more-btn fs-6 fs-md-5">
                    Read More
                  </button>
                </div>
              </div>
              {/* Add other card content below if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
