import { useState, useEffect } from "react";
import { latestPostsData } from "../constant/data";

export default function LatestPostsScroller() {
  const totalItems = latestPostsData.length;
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Update itemsPerPage based on window width
  useEffect(() => {
    function updateItems() {
      if (window.innerWidth >= 992) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    }
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Calculate max start index to avoid overflow
  const maxStartIndex = Math.max(totalItems - itemsPerPage, 0);

  // Handle prev with proper wrap-around
  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? maxStartIndex : prev - 1));
  };

  // Handle next with proper wrap-around
  const handleNext = () => {
    setStartIndex((prev) => (prev === maxStartIndex ? 0 : prev + 1));
  };

  // Get visible items based on current startIndex and itemsPerPage
  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleItems.push(latestPostsData[(startIndex + i) % totalItems]);
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 px-3">
        <h4 className="fw-bold m-0">Latest Posts</h4>
        <div className="d-flex gap-2">
          <button
            onClick={handlePrev}
            className="btn btn-outline-danger me-2 border d-flex justify-content-center align-items-center"
            style={{ width: 40, height: 40 }}
            aria-label="Previous posts"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <button
            onClick={handleNext}
            className="btn btn-outline-danger me-2 border d-flex justify-content-center align-items-center"
            style={{ width: 40, height: 40 }}
            aria-label="Next posts"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="row">
        {visibleItems.map((post) => (
          <div
            key={post.id}
            className={`col-12 ${
              itemsPerPage === 1
                ? ""
                : itemsPerPage === 2
                ? "col-md-6"
                : "col-lg-4"
            } mb-4`}
          >
            <article className="card border-0 shadow-sm h-100">
              <img
                src={post.image}
                alt={post.boldTitle}
                className="card-img-top"
                style={{ height: 300, width: "100%", objectFit: "cover" }}
              />
              <div className="card-body p-3">
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center border border-2 me-3"
                    style={{ width: 60, height: 80 }}
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
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
