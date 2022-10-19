import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Hero_button } from "../button/button";

// hero assets
import dragon_video from "../../../assets/main/dragon_gif_1.gif";

import island1 from "../../../assets/main/island1.gif";
import island2 from "../../../assets/main/island2.gif";
import island3 from "../../../assets/main/island3.gif";
import island4 from "../../../assets/main/island4.gif";

import left_below_smoke from "../../../assets/main/dragon-left-below.png";
import right_below_smoke from "../../../assets/main/dragon-right-below.png";
import left_dragon_smoke from "../../../assets/main/dragon-left.png";
import island_first_smoke from "../../../assets/main/island-first-smoke.png";
import island_second_smoke from "../../../assets/main/island-second-smoke.png";
import header_smoke from "../../../assets/main/header-right-smoke.png";
import dragon_above_smoke from "../../../assets/main/dragon-right-above.png";

export const Hero: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [heroHeight, setHeroHeight] = useState("0px");
  const [heroMinHeight, setHeroMinHeight] = useState("0px");

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth * 0.79 > windowHeight) {
      setHeroHeight("100vh");
      setHeroMinHeight(String(windowWidth / 1.5) + "px");
    } else {
      setHeroHeight(String(windowWidth * 0.79) + "px");
      setHeroMinHeight("0px");
    }
  }, [windowWidth, windowHeight]);

  let heroRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  let island1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 15 }
  );

  let island2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
    { stiffness: 20 }
  );

  let island3Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "90%"]),
    { stiffness: 10 }
  );

  let island4Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
    { stiffness: 25 }
  );

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 50,
    },
  };

  const heroH1variants = {
    visible: { opacity: 1, scale: 1, y: 0 },

    hidden: {
      opacity: 0,
      scale: 0.85,
      y: -50,
    },
  };

  return (
    <section
      ref={heroRef}
      style={{
        height: heroHeight,
        minHeight: heroMinHeight,
      }}
      className="hero"
    >
      <div className="islands">
        <motion.img
          style={{ y: island1Y }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={variants}
          src={island1}
          alt="island1"
          className="island1"
        />

        <motion.img
          style={{ y: island2Y }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={variants}
          src={island2}
          transition={{ delay: 0.2 }}
          alt="island2"
          className="island2"
        />

        <motion.img
          style={{ y: island3Y }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ type: "tween" }}
          variants={variants}
          src={island3}
          alt="island3"
          className="island3"
        />

        <motion.img
          style={{ y: island4Y, x: "-50%" }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={variants}
          src={island4}
          alt="island4"
          className="island4"
        />
      </div>

      <img src={dragon_video} alt="dragon_video" className="dragon-img" />

      <div className="smokes">
        <img
          src={left_below_smoke}
          alt="smoke1"
          className="right_below smoke"
        />

        <img
          src={right_below_smoke}
          alt="smoke2"
          className="left_below smoke"
        />

        <img
          src={left_dragon_smoke}
          alt="smoke3"
          className="dragon_left smoke"
        />

        <img
          src={island_first_smoke}
          alt="smoke5"
          className="island_first smoke"
        />

        <img
          src={island_second_smoke}
          alt="smoke6"
          className="island_second smoke"
        />

        <img src={header_smoke} alt="smoke7" className="header_smoke smoke" />

        <img
          src={dragon_above_smoke}
          alt="smoke8"
          className="dragon_above smoke"
        />
      </div>

      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={heroH1variants}
          transition={{ duration: 0.9 }}
          className="text_area"
        >
          <h1 className="crypto_h1">CRYPTO</h1>
          <h1 className="gotchies_h1">GOTCHIES</h1>
          <h2>Unique NFT collectibles game</h2>
          <Hero_button title="LEARN MORE" />
        </motion.div>
      </div>
    </section>
  );
};
