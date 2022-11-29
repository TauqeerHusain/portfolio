import React from "react";
import "../Styles/Intro.css";
import Github from "../img/github.png";
import Instagram from "../img/instagram.png";
import Linkedin from "../img/linkedin.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import Crown from "../img/crown.png";
import Glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hey! I Am </span>
          <span>Tauqeer Hussain </span>
          <span>
            Hi, My name is Tauqeer Hussain and I have been learning web
            development since 2 years and very much dedicated to make myself
            gear up with some professional skills. Frontend Developer with high
            level of experience in web designing and development, producting the
            Quality work
          </span>
        </div>
        <form
          target="_blank"
          action="https://drive.google.com/file/d/146jl8jYJT-qi0kW0l_dsRxgRosu1nWva/view?usp=share_link"
        >
          <button className="button intro-button" type="submit">
            See my CV
          </button>
        </form>
        <div className="intro-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
