import React from "react";
import "./gotchie_card.sass";

interface GotchieCardI {
  img: any;
  title: string;
  rarety: string;
  supply: number;
  market_url: string;
}

export const Gotchie_card: React.FC<GotchieCardI> = ({
  img,
  title,
  rarety,
  supply,
  market_url,
}) => {
  return (
    <div className="gotchie_card">
      <div className="gotchie-img">
        <img src={img} alt="nft_img" />
      </div>
      <div className="description">
        <div className="first_line">
          <span className="title">{title}</span>
          <button className={rarety}>{rarety}</button>
        </div>
        <div className="second_line">
          <span className="supply">Supply: {supply}</span>
          <a href={market_url}>Buy on platform {">"}</a>
        </div>
      </div>
    </div>
  );
};
