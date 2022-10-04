import "./HomePage.sass";
import "./SecondSection.sass";

import { Header } from "../../components/header_main_page/header";
import { Hero_button } from "../../components/main/button/button";

import dragon_video from "../../assets/main/dragon_gif.gif";

import island1 from "../../assets/main/island_1.png";
import island2 from "../../assets/main/island_2.gif";
import island3 from "../../assets/main/island_3.gif";
import island4 from "../../assets/main/island_4.gif";

import left_below_smoke from "../../assets/main/dragon-left-below.png";
import right_below_smoke from "../../assets/main/dragon-right-below.png";
import left_dragon_smoke from "../../assets/main/dragon-left.png";
import island_first_smoke from "../../assets/main/island-first-smoke.png";
import island_second_smoke from "../../assets/main/island-second-smoke.png";
import header_smoke from "../../assets/main/header-right-smoke.png";
import dragon_above_smoke from "../../assets/main/dragon-right-above.png";

import g_boy from "../../assets/main/gotchie_boy1.png";
import g_boy1 from "../../assets/main/gotchie_boy3.png";
import g_boy2 from "../../assets/main/gotchie_boy5.png";
import g_girl from "../../assets/main/gotchie_girl.png";
import g_dragon from "../../assets/main/gotchie_dragon.png";

import screen from "../../assets/main/screen.png";

import screen4 from "../../assets/main/4block.png";

import logo1 from "../../assets/main/logo1.png";
import logo2 from "../../assets/main/logo2.png";
import logo3 from "../../assets/main/logo3.png";
import logo4 from "../../assets/main/logo4.png";
import logo5 from "../../assets/main/logo5.png";
import logo6 from "../../assets/main/logo6.png";

import React, { useEffect, useRef, useState } from "react";
import { Gotchie_card } from "../../components/main/gotchie_card/gotchie_card";

export function HomePage() {
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

  const imageOnLoadHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.log(
      `The image with url of ${event.currentTarget.src} has been loaded`
    );
    if (event.currentTarget.className !== "error") {
      event.currentTarget.className =
        event.currentTarget.className + " success";
    }
  };

  return (
    <>
      <div className="full_container">
        <Header />

        <section
          style={{
            height: heroHeight,
            minHeight: heroMinHeight,
          }}
          className="hero"
        >
          <div
            className="islands
"
          >
            <img
              onLoad={imageOnLoadHandler}
              src={island1}
              alt="island1"
              className="island1"
            />

            <img
              onLoad={imageOnLoadHandler}
              src={island2}
              alt="island2"
              className="island2"
            />

            <img
              onLoad={imageOnLoadHandler}
              src={island3}
              alt="island3"
              className="island3"
            />

            <img
              onLoad={imageOnLoadHandler}
              src={island4}
              alt="island4"
              className="island4"
            />
          </div>

          <img
            onLoad={imageOnLoadHandler}
            src={dragon_video}
            alt="dragon_video"
            className="dragon-img"
          />

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

            <img
              src={header_smoke}
              alt="smoke7"
              className="header_smoke smoke"
            />

            <img
              src={dragon_above_smoke}
              alt="smoke8"
              className="dragon_above smoke"
            />
          </div>

          <div className="container">
            <div className="text_area">
              <h1 className="crypto_h1">CRYPTO</h1>
              <h1 className="gotchies_h1">GOTCHIES</h1>
              <h2>Unique NFT collectibles game</h2>
              <Hero_button title="LEARN MORE" />
            </div>
          </div>
        </section>

        <section className="video_title">
          <div className="container">
            <h2>
              Crypto Gotchies, built on BNB Chain, is a game about cute
              monsters:
            </h2>
            <h3>
              Players can collect ultra-rare digital NFTs Beasties and
              Talismans, send them to Adventures and Dungeons, and get rewards.
              There are different types of activities within the game and
              use-cases for our tokens. The project was launched in June 2021.
              Since then, our team has done a lot, but there is still more to be
              done!
            </h3>
            <div className="video_handler">
              <img src={screen} alt="vedo handler" />
              {/* <video src=""></video> */}
            </div>
          </div>
        </section>

        <section className="gotchies">
          <div className="gotchies_island1">
            <img src={island3} alt="island" />
          </div>
          <div className="gotchies_island2">
            <img src={island3} alt="island" />
          </div>
          <div className="container">
            {/* <img src={island3} alt="island" className="gotchies_island1" />
            <img src={island3} alt="island" className="gotchies_island2" /> */}

            <div className="gotchies_smoke">
              <img src={header_smoke} alt="smoke" />
            </div>

            <h2>Gotchies Time!</h2>
            <div className="cards">
              <Gotchie_card
                img={g_girl}
                title="Gotcha Girl"
                supply={50}
                rarety="rare"
                market_url="/"
              />

              <Gotchie_card
                img={g_boy2}
                title="Gotcha Boy"
                supply={100}
                rarety="common"
                market_url="/"
              />

              <Gotchie_card
                img={g_boy}
                title="Trendy Gotch"
                supply={10}
                rarety="epic"
                market_url="/"
              />
            </div>
            <div className="second_cards">
              <Gotchie_card
                img={g_boy1}
                title="Beachy gotch"
                supply={70}
                rarety="uncommon"
                market_url="/"
              />

              <Gotchie_card
                img={g_dragon}
                title="Gotcha Dragon"
                supply={5}
                rarety="legendary"
                market_url="/"
              />
            </div>
          </div>
        </section>

        <section className="avatars">
          <div className="container">
            <div className="screen_img">
              <img src={screen4} alt="avatars container" />
            </div>
            <div className="text">
              <h2>Unique Avatars</h2>
              <h3>
                Beasties Avatars is a special collection of NFTs. Each avatar is
                unique! These NFTs can be used as in-game profile pictures. They
                also have different rarity, rare avatars give bonuses for both
                PvE now and PvP in the future. And of course, just like with any
                other NFT, you can do whatever you want with your avatars,
                collect, trade and swap!
              </h3>
              <button>MINT YOUR AVATAR</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Core Features</h2>
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
                  You will be able to trade on any marketplaces that support
                  NFT's. And we are also working on our own marketplace
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
                  We have created a virtual wallet for our players, through
                  which they can deposit or withdraw tokens from blockchain to
                  game and vice versa
                </h4>
              </div>

              <div className="card">
                <div className="logo_img">
                  <img src={logo5} alt="design" />
                </div>
                <h3>Secure By Design</h3>
                <h4>
                  We constantly consult with leading experts in the field of
                  cyber security. Several companies audited our project and gave
                  a positive feedback
                </h4>
              </div>

              <div className="card">
                <div className="logo_img">
                  <img src={logo6} alt="profile" />
                </div>
                <h3>Community Driven Development</h3>
                <h4>
                  We will conduct a transparent development, which you can
                  observe, as well as can take part in it and leave your
                  proposal
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}