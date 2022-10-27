import { motion } from "framer-motion";
import roulette from "../../../../assets/main/roulette.png";
import bright_casual_sky from "../../../../assets/main/right-down-bright.png";

export function Roulette() {
  const sky_variants = {
    visible: { opacity: 0.6, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };
  return (
    <section id="roulette" className="roulette">
      <motion.img
        initial={"hidden"}
        variants={sky_variants}
        transition={{
          duration: 1,
        }}
        viewport={{
          amount: 0.4,
        }}
        whileInView={"visible"}
        src={bright_casual_sky}
        alt="sky"
        className="parallax-sky"
      />

      <motion.img
        initial={"hidden"}
        variants={sky_variants}
        style={{
          scaleX: -1,
        }}
        viewport={{
          amount: 0.4,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={"visible"}
        src={bright_casual_sky}
        alt="sky"
        className="parallax-right-sky"
      />

      <div className="container">
        <div className="text-side">
          <h1>Gotchie Roulette</h1>
          <h3>
            Try your luck by betting $GOTCHI on the Gotchi Wheel.
            <br /> <br />
            Gotchi Wheel is an mathematically legit gambling game with high
            potential ROI and fair RTP of 89%
          </h3>
          <motion.button
            initial={{
              opacity: 0.6,
            }}
            whileHover={{
              scale: 1.2,
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
            Learn More
          </motion.button>
        </div>
        {/* <video autoPlay loop muted src={roulette} />
         */}
        <img src={roulette} alt="roulette" />
      </div>
    </section>
  );
}