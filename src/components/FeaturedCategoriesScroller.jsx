import { useState, useEffect } from "react";
import { latestPostsData } from "../constant/data";

export default function LatestPostsScroller() {
  const responsive = {
    desktop: { min: 1024, items: 3 },
    tablet: { min: 576, items: 2 },
    mobile: { min: 0, items: 1 },
  };

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [cardWidth, setCardWidth] = useState("100%");

  const updateResponsive = () => {
    const width = window.innerWidth;
    if (width >= responsive.desktop.min) {
      setItemsPerPage(responsive.desktop.items);
      setCardWidth("calc((100% - 2rem) / 3)"); // 3 cards with 1rem gap between
    } else if (width >= responsive.tablet.min) {
      setItemsPerPage(responsive.tablet.items);
      setCardWidth("calc((100% - 1rem) / 2)"); // 2 cards with 1rem gap
    } else {
      setItemsPerPage(responsive.mobile.items);
      setCardWidth("100%");
    }
  };

  useEffect(() => {
    updateResponsive();
    window.addEventListener("resize", updateResponsive);
    return () => window.removeEventListener("resize", updateResponsive);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - itemsPerPage + latestPostsData.length) % latestPostsData.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % latestPostsData.length);
  };

  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleItems.push(latestPostsData[(startIndex + i) % latestPostsData.length]);
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold m-0">Latest Posts</h4>
        <div className="d-flex gap-2">
          <button
            onClick={handlePrev}
            className="btn btn-outline-danger d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
            aria-label="Previous posts"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="btn btn-outline-danger d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
            aria-label="Next posts"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="d-flex overflow-hidden" style={{ gap: "1rem" }}>
        {visibleItems.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0"
            style={{ width: cardWidth }}
          >
            <div className="card border-0 shadow-sm h-100">
              <img
                src={post.image}
                alt={post.boldTitle}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body p-3">
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center border border-2 me-3"
                    style={{ width: "60px", height: "80px" }}
                  >
                    <span className="fw-bold fs-5">{post.day}</span>
                    <small className="text-uppercase">{post.month}</small>
                  </div>
                  <div>
                    <small className="text-danger text-uppercase">
                      {post.smallTitle}
                    </small>
                    <h6 className="fw-bold mb-1">{post.boldTitle}</h6>
                    <p className="text-muted small mb-0">{post.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
