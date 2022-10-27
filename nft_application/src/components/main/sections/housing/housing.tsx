import { motion } from "framer-motion";
import room1 from "../../../../assets/main/house1.png";
import room2 from "../../../../assets/main/house2.png";
import room3 from "../../../../assets/main/house3.png";
import room4 from "../../../../assets/main/house4.png";

export function Housing() {
  return (
    <section id="housing" className="housing">
      <div className="container">
        <h1>Housing</h1>
        <h3>
          Now your Gotchies can have a house! And you can furnish it yourself!
          The furniture has the functionality of additional bonuses, as well as
          unique properties for the economy of the game. Players will be able to
          buy items that have the functionality of production of consumables, as
          well as sell services to other players (buffs, paid crafting) or even
          host a poker tournament.
        </h3>

        <div className="rooms">
          <img src={room1} alt="Rooms-IMG" className="room1" />
          <img src={room2} alt="Rooms-IMG" className="room2" />
          <img src={room3} alt="Rooms-IMG" className="room3" />
          <img src={room4} alt="Rooms-IMG" className="room4" />
        </div>

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
    </section>
  );
}