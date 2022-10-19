import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.png";
import { Sidebar } from "../main/sidebar/sidebar";

export function Header() {
  return (
    <>
      <Sidebar pageWrapId={"full_header_container"} outerContainerId={"root"} />
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
    </>
  );
}
