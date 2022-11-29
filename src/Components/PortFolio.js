import React from "react";
import "../Styles/PortFolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GerichtResturant from "../img/Gericht Resturant.png";
import GymApp from "../img/Gym App.png";
import PizzaFudo from "../img/Pizza Fudo.png";
import MetaVerseMadness from "../img/MetaVerse Madness 1.png";

const projectData = [
  {
    img: GymApp,
    url: "https://gym-app-9f471.web.app/",
  },
  {
    img: GerichtResturant,
    url: "https://gericht-restaurant-5ac69.web.app/",
  },
  {
    img: MetaVerseMadness,
    url: "https://metaversus-madness.vercel.app/",
  },
  {
    img: PizzaFudo,
    url: "https://pizza-fudo.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projectData.map((item, id) => (
          <SwiperSlide key={id}>
            <div
              className="portfolio-image"
              style={{ position: "relative", width: 380, height: "186px" }}
            >
              <img src={item.img} alt="" />
              <form
                action={item.url}
                target="_blank"
                className="portfolio-item"
              >
                <button type="submit" className="button">
                  Click
                </button>
              </form>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
