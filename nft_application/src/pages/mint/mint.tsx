import "./mint.sass";
import mini_logo from "../../assets/main/stageLogo.png";
import island4 from "../../assets/main/island_4.gif";
import shark_bright_sky from "../../assets/main/left-bright-sky.png";
import island2 from "../../assets/main/island_2.gif";
import bright_casual_sky from "../../assets/main/right-down-bright.png";
import { useState } from "react";

export function Mint() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const handleClick = (number: number) => {
    if (number == 1) {
      setOne(true);
      setFour(false);
      setThree(false);
      setTwo(false);
    }
    if (number == 2) {
      setOne(false);
      setFour(false);
      setThree(false);
      setTwo(true);
    }
    if (number == 3) {
      setOne(false);
      setFour(false);
      setThree(true);
      setTwo(false);
    }
    if (number == 4) {
      setOne(false);
      setFour(true);
      setThree(false);
      setTwo(false);
    }
  };

  return (
    <>
      <div className="full_container">
        <section className="mint">
          <img src={island4} alt="right island" className="right-island" />
          <img src={island2} alt="left top island" className="left-island" />
          <img src={shark_bright_sky} alt="left sky" className="left-sky" />
          <img src={bright_casual_sky} alt="right sky" className="right-sky " />

          <div className="container">
            <img src={mini_logo} alt="mini-logo" className="top-logo" />
            <h1>Mint your land NFT (Game access)</h1>
            <button className="connect">Connect With Metamsk</button>
            <div className="content">
              <div className="image">
                <img src={island4} alt="island" />
              </div>
              <div className="select-container">
                <h3>Select how many lands you want to mint</h3>
                <div className="buttons">
                  <button
                    className={one ? "active" : "inactive"}
                    onClick={() => handleClick(1)}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    One land
                  </button>
                  <button
                    className={two ? "active" : "inactive"}
                    onClick={() => handleClick(2)}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Two lands
                  </button>
                  <button
                    className={three ? "active" : "inactive"}
                    onClick={() => handleClick(3)}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Three lands
                  </button>
                  <button
                    className={four ? "active" : "inactive"}
                    onClick={() => handleClick(4)}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Four lands
                  </button>
                </div>
                <div className="nets">
                  <a>Documentation</a>
                  <a>How to mint</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
