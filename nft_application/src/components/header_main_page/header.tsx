import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.png";

export function Header() {
  return (
    <header>
      <div className="main_container">
        <div className="header_logo">
          <img src={stage_logo} alt="header logo" />
        </div>
        <ul className="menu">
          <li>Gotchies</li>
          <li>Avatars</li>
          <li>Tokens</li>
        </ul>
        <button>START PLAYING</button>
      </div>
    </header>
  );
}
