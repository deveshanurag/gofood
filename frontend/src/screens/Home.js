import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";

//  import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0],response[1])
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner"
            id="carousel"
            style={{ maxHeight: "500px" }}
          >
            <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-level="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div style={{ maxHeight: "300px" }}>
              <div className="carousel-item active">
                <img
                  src="/plate.jpg"
                  className="d-block w-100"
                  style={{ objectFit: "fill", filter: "brightness(30%)" }}
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

      <div className="container">
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodCat.length !== 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItm={filterItems}
                              options={filterItems.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>no such item</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
