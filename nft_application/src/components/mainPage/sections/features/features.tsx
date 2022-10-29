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
              Gotchies and Fun Lands are NFTs meaning you have 100% ownership
              over the assets. You can buy, sell and transfer it to anyone
              without any restriction.
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo2} alt="Marketplace" />
            </div>
            <h3>Secondary Market </h3>
            <h4>
              You can trade your NFT on any secondary third party NFT
              Marketplaces. Crypto Gotchies will be verified NFT collection on
              multiple NFT Marketplaces including our own one.
            </h4>
          </div>

          {/* <div className="card">
            <div className="logo_img">
              <img src={logo3} alt="Leaderboard" />
            </div>
            <h3>Leaderboard</h3>
            <h4>
              Grow your beasties and move up in the player rankings. Prizes
              await the winners
            </h4>
          </div> */}

          <div className="card">
            <div className="logo_img">
              <img src={logo4} alt="wallet" />
            </div>
            <h3>In-Game Wallet</h3>
            <h4>
              Crypto Gotchies utilizes in-game wallet which stores your $GOTCHI
              safely and lets deposit or withdraw tokens at any time.
            </h4>
          </div>

          <div className="card">
            <div className="logo_img">
              <img src={logo5} alt="design" />
            </div>
            <h3>Security first </h3>
            <h4>
              We implemented well secured game internals with a help of leading
              experts. Crypto Gotchies is audited and our team is KYC'd.
            </h4>
          </div>

          {/* <div className="card">
            <div className="logo_img">
              <img src={logo6} alt="profile" />
            </div>
            <h3>Community Driven Development</h3>
            <h4>
              We will conduct a transparent development, which you can observe,
              as well as can take part in it and leave your proposal
            </h4>
          </div> */}
        </div>
      </div>
    </section>
  );
}
