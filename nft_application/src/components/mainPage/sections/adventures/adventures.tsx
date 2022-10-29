import { motion } from "framer-motion";
import island1 from "../../../../assets/main/island1.webm";
import island2 from "../../../../assets/main/island2.webm";
import island3 from "../../../../assets/main/island3.webm";
import island4 from "../../../../assets/main/island4.webm";
import right_sky from "../../../../assets/main/right-sky.png";
import left_sky from "../../../../assets/main/left-sky.png";
import right_down_sky from "../../../../assets/main/right-down-sky.png";
import left_deep_sky from "../../../../assets/main/left-deep-sky.png";
import shark_bright_sky from "../../../../assets/main/left-bright-sky.png";
import bright_casual_sky from "../../../../assets/main/right-down-bright.png";

import "./adventures.sass";

export function Adventures() {
  const variants2 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: -50,
    },
  };
  return (
    <section id="adventures" className="adventures">
      <h1>Fun Lands NFT's</h1>

      <div className="right-area-mobile">
        <h3>
          Fun Lands are limited supply NFT collectibles which offer real utility
          and limitless passive income opportunities for owners. They are fully
          integrated into ecosystem as lands which Gotchies visit to earn{" "}
          <span>$GOTCHI</span> and various in-game resources.
        </h3>
        <motion.button
          initial={{
            opacity: 0.6,
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 1,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          Explore The World
        </motion.button>
      </div>

      <div
        className="container"
        style={{
          maxHeight: "calc(100vw * 0.7)",
        }}
      >
        <div className="right-area">
          <h3>
            Fun Lands are limited supply NFT collectibles which offer real
            utility and limitless passive income opportunities for owners. They
            are fully integrated into ecosystem as lands which Gotchies visit to
            earn <span>$GOTCHI</span> and various in-game resources.
          </h3>
          <motion.button
            initial={{
              opacity: 0.6,
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            Explore The World
          </motion.button>
        </div>
        <div className="sky-images">
          <img src={right_sky} alt="sky" className="right-sky" />
          <img src={left_sky} alt="sky" className="left-sky" />

          <img src={right_sky} alt="sky" className="right-sky-inversed" />
          <img src={left_sky} alt="sky" className="left-sky-inversed" />

          <img src={right_down_sky} alt="sky" className="right-down-sky" />
          <img src={right_down_sky} alt="sky" className="top-sky" />
          <img src={right_down_sky} alt="sky" className="top-right-sky" />
          <img src={right_down_sky} alt="sky" className="top-left-sky" />
          <img src={left_deep_sky} alt="sky" className="left-deep-sky" />

          <img
            src={left_deep_sky}
            alt="sky"
            className="left-deep-sky-inversed"
          />

          <img src={shark_bright_sky} alt="sky" className="bottom-shark-sky" />
          <img
            src={shark_bright_sky}
            alt="sky"
            className="bottom-shark-sky-inversed"
          />

          <img src={bright_casual_sky} alt="sky" className="top-casual-sky" />
        </div>

        <div className="islands">
          <motion.video
            style={{}}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            src={island1}
            className="island1"
            loop
            autoPlay
            muted
          />
          <motion.video
            style={{}}
            initial={"hidden"}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            src={island2}
            className="island2"
            loop
            autoPlay
            muted
          />
          <motion.video
            style={{
              x: "-50%",
            }}
            transition={{
              duration: 1,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            src={island3}
            className="island3"
            loop
            autoPlay
            muted
          />
          <motion.video
            style={{}}
            initial={"hidden"}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            src={island4}
            className="island4"
            loop
            autoPlay
            muted
          />
        </div>
      </div>
    </section>
  );
}
