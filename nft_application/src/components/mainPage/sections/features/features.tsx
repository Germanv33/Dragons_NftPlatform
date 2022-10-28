import header_smoke from "../../../../assets/main/header-right-smoke.png";
import logo1 from "../../../../assets/main/logo1.png";
import logo2 from "../../../../assets/main/logo2.png";
import logo3 from "../../../../assets/main/logo3.png";
import logo4 from "../../../../assets/main/logo4.png";
import logo5 from "../../../../assets/main/logo5.png";
import logo6 from "../../../../assets/main/logo6.png";

import "./features.sass";

export function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Core Features</h2>
        <img src={header_smoke} alt="sky" className="smoke" />
        <div className="cards">
          <div className="card">
            <div className="logo_img">
              <img src={logo1} alt="hand" />
            </div>
            <h3>True Ownership</h3>
            <h4>
              Every item or character you own in the game is 100% yours and
              stored on the blockchain. You can exchange or transfer it to
              anyone at any time.
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo2} alt="Marketplace" />
            </div>
            <h3>Marketplace</h3>
            <h4>
              You will be able to trade on any marketplaces that support NFT's.
              And we are also working on our own marketplace
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo3} alt="Leaderboard" />
            </div>
            <h3>Leaderboard</h3>
            <h4>
              Grow your beasties and move up in the player rankings. Prizes
              await the winners
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo4} alt="wallet" />
            </div>
            <h3>In-Game Wallet</h3>
            <h4>
              We have created a virtual wallet for our players, through which
              they can deposit or withdraw tokens from blockchain to game and
              vice versa
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo5} alt="design" />
            </div>
            <h3>Secure By Design</h3>
            <h4>
              We constantly consult with leading experts in the field of cyber
              security. Several companies audited our project and gave a
              positive feedback
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo6} alt="profile" />
            </div>
            <h3>Community Driven Development</h3>
            <h4>
              We will conduct a transparent development, which you can observe,
              as well as can take part in it and leave your proposal
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
