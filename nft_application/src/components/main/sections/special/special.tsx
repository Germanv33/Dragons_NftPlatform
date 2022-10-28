import { motion } from "framer-motion";
import special_bg from "../../../../assets/main/special-bg.png";
import partner_gotchie from "../../../../assets/main/partner-gotchie.png";

export function Special() {
  const variants2 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 0,
    },
  };
  return (
    <section id="special" className="special">
      <div className="container">
        <img src={special_bg} alt="bg" className="bg" />
        <h1>Want To Become Our Partner</h1>

        <h3>
          Each day we pursue getting new partners onboard by offering branded
          limited NFT Gotchies and Additional Items collectibles.
        </h3>

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
            variants={variants2}
            className="gotchie_special"
          >
            {/* <video src={g_boy2} loop autoPlay /> */}
            <img src={partner_gotchie} alt="gotchie-partner" />
            <div className="description">
              <h3>
                Branded Gotchie special
                <br />
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
