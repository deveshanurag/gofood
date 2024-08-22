import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        
        
      >
        <div className="carousel-inner" id="carousel" style={{maxHeight: "500px"}}>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-level="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success ms-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div style={{maxHeight: "300px"}}>
          <div className="carousel-item active">
            <img
              src="/thali.webp"
              className="d-block w-100"
              style={{objectFit: "fill", filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/pizza.avif"
              className="d-block w-100"
              style={{ objectFit: "fill", filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/burger.webp"
              className="d-block w-100"
              style={{ objectFit: "fill", filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
