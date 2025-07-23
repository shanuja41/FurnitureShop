import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import CardScroller from "../components/CardScroller";
import FeaturedCategoriesScroller from "../components/FeaturedCategoriesScroller";
import { heroImages, heroSlides, featureData } from "../constant/data";
import LatestPostsScroller from "../components/LatestPost";
import LogoScroller from "../components/LogoScroller";

export default function Home() {
  const links = [
    "Home",
    "Furniture",
    "All Products",
    "Shop",
    "Mobile Offer",
    "Deals",
    "Blog",
    "Contact Us",
    "Custom Menu",
  ];
  return (
    <>
      <header>
        <div className="topheader container-fluid p-0 border-bottom">
          <div className="container">
            <div className="row ">
              {/* Left Column */}
              <div className="col-6 col-md-6">
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 text-black h-100">
                  {/* Language Dropdown */}
                  <div className="dropdown drop4">
                    <button
                      className="btn btn-sm dropdown-toggle text-muted"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          French
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Currency Dropdown */}
                  <div className="dropdown drop4">
                    <button
                      className="btn btn-sm dropdown-toggle text-muted"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          SLR
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-6 col-md-6">
                <div className="d-flex flex-wrap justify-content-end align-items-center text-black gap-3 h-100">
                  {/* My Account Dropdown */}
                  <div className="dropdown drop4">
                    <a
                      className="dropdown-toggle text-muted text-decoration-none border-start p-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-person me-1" />
                      My Account <i className="fa fa-angle-down ms-1" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          My account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Wishlist
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Desktop Only Links */}
                  <a
                    href="#"
                    className="text-muted text-decoration-none d-none d-lg-block border-start p-2"
                  >
                    <i className="bi bi-heart me-1" />
                    Wishlist
                  </a>

                  <a
                    href="#"
                    className="text-muted text-decoration-none d-none d-lg-block border-start p-2"
                  >
                    <i className="bi bi-box-arrow-in-right me-1" />
                    Checkout
                  </a>

                  <a
                    href="#"
                    className="text-muted text-decoration-none d-none d-lg-block border-start border-end p-2"
                  >
                    <i className="bi bi-lock-fill me-1" />
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second header */}
        <div className="secondheader text-white">
          <div className="container h-100 d-flex align-items-center">
            <div className="row align-items-center w-100">
              {/* Logo Section */}
              <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0">
                <img src={logo} className="img-fluid" alt="logo" />
              </div>

              {/* Icons Section */}
              <div className="col-md-9 d-none d-md-flex justify-content-end align-items-center gap-4 flex-wrap">
                {/* 1st icon */}
                <div className="d-flex align-items-center gap-2">
                  <div className="icon-circle">
                    <i className="bi bi-truck" />
                  </div>
                  <div className="icon-text">
                    <div className="fw-bold text-dark">Free Delivery</div>
                    <div className="small text-muted">on orders over $50</div>
                  </div>
                </div>

                {/* 2nd icon */}
                <div className="d-flex align-items-center gap-2">
                  <div className="icon-circle">
                    <i className="bi bi-shield-lock" />
                  </div>
                  <div className="icon-text">
                    <div className="fw-bold text-dark">Secure Payment</div>
                    <div className="small text-muted">100% protected</div>
                  </div>
                </div>

                {/* 3rd icon */}
                <div className="d-flex align-items-center gap-2">
                  <div className="icon-circle">
                    <i className="bi bi-clock-history" />
                  </div>
                  <div className="icon-text">
                    <div className="fw-bold text-dark">24/7 Support</div>
                    <div className="small text-muted">Always available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="container bg-dark third-header-nav position-relative ">
          <div className="d-flex flex-wrap align-items-center justify-content-between p-2">
            <nav className="navbar navbar-dark navbar-expand-lg w-100 p-0">
              {/* Mobile view: left toggler + right icons */}
              <div className="d-lg-none d-flex justify-content-between align-items-center w-100 px-2 py-2">
                {/* Toggler (left) */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Icons (right) */}
                <div className="d-flex align-items-center gap-3">
                  <div className="border-end pe-3">
                    <i
                      className="bi bi-search fs-5"
                      style={{ cursor: "pointer", color: "white" }}
                    ></i>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <i
                      className="bi bi-cart fs-5"
                      style={{ cursor: "pointer", color: "white" }}
                    ></i>
                    <span className="small text-white">(3 items)</span>
                  </div>
                </div>
              </div>

              {/* Desktop Nav - shown only on large screens */}
              <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                {/* Left-aligned Nav Items */}
                <ul className="navbar-nav flex-row">
                  {links.map((link, i) => (
                    <li key={i} className="nav-item fw-bold">
                      <a href="#" className="nav-link text-white px-2">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Right-aligned Icons (Desktop) */}
                <div className="d-flex align-items-center gap-3 ms-auto">
                  <div className="border-end pe-3">
                    <i
                      className="bi bi-search fs-5"
                      style={{ cursor: "pointer", color: "white" }}
                    ></i>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <i
                      className="bi bi-cart fs-5"
                      style={{ cursor: "pointer", color: "white" }}
                    ></i>
                    <span className="small text-white">(3 items)</span>
                  </div>
                </div>
              </div>

              {/* Offcanvas - Mobile View */}
              <div className="d-lg-none">
                <div
                  className="offcanvas offcanvas-end offcanvasSize"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="offcanvas-body">
                    <ul className="navbar-nav text-center">
                      {links.map((link, i) => (
                        <li key={i} className="nav-item">
                          <a href="#" className="nav-link link-dark px-2">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* herosection */}
      <div
        className="carousel-behind container-fluid p-0 position-relative start-0 end-0"
        style={{ zIndex: 1, top: "-38px" }}
      >
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}

          <div className="carousel-indicators carousel-custom ">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : "false"}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="position-relative hero-section ">
                  <img
                    src={img}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-white px-3 px-md-5 py-4 text-center w-100"
                    style={{ zIndex: 2, maxWidth: "600px" }}
                  >
                    <h2 className="fw-bold hero-title">
                      {heroSlides[index]?.title}
                    </h2>
                    <p className="text-uppercase  hero-desc pe-4">
                      {heroSlides[index]?.description}
                    </p>
                    <Link
                      to={heroSlides[index]?.buttonLink || "#"}
                      className="btn btn-outline-light rounded-0 mx-auto d-inline-block me-4"
                    >
                      {heroSlides[index]?.buttonText || "Learn More"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev custom-arrow"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next custom-arrow"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="container my-4 py-5" style={{ zIndex: 0 }}>
        <div className="row g-3">
          {/* Left Image - Takes full height of the right column */}
          <div className="col-lg-6 col-12">
            <div className="image-wrapper">
            <img
              src={heroImages[0]}
              alt="Left Image"
              className="img-fluid w-100 "
              style={{ height: "500px" }}
            />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-12 d-flex flex-column gap-3">
            {/* Top Right Image */}
            <div className="w-100">
              <div className="image-wrapper">
              
              <img
                src={heroImages[1]}
                alt="Top Right Image"
                className="img-fluid w-100 "
                style={{ height: "250px" }}
              />
              </div>
            </div>

            {/* Bottom Two Images */}
            <div className="row g-3">
              <div className="col-6">
                 <div className="image-wrapper">
                <img
                  src={heroImages[2]}
                  alt="Bottom Right Left"
                  className="img-fluid w-100 "
                  style={{ height: "234px" }}
                />
              </div>
              </div>
              <div className="col-6">
                <div className="image-wrapper">
                <img
                  src={heroImages[0]}
                  alt="Bottom Right Right"
                  className="img-fluid w-100 "
                  style={{ height: "234px" }}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardScroller heading="NEW PRODUCTS"/>

      <FeaturedCategoriesScroller />
      <CardScroller heading="FEATURES PRODUCTS"/>

      <div className="container my-5 border p-4 rounded">
        <div className="row text-center">
          {featureData.map(({ id, icon: Icon, title, description }, index) => (
            <div
              key={id}
              className={`col-12 col-sm-6 col-md-3 mb-4 d-flex flex-column align-items-center p-3 ${
                index !== featureData.length - 1 ? "border-end" : ""
              }`}
              style={{ borderColor: "#dee2e6" }}
            >
              <Icon size={48} className="mb-3 text-dark red-hover" />
              <h5 className="text-uppercase fw-bold red-hover">{title}</h5>
              <p className="text-muted small red-hover">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <LatestPostsScroller />
      <LogoScroller />

      {/* footer */}
      <footer className="bg-light pt-5 pb-4 text-center text-md-start">
        <div className="container">
          {/* About Section (Full Width Centered) */}
          <div className="text-center mb-5">
            <h5 className="fw-semibold">
              ABOUT <span className="text-dark">SIMEN</span>
            </h5>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <i className="bi bi-facebook text-muted fs-5 red-hover"></i>
              <i className="bi bi-twitter text-muted fs-5 red-hover"></i>
              <i className="bi bi-google text-muted fs-5 red-hover"></i>
              <i className="bi bi-pinterest text-muted fs-5 red-hover"></i>
            </div>
          </div>

        <div className="row text-start">
  {/* Contact Us */}
  <div className="col-md-6 col-lg-3 mb-4 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
    <h6 className="fw-bold mb-3">CONTACT US</h6>
    <p><i className="bi bi-house-door me-2 text-muted"></i>8888 South Avenue Street, New York</p>
    <p><i className="bi bi-telephone me-2 text-muted"></i>(12) 3 456 7896</p>
    <p><i className="bi bi-telephone me-2 text-muted"></i>(12) 3 456 7895</p>
    <p><i className="bi bi-envelope me-2 text-muted"></i>info@yourdomain.com</p>
    <p><i className="bi bi-envelope me-2 text-muted"></i>info@yourdomain.com</p>
  </div>

  {/* Service */}
  <div className="col-md-6 col-lg-2 mb-4 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
    <h6 className="fw-bold mb-3">SERVICE</h6>
    <ul className="list-unstyled text-muted">
      <li className="mb-2">Prices & Currencies</li>
      <li className="mb-2">Secure Payment</li>
      <li className="mb-2">Delivery Times & Costs</li>
      <li className="mb-2">Returns & Exchanges</li>
      <li className="mb-2">FAQ's</li>
    </ul>
  </div>

  {/* Account */}
  <div className="col-md-6 col-lg-2 mb-4 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
    <h6 className="fw-bold mb-3">ACCOUNT</h6>
    <ul className="list-unstyled text-muted">
      <li className="mb-2">My account</li>
      <li className="mb-2">Wishlist</li>
      <li className="mb-2">Order history</li>
      <li className="mb-2">Specials</li>
      <li className="mb-2">Gift vouchers</li>
    </ul>
  </div>

  {/* Information */}
  <div className="col-md-6 col-lg-2 mb-4 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
    <h6 className="fw-bold mb-3">INFORMATION</h6>
    <ul className="list-unstyled text-muted">
      <li className="mb-2">My account</li>
      <li className="mb-2">Wishlist</li>
      <li className="mb-2">Order history</li>
      <li className="mb-2">Specials</li>
      <li className="mb-2">Gift vouchers</li>
    </ul>
  </div>

  {/* Newsletter */}
  <div className="col-md-6 col-lg-3 mb-4 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
    <h6 className="fw-bold mb-3">NEWSLETTER</h6>
    <p className="text-muted">Register your email for news</p>
    <div className="input-group">
      <input type="email" className="form-control rounded-0" placeholder="Your email here" />
      <button className="btn btn-dark rounded-0 btn-red-hover">SUBSCRIBE</button>
    </div>
  </div>
</div>

        </div>

        {/* Copyright */}
        <div className="bg-light border-top mt-4 pt-3 pb-3 text-center text-muted">
          <div className="container d-md-flex justify-content-between align-items-center">
            <p className="mb-2 mb-md-0">
              © 2015 Magento Demo Store. All Rights Reserved. Developer by
              SNSTheme.Com
            </p>
            <div className="d-flex gap-2 justify-content-center">
         
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                alt="PayPal"
                height="30"
              />

          
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="MasterCard"
                height="30"
              />

              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                alt="American Express"
                height="30"
              />
          
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                height="30"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
