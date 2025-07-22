import { useState, useEffect } from 'react';
import { latestPostsData } from '../constant/data';

export default function LatestPostsScroller() {
  const itemsPerPageDesktop = 3;
  const itemsPerPageTablet = 2;
  const itemsPerPageMobile = 1;

  const totalItems = latestPostsData.length;
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageMobile); // default 1 initially

  // Function to determine items per page based on window width
  const updateItemsPerPage = () => {
    if (window.innerWidth >= 992) setItemsPerPage(itemsPerPageDesktop);
    else if (window.innerWidth >= 768) setItemsPerPage(itemsPerPageTablet);
    else setItemsPerPage(itemsPerPageMobile);
  };

  useEffect(() => {
    updateItemsPerPage(); // set on mount

    // Add resize listener
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  // Handle previous and next buttons
  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  // Get visible items for current slide
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
            className="btn btn-outline-danger me-2 border"
            style={{ width: '36px', height: '36px' }}
            aria-label="Previous posts"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="btn btn-outline-danger me-2 border"
            style={{ width: '36px', height: '36px' }}
            aria-label="Next posts"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="d-flex overflow-hidden">
        {visibleItems.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 me-3"
            style={{ minWidth: `${100 / itemsPerPage}%` }}
          >
            <div className="card border-0 shadow-sm post-card">
              <img
                src={post.image}
                alt={post.boldTitle}
                className="card-img-top"
                style={{ height: '300px',}} // image cover
              />
              <div className="card-body p-3">
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center border border-2 me-3"
                    style={{ width: '60px', height: '80px' }}
                  >
                    <span className="fw-bold fs-5">{post.day}</span>
                    <small className="text-uppercase">{post.month}</small>
                  </div>
                  <div>
                    <small className="text-danger text-uppercase">{post.smallTitle}</small>
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
