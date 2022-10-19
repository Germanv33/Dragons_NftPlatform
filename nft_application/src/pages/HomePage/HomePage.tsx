import "./HomePage.sass";
import "./SecondSection.sass";

import { Header } from "../../components/header_main_page/header";

import island1 from "../../assets/main/island1.gif";
import island2 from "../../assets/main/island2.gif";
import island3 from "../../assets/main/island3.gif";
import island4 from "../../assets/main/island4.gif";

import header_smoke from "../../assets/main/header-right-smoke.png";

// second block assets
import screen from "../../assets/main/screen.png";

// gotchie assets
import g_boy from "../../assets/main/gotchie_boy1.mp4";
import g_boy1 from "../../assets/main/gotchie_boy3.mp4";
import g_boy2 from "../../assets/main/gotchie_boy5.mp4";
import g_girl from "../../assets/main/gotchie_girl_1.mp4";
import g_dragon from "../../assets/main/gotchie_dragon.mp4";

// avatars assets
import avatars_1 from "../../assets/main/avatars_1.png";
import avatars_2 from "../../assets/main/avatars_2.png";
import avatars_3 from "../../assets/main/avatars_3.png";
import avatars_4 from "../../assets/main/avatars_4.png";
import avatars_5 from "../../assets/main/avatars_5.png";

// features assets
import logo1 from "../../assets/main/logo1.png";
import logo2 from "../../assets/main/logo2.png";
import logo3 from "../../assets/main/logo3.png";
import logo4 from "../../assets/main/logo4.png";
import logo5 from "../../assets/main/logo5.png";
import logo6 from "../../assets/main/logo6.png";

import islandf from "../../assets/main/island_features.png";
import profile_icon from "../../assets/main/profile-logo.png";
import shield_icon from "../../assets/main/shield-logo.png";
import chat_icon from "../../assets/main/chat-logo.png";
import like_icon from "../../assets/main/like-logo.png";
import check_icon from "../../assets/main/check-logo.png";

import top_border from "../../assets/main/top-border.png";
import bot_border from "../../assets/main/bot-border.png";

import emblem1 from "../../assets/main/emblem1.png";
import emblem2 from "../../assets/main/emblem2.png";
import emblem3 from "../../assets/main/emblem3.png";

// adventure assets
import right_sky from "../../assets/main/right-sky.png";
import left_sky from "../../assets/main/left-sky.png";
import right_down_sky from "../../assets/main/right-down-sky.png";
import left_deep_sky from "../../assets/main/left-deep-sky.png";
import shark_bright_sky from "../../assets/main/left-bright-sky.png";
import bright_casual_sky from "../../assets/main/right-down-bright.png";

// housing assets
import rooms from "../../assets/main/rooms.png";

// roulette assets
import roulette from "../../assets/main/roulette.png";

// pvp assets
import pvp from "../../assets/main/pvp.png";

// team
import member1 from "../../assets/main/1_1.png";
import member2 from "../../assets/main/2_2.png";
import member3 from "../../assets/main/3_3.png";
import member4 from "../../assets/main/4_4.png";
import member5 from "../../assets/main/5_5.png";

// roadmap assets
import stage_logo from "../../assets/main/stageLogo.png";

// partenrs assets
import partners_mocha from "../../assets/main/partners.png";

// special assets
import special_bg from "../../assets/main/special-bg.png";

// sales & events assets
import coming_soon from "../../assets/main/coming-soon.png";

import React, { useEffect, useRef, useState } from "react";
import { MGotchie_card } from "../../components/main/gotchie_card/gotchie_card";
import { Slider } from "../../components/main/slider/slider";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  MotionValue,
} from "framer-motion";
import { Hero } from "../../components/main/hero/hero";

export function HomePage() {
  // function useParallax(value: MotionValue<number>, distance: number) {
  //   return useTransform(value, [0, 300], [0, distance]);
  // }

  const variants2 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: -50,
    },
  };

  const sky_variants = {
    visible: { opacity: 0.6, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
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

  const cardsVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -50,
    },
  };

  const gotchieVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },

    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        delay: 0,
        duration: 1,
      },
    },

    hovered: {
      scale: 1.2,
      transition: {
        delay: 0,
        duration: 0.5,
      },
    },
  };

  const [card1, setcard1] = useState("static");
  const [card2, setcard2] = useState("static");
  const [card3, setcard3] = useState("static");
  const [card4, setcard4] = useState("static");
  const [card5, setcard5] = useState("static");

  const avatarsVariants = {
    hovered: { scale: 1.2 },
    under_hovered: { scale: 0.9 },
    static: { scale: 1 },
  };

  return (
    <>
      <div className="full_container">
        <Header />

        <div className="first-bg-handler">
          <Hero />

          <section className="video_title">
            <motion.img
              initial={"hidden"}
              variants={sky_variants}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.4 }}
              whileInView={"visible"}
              src={left_deep_sky}
              alt="sky"
              className="parallax-sky"
            />

            <motion.img
              initial={"hidden"}
              variants={sky_variants}
              // style={{ scaleX: -1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 1 }}
              whileInView={"visible"}
              src={header_smoke}
              alt="sky"
              className="parallax-right-sky"
            />

            <div className="container">
              <h2>
                Crypto Gotchies, built on BNB Chain, is a game about cute
                monsters:
              </h2>

              <h3>
                Players can collect ultra-rare digital NFTs Beasties and
                Talismans, send them to Adventures and Dungeons, and get
                rewards. There are different types of activities within the game
                and use-cases for our tokens. The project was launched in June
                2021. Since then, our team has done a lot, but there is still
                more to be done!
              </h3>

              <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
                variants={heroH1variants}
                className="video_handler"
              >
                <img src={screen} alt="vedo handler" />
                {/* <video src=""></video> */}
              </motion.div>
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
                <img src={bright_casual_sky} alt="smoke" />
              </div>

              <h2>Gotchies Time!</h2>

              <div className="cards">
                <MGotchie_card
                  viewport={{ once: true }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  whileHover={"hovered"}
                  variants={gotchieVariants}
                  img={g_girl}
                  title="Gotcha Girl"
                  supply="Child: 50"
                  rarety="rare"
                  market_url="/"
                />

                <MGotchie_card
                  viewport={{ once: true }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  whileHover={"hovered"}
                  variants={gotchieVariants}
                  img={g_boy2}
                  title="Gotcha Boy"
                  supply="Teen: 100"
                  rarety="common"
                  market_url="/"
                />

                <MGotchie_card
                  viewport={{ once: true }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  whileHover={"hovered"}
                  variants={gotchieVariants}
                  img={g_boy}
                  title="Trendy Gotch"
                  supply="Adult: 10"
                  rarety="epic"
                  market_url="/"
                />
              </div>
              <div className="second_cards">
                <MGotchie_card
                  viewport={{ once: true }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  whileHover={"hovered"}
                  variants={gotchieVariants}
                  img={g_boy1}
                  title="Beachy gotch"
                  supply="Child: 70"
                  rarety="uncommon"
                  market_url="/"
                />

                <MGotchie_card
                  viewport={{ once: true }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  whileHover={"hovered"}
                  variants={gotchieVariants}
                  img={g_dragon}
                  title="Gotcha Dragon"
                  supply="Baby: 5"
                  rarety="legendary"
                  market_url="/"
                />
              </div>
              <Slider />
            </div>
          </section>

          <section className="avatars">
            <motion.img
              initial={"hidden"}
              variants={sky_variants}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
              whileInView={"visible"}
              src={bright_casual_sky}
              alt="sky"
              className="parallax-sky"
            />

            <motion.img
              initial={"hidden"}
              variants={sky_variants}
              style={{ scaleX: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileInView={"visible"}
              src={bright_casual_sky}
              alt="sky"
              className="parallax-right-sky"
            />
            <div className="container">
              <div className="screen_img">
                <motion.img
                  initial={"static"}
                  variants={avatarsVariants}
                  animate={card1}
                  onHoverStart={(e) => {
                    setcard1("hovered");
                    setcard2("under_hovered");
                    setcard3("under_hovered");
                    setcard4("under_hovered");
                    setcard5("under_hovered");
                  }}
                  onHoverEnd={(e) => {
                    setcard1("static");
                    setcard2("static");
                    setcard3("static");
                    setcard4("static");
                    setcard5("static");
                  }}
                  src={avatars_1}
                  alt="avatars container"
                  className="first"
                />
                <motion.img
                  initial={"static"}
                  variants={avatarsVariants}
                  animate={card2}
                  onHoverStart={(e) => {
                    setcard1("under_hovered");
                    setcard2("hovered");
                    setcard3("under_hovered");
                    setcard4("under_hovered");
                    setcard5("under_hovered");
                  }}
                  onHoverEnd={(e) => {
                    setcard1("static");
                    setcard2("static");
                    setcard3("static");
                    setcard4("static");
                    setcard5("static");
                  }}
                  src={avatars_2}
                  alt="avatars container"
                  className="second"
                />
                <motion.img
                  initial={"static"}
                  variants={avatarsVariants}
                  animate={card3}
                  onHoverStart={(e) => {
                    setcard1("under_hovered");
                    setcard2("under_hovered");
                    setcard3("hovered");
                    setcard4("under_hovered");
                    setcard5("under_hovered");
                  }}
                  onHoverEnd={(e) => {
                    setcard1("static");
                    setcard2("static");
                    setcard3("static");
                    setcard4("static");
                    setcard5("static");
                  }}
                  src={avatars_3}
                  alt="avatars container"
                  className="third"
                />
                <motion.img
                  initial={"static"}
                  variants={avatarsVariants}
                  animate={card4}
                  onHoverStart={(e) => {
                    setcard1("under_hovered");
                    setcard2("under_hovered");
                    setcard3("under_hovered");
                    setcard4("hovered");
                    setcard5("under_hovered");
                  }}
                  onHoverEnd={(e) => {
                    setcard1("static");
                    setcard2("static");
                    setcard3("static");
                    setcard4("static");
                    setcard5("static");
                  }}
                  src={avatars_4}
                  alt="avatars container"
                  className="fourth"
                />

                <div className="last">
                  <motion.img
                    initial={"static"}
                    variants={avatarsVariants}
                    animate={card5}
                    onHoverStart={(e) => {
                      setcard1("under_hovered");
                      setcard2("under_hovered");
                      setcard3("under_hovered");
                      setcard4("under_hovered");
                      setcard5("hovered");
                    }}
                    onHoverEnd={(e) => {
                      setcard1("static");
                      setcard2("static");
                      setcard3("static");
                      setcard4("static");
                      setcard5("static");
                    }}
                    src={avatars_5}
                    alt="avatars container"
                    className="last_img"
                  />
                </div>
              </div>
              <div className="text">
                <h2>Unique Avatars</h2>
                <h3>
                  Beasties Avatars is a special collection of NFTs. Each avatar
                  is unique! These NFTs can be used as in-game profile pictures.
                  They also have different rarity, rare avatars give bonuses for
                  both PvE now and PvP in the future. And of course, just like
                  with any other NFT, you can do whatever you want with your
                  avatars, collect, trade and swap!
                </h3>
                <motion.button
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  MINT YOUR AVATAR
                </motion.button>
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
                    Every item or character you own in the game is 100% yours
                    and stored on the blockchain. You can exchange or transfer
                    it to anyone at any time.
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
                    Grow your beasties and move up in the player rankings.
                    Prizes await the winners
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
                    cyber security. Several companies audited our project and
                    gave a positive feedback
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

          <section className="platform">
            <div className="container">
              <img src="" alt="sky" className="sky" />

              <div className="content-area">
                <div className="text-block">
                  <h2>
                    We want to create not just a game, <br /> but a social
                    platform for people
                  </h2>
                  <h3>
                    Magic Beasties should be a place where people have fun and
                    enjoy spending time. <br /> Appealing to the user's sense of
                    competitive spirit is necessary <br /> to get them to spend
                    more time with the product and invite other
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
        </div>

        <div className="sec-bg-handler">
          <section className="crafting">
            <div className="squared-container">
              <img src={top_border} alt="tech-border" className="top-border" />
              <div className="container">
                <h1>Resources & Crafting</h1>
                <div className="cards">
                  <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    variants={cardsVariants}
                    className="card"
                  >
                    <div className="icon-handler">
                      <img src={emblem1} alt="collection logo" />
                    </div>
                    <div className="text first">
                      <h2>Collect</h2>
                      <h3>
                        Use different combinations of Beasties depending on the
                        type of dungeon or adventure to get more resources
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    variants={cardsVariants}
                    className="card"
                  >
                    <div className="icon-handler">
                      <img src={emblem2} alt="trade logo" />
                    </div>

                    <div className="text second">
                      <h2>Trade</h2>
                      <h3>
                        Show off your trading skills. Our off-chain marketplace
                        allows you to trade quickly and without unnecessary gas
                        fees
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    variants={cardsVariants}
                    className="card"
                  >
                    <div className="icon-handler">
                      <img src={emblem3} alt="craft logo" />
                    </div>
                    <div className="text thirst">
                      <h2>Craft</h2>
                      <h3>
                        Use different combinations of Beasties depending on the
                        type of dungeon or adventure to get more resources
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </div>
              <img
                src={bot_border}
                alt="bottom-tech-border"
                className="bot-border"
              />
            </div>
          </section>

          <section className="adventures">
            <h1>Adventures & Dungeons</h1>

            <div className="right-area-mobile">
              <h3>
                This magical continent is full of adventures and dungeons. For
                now, you can only explore part of it, but new expansions are
                waiting for you very soon! Start exploring the world now, and
                get ready for great battles on the new maps!
              </h3>
              <button>Explore The World</button>
            </div>

            <div
              className="container"
              style={{
                maxHeight: "calc(100vw * 0.7)",
              }}
            >
              <div className="right-area">
                <h3>
                  This magical continent is full of adventures and dungeons. For
                  now, you can only explore part of it, but new expansions are
                  waiting for you very soon! Start exploring the world now, and
                  get ready for great battles on the new maps!
                </h3>
                <button>Explore The World</button>
              </div>
              <div className="sky-images">
                <img src={right_sky} alt="sky" className="right-sky" />
                <img src={left_sky} alt="sky" className="left-sky" />

                <img src={right_sky} alt="sky" className="right-sky-inversed" />
                <img src={left_sky} alt="sky" className="left-sky-inversed" />

                <img
                  src={right_down_sky}
                  alt="sky"
                  className="right-down-sky"
                />
                <img src={right_down_sky} alt="sky" className="top-sky" />
                <img src={right_down_sky} alt="sky" className="top-right-sky" />
                <img src={right_down_sky} alt="sky" className="top-left-sky" />
                <img src={left_deep_sky} alt="sky" className="left-deep-sky" />

                <img
                  src={left_deep_sky}
                  alt="sky"
                  className="left-deep-sky-inversed"
                />

                <img
                  src={shark_bright_sky}
                  alt="sky"
                  className="bottom-shark-sky"
                />
                <img
                  src={shark_bright_sky}
                  alt="sky"
                  className="bottom-shark-sky-inversed"
                />

                <img
                  src={bright_casual_sky}
                  alt="sky"
                  className="top-casual-sky"
                />
              </div>
              <div className="islands">
                <motion.img
                  style={{}}
                  transition={{ duration: 1, delay: 0.6 }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={variants2}
                  src={island1}
                  alt="island"
                  className="island1"
                />
                <motion.img
                  style={{}}
                  initial={"hidden"}
                  transition={{ duration: 1, delay: 0.4 }}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={variants2}
                  src={island2}
                  alt="island"
                  className="island2"
                />
                <motion.img
                  style={{ x: "-50%" }}
                  transition={{ duration: 1 }}
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={variants2}
                  src={island3}
                  alt="island"
                  className="island3"
                />
                <motion.img
                  style={{}}
                  initial={"hidden"}
                  transition={{ duration: 1, delay: 0.2 }}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={variants2}
                  src={island4}
                  alt="island"
                  className="island4"
                />
              </div>
            </div>
          </section>

          <section className="housing">
            <div className="container">
              <h1>Housing</h1>
              <h3>
                Now your Beasties can have a house! And you can furnish it
                yourself! The furniture has the functionality of additional
                bonuses, as well as unique properties for the economy of the
                game. Players will be able to buy items that have the
                functionality of production of consumables, as well as sell
                services to other players (buffs, paid crafting) or even host a
                poker tournament.
              </h3>
              <img src={rooms} alt="Rooms-IMG" />
              <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
              >
                Learn More
              </motion.button>
            </div>
          </section>

          <section className="roulette">
            <motion.img
              initial={"hidden"}
              variants={sky_variants}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.4 }}
              whileInView={"visible"}
              src={bright_casual_sky}
              alt="sky"
              className="parallax-sky"
            />

            <motion.img
              initial={"hidden"}
              variants={sky_variants}
              style={{ scaleX: -1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 1 }}
              whileInView={"visible"}
              src={bright_casual_sky}
              alt="sky"
              className="parallax-right-sky"
            />

            <div className="container">
              <div className="text-side">
                <h1>Gotchie Roulette</h1>
                <h3>
                  Try your luck by betting COOKIES on the Lucky Wheel, which is
                  in the Witch's House <br /> <br /> We approached the question
                  of development of this game carefully and calculated a
                  mathematical model to provide our users with a fair fixed RTP
                  of more than 90%
                </h3>
                <motion.button
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  Learn More
                </motion.button>
              </div>
              <img src={roulette} alt="roulette img" />
            </div>
          </section>

          <section className="pvp">
            <div className="container">
              <h1>PVP Coming This Winter</h1>
              <img src={pvp} alt="pvp await img" />
            </div>
          </section>

          <div className="third-bg-handler">
            <section className="tokens">
              <div className="container">
                <h1>Tokens</h1>
                <div className="bsts-token">
                  <div className="token-header">
                    <img src="" alt="head" />
                    <h2>BSTS Token</h2>
                  </div>
                  <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem aut placeat minima rem tempora, ullam debitis
                    ad quasi culpa iusto velit voluptatibus officiis nam
                    voluptates fugiat suscipit minus rerum consequatur.
                  </h3>
                  <h3>
                    Token Name: <span>Magic Beasties</span>
                  </h3>
                  <h3>
                    Token Ticker: <span>BSTS</span>
                  </h3>
                  <h3>
                    Decimals: <span>9</span>
                  </h3>
                  <h3>
                    Contract address: <br />{" "}
                    0xc234423fg2fhg423fh2442h3f4fg2234f243gfg
                  </h3>
                  <div className="info-btns">
                    <button>Documentation</button>
                    <button>Audits</button>
                  </div>
                  <a href="">
                    <img src="" alt="rabbit logo" />
                    <span className="title">Buy BSTS on PancakeSwap</span>
                    <span className="slippage">Slippage = 8%</span>
                  </a>
                </div>

                <div className="cookies-token">
                  <div className="token-header">
                    <img src="" alt="head" />
                    <h2>COOKIES Token</h2>
                  </div>
                  <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem aut placeat minima rem tempora, ullam debitis
                    ad quasi culpa iusto velit voluptatibus officiis nam
                    voluptates fugiat suscipit minus rerum consequatur.
                  </h3>
                  <h3>
                    Token Name: <span>Cookies</span>
                  </h3>
                  <h3>
                    Token Ticker: <span>COOKIES</span>
                  </h3>
                  <h3>
                    Decimals: <span>18</span>
                  </h3>
                  <h3>
                    Contract address: <br />{" "}
                    0xc234423fg2fhg423fh2442h3f4fg2234f243gfg
                  </h3>
                  <div className="info-btns">
                    <button>Documentation</button>
                  </div>
                  <a href="">
                    <img src="" alt="rabbit logo" />
                    <span className="title">Buy BSTS on PancakeSwap</span>
                    <span className="slippage">Slippage = 0.5%</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="team">
              <div className="container">
                <h1>Team</h1>
                <div className="members">
                  <div className="first-row">
                    <div className="member">
                      <div className="member-img">
                        <img src={member1} alt="gotchie face" className="red" />
                      </div>
                      <div className="text">
                        <span>Rebecca</span>
                        <h4>3D designer</h4>
                      </div>
                    </div>

                    <div className="member mobile">
                      <div className="member-img">
                        <img
                          src={member5}
                          alt="gotchie face"
                          className="blue"
                        />
                      </div>
                      <div className="text">
                        <span>Ricci</span>
                        <h4>2D concept artist</h4>
                      </div>
                    </div>

                    <div className="member">
                      <div className="member-img">
                        <img
                          src={member2}
                          alt="gotchie face"
                          className="orange"
                        />
                      </div>
                      <div className="text">
                        <span>Joseph</span>
                        <h4>project manager</h4>
                      </div>
                    </div>
                  </div>

                  <div className="mobile-row">
                    <div className="member">
                      <div className="member-img">
                        <img
                          src={member5}
                          alt="gotchie face"
                          className="blue"
                        />
                      </div>
                      <div className="text">
                        <span>Ricci</span>
                        <h4>2D concept artist</h4>
                      </div>
                    </div>
                  </div>

                  <div className="second-row">
                    <div className="member">
                      <div className="member-img">
                        <img
                          src={member4}
                          alt="gotchie face"
                          className="yellow"
                        />
                      </div>
                      <div className="text">
                        <span>Russel</span>
                        <h4>delivery wizard</h4>
                      </div>
                    </div>

                    <div className="member">
                      <div className="member-img">
                        <img
                          src={member3}
                          alt="gotchie face"
                          className="pink"
                        />
                      </div>
                      <div className="text">
                        <span>Daisy</span>
                        <h4>WEB developer</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="roadmap">
              <h1>Roadmap</h1>

              <div className="container">
                <details>
                  <summary>
                    <div className="summary">
                      {" "}
                      <img src={stage_logo} alt="logo" />
                      <div>
                        <h3>Stage 0</h3>
                        <span>(Q3 2022)</span>
                      </div>
                    </div>
                  </summary>
                  <ul>
                    <li>Map Update (Continent View & New Map) </li>
                    <li>Crafting mechanics</li>
                    <li>Talisman rework (merging and crafting) </li>
                    <li>Cookies tokenomics rework</li>
                    <li>
                      Housing Marketing for houses sale Sale of houses and
                      furniture
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <div className="summary">
                      {" "}
                      <img src={stage_logo} alt="logo" />
                      <div>
                        <h3>Stage 1</h3>
                        <span>(Q3 2022)</span>
                      </div>
                    </div>
                  </summary>
                  <ul>
                    <li>Map Update (Continent View & New Map) </li>
                    <li>Crafting mechanics</li>
                    <li>Talisman rework (merging and crafting) </li>
                    <li>Cookies tokenomics rework</li>
                    <li>
                      Housing Marketing for houses sale Sale of houses and
                      furniture
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <div className="summary">
                      {" "}
                      <img src={stage_logo} alt="logo" />
                      <div>
                        <h3>Stage 2</h3>
                        <span>(Q3 2022)</span>
                      </div>
                    </div>
                  </summary>
                  <ul>
                    <li>Map Update (Continent View & New Map) </li>
                    <li>Crafting mechanics</li>
                    <li>Talisman rework (merging and crafting) </li>
                    <li>Cookies tokenomics rework</li>
                    <li>
                      Housing Marketing for houses sale Sale of houses and
                      furniture
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <div className="summary">
                      {" "}
                      <img src={stage_logo} alt="logo" />
                      <div>
                        <h3>Stage 3</h3>
                        <span>(Q3 2022)</span>
                      </div>
                    </div>
                  </summary>
                  <ul>
                    <li>Map Update (Continent View & New Map) </li>
                    <li>Crafting mechanics</li>
                    <li>Talisman rework (merging and crafting) </li>
                    <li>Cookies tokenomics rework</li>
                    <li>
                      Housing Marketing for houses sale Sale of houses and
                      furniture
                    </li>
                  </ul>
                </details>
              </div>
            </section>

            <section className="partners">
              <div className="container">
                <h1>Press & Partners</h1>
                <img src={partners_mocha} alt="partners mocha" />
              </div>
            </section>

            <section className="special">
              <div className="container">
                <img src={special_bg} alt="bg" className="bg" />
                <h1>Want To Become Our Partner</h1>

                <h3>
                  We can provide cross-promo, branded Talismans, branded
                  Beasties, ads on the map, special buildings, quests and
                  events, tokens from other projects as rewards, and more...
                </h3>

                <div className="cards">
                  <div className="gotchie_special">
                    <video src={g_boy2} loop autoPlay />
                    <div className="description">
                      <h3>
                        Branded Beastie special
                        <br />
                        for Biswap
                      </h3>
                    </div>
                  </div>
                  <div className="gotchie_special">
                    <video src={g_dragon} loop autoPlay />
                    <div className="description">
                      <h3>
                        Branded Beastie special
                        <br />
                        for Biswap
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="sales">
              <div className="container">
                <h1>Huge Events & Sales</h1>
                <img src={coming_soon} alt="in work img" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
