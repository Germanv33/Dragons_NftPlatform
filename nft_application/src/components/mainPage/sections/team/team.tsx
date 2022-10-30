import member1 from "../../../../assets/main/1_1.webp";
import member2 from "../../../../assets/main/2_2.webp";
import member3 from "../../../../assets/main/3_3.webp";
import member4 from "../../../../assets/main/4_4.webp";
import member5 from "../../../../assets/main/5_5.webp";

import "./team.sass";

export function Team() {
  return (
    <section id="team" className="team">
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
                <img src={member5} alt="gotchie face" className="blue" />
              </div>
              <div className="text">
                <span>Ricci</span>
                <h4>2D concept artist</h4>
              </div>
            </div>

            <div className="member">
              <div className="member-img">
                <img src={member2} alt="gotchie face" className="orange" />
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
                <img src={member5} alt="gotchie face" className="blue" />
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
                <img src={member4} alt="gotchie face" className="yellow" />
              </div>
              <div className="text">
                <span>Russel</span>
                <h4>delivery wizard</h4>
              </div>
            </div>

            <div className="member">
              <div className="member-img">
                <img src={member3} alt="gotchie face" className="pink" />
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
  );
}
