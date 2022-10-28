import { motion } from "framer-motion";
import islandf from "../../../../assets/main/island_features.png";
import profile_icon from "../../../../assets/main/profile-logo.png";
import shield_icon from "../../../../assets/main/shield-logo.png";
import chat_icon from "../../../../assets/main/chat-logo.png";
import like_icon from "../../../../assets/main/like-logo.png";
import check_icon from "../../../../assets/main/check-logo.png";
import bright_casual_sky from "../../../../assets/main/right-down-bright.png";

import "./platform.sass";

export function Platform() {
  const sky_variants_opacity = {
    visible: { opacity: 0.3, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section id="platform" className="platform">
      <div className="container">
        <motion.img
          initial={"hidden"}
          variants={sky_variants_opacity}
          style={{
            scaleX: -1,
          }}
          viewport={{
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={"visible"}
          src={bright_casual_sky}
          alt="sky"
          className="parallax-right-sky"
        />

        <div className="content-area">
          <div className="text-block">
            <h2>
              We want to create not just a game, <br /> but a social platform
              for people
            </h2>
            <h3>
              Magic Beasties should be a place where people have fun and enjoy
              spending time. <br /> Appealing to the user's sense of competitive
              spirit is necessary <br /> to get them to spend more time with the
              product and invite other
              <br /> members to jump in to the project.{" "}
            </h3>
          </div>

          <div className="dark-tips-area">
            <div className="island">
              <img src={islandf} alt="island" />
            </div>

            <div className="first-tips-row">
              <div className="tip">
                <span>
                  Personal profilies
                  <br />
                  Avatars & Ranks
                </span>
                <img src={profile_icon} alt="profile img-logo" />
              </div>
              <div className="tip">
                <span className="onerow-span">Guilds</span>

                <img src={shield_icon} alt="shield img-logo" />
              </div>
              <div className="tip">
                <span>
                  In-Game
                  <br />
                  Chats
                </span>
                <img src={chat_icon} alt="message img-logo" />
              </div>
            </div>
            <div className="second-tips-row">
              <div className="tip">
                <img src={like_icon} alt="like img-logo" />
                <span className="onerow-span">Votings</span>
              </div>
              <div className="tip">
                <img src={check_icon} alt="task img-logo" />
                <span>
                  Achievements <br /> Daily Tasks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
