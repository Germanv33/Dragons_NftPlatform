import { motion } from "framer-motion";

import top_border from "../../../../assets/main/top-border.png";
import bot_border from "../../../../assets/main/bot-border.png";

import emblem1 from "../../../../assets/main/emblem1.png";
import emblem2 from "../../../../assets/main/emblem2.png";
import emblem3 from "../../../../assets/main/emblem3.png";

import "./crafting.sass";

export function Crafting() {
  const cardsVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -50,
    },
  };
  return (
    <section id="crafting" className="crafting">
      <div className="squared-container">
        <img src={top_border} alt="tech-border" className="top-border" />
        <div className="container">
          <h1>Resources & Crafting</h1>
          <div className="cards">
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              variants={cardsVariants}
              className="card"
            >
              <div className="icon-handler">
                <img src={emblem1} alt="collection logo" />
              </div>
              <div className="text first">
                <h2>Collect</h2>
                <h3>
                  Use different combinations of Beasties depending on the type
                  of dungeon or adventure to get more resources
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              variants={cardsVariants}
              className="card"
            >
              <div className="icon-handler">
                <img src={emblem2} alt="trade logo" />
              </div>

              <div className="text second">
                <h2>Trade</h2>
                <h3>
                  Show off your trading skills. Our off-chain marketplace allows
                  you to trade quickly and without unnecessary gas fees
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              variants={cardsVariants}
              className="card"
            >
              <div className="icon-handler">
                <img src={emblem3} alt="craft logo" />
              </div>
              <div className="text thirst">
                <h2>Craft</h2>
                <h3>
                  Use different combinations of Beasties depending on the type
                  of dungeon or adventure to get more resources
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
        <img src={bot_border} alt="bottom-tech-border" className="bot-border" />
      </div>
    </section>
  );
}
