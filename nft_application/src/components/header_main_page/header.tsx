import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.png";
import { Sidebar } from "../main/sidebar/sidebar";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
            <AnchorLink href="#video">
              <li>About</li>
            </AnchorLink>
            <AnchorLink href="#video">
              <li>Gotchies</li>
            </AnchorLink>
            <AnchorLink href="#video">
              <li>Features</li>
            </AnchorLink>
            <AnchorLink href="#video">
              <li>Fun Lands</li>
            </AnchorLink>
            <AnchorLink href="#video">
              <li>Team</li>
            </AnchorLink>
            <AnchorLink href="#video">
              <li>Roadmap</li>
            </AnchorLink>{" "}
            <AnchorLink href="#video">
              <li>Partners</li>
            </AnchorLink>{" "}
          </ul>
          <button>D.APP</button>
        </div>
      </header>
    </>
  );
}
