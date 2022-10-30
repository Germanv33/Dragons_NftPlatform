import pvp from "../../../../assets/main/pvp.webp";

import "./pvp.sass";

export function Pvp() {
  return (
    <section className="pvp">
      <div className="container">
        <h1>PVP Coming This Winter</h1>
        <img src={pvp} alt="pvp await img" />
      </div>
    </section>
  );
}
