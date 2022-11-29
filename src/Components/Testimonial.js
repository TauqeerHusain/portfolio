import React from "react";
import "../Styles/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../img/profile1.jpg";
import profilePic2 from "../img/profile2.jpg";
import profilePic3 from "../img/profile3.jpg";
import profilePic4 from "../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I believe your work will bring joy to many people in the future. May your creativity shine bright in the days to come.",
    },
    {
      img: profilePic2,
      review:
        "Your refreshing take on accomplishing our team goal makes it an absolute pleaser to work with you! Keep the imagination flowing.",
    },
    {
      img: profilePic3,
      review: " We are fortunate to have an innovator like you amongst us",
    },
    {
      img: profilePic4,
      review:
        "Be proud of the fact that you have the power to rise above any situation and deliver the best results no matter the circumstances. Excellent work!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
