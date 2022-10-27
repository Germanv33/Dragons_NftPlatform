import "./HomePage.sass";
import "./SecondSection.sass";

import { Header } from "../../components/header_main_page/header";
import { Hero } from "../../components/main/sections/hero/hero";
import { VideoSection } from "../../components/main/sections/video/video_section";
import { Gotchies } from "../../components/main/sections/gotchies/gotchies";
import { Avatars } from "../../components/main/sections/avatars/avatars";
import { Features } from "../../components/main/sections/features/features";
import { Platform } from "../../components/main/sections/platform/platform";
import { Crafting } from "../../components/main/sections/crafting/crafting";
import { Adventures } from "../../components/main/sections/adventures/adventures";
import { Housing } from "../../components/main/sections/housing/housing";
import { Roulette } from "../../components/main/sections/roulette/roulette";
import { Pvp } from "../../components/main/sections/pvp/pvp";
import { Tokens } from "../../components/main/sections/tokens/tokens";
import { Team } from "../../components/main/sections/team/team";
import { Roadmap } from "../../components/main/sections/roadmap/roadmap";
import { Footer } from "../../components/main/sections/footer/footer";
import { Partners } from "../../components/main/sections/partners/partners";
import { Sales } from "../../components/main/sections/sales/sales";
import { Special } from "../../components/main/sections/special/special";

export function HomePage() {
  return (
    <>
      <div className="full_container">
        <Header />

        <div className="first-bg-handler">
          <Hero />

          <VideoSection />

          <Gotchies />

          <Avatars />

          <Features />

          <Platform />
        </div>

        <div className="sec-bg-handler">
          <Crafting />

          <Adventures />

          <Housing />

          <Roulette />

          <Pvp />

          <div className="third-bg-handler">
            <Tokens />

            <Team />

            <Roadmap />

            <Partners />

            <Special />

            <Sales />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
