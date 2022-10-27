import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.png";
import { Sidebar } from "../main/sidebar/sidebar";
import { HashLink as Link } from "react-router-hash-link";

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
            <li>
              <Link to={{ pathname: "/", hash: "#video" }}>About</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq-1" }}>Gotchies</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq-1" }}>Features</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq-1" }}>Fun Lands</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq-1" }}>Team</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq-1" }}>Roadmap</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq-1" }}>Partners</Link>
            </li>
          </ul>
          <button>D.APP</button>
        </div>
      </header>
    </>
  );
}
