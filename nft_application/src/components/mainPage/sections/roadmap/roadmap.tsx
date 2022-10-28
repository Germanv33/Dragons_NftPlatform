import stage_logo from "../../../../assets/main/stageLogo.png";

import "./roadmap.sass";

export function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
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
              Housing Marketing for houses sale Sale of houses and furniture
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
              Housing Marketing for houses sale Sale of houses and furniture
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
              Housing Marketing for houses sale Sale of houses and furniture
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
              Housing Marketing for houses sale Sale of houses and furniture
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
