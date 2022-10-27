import React, { FC, useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.sass";
import { NavLink } from "react-router-dom";
import stage_logo from "../../../assets/main/stageLogo.png";
import burger_logo from "../../../assets/main/burger_logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface SidebarProps {
  pageWrapId: string | undefined;
  outerContainerId: string;
}

export const Sidebar: FC<SidebarProps> = (pageWrapId, outerContainerId) => {
  return (
    <Menu
      right
      // burgerButtonClassName={"burger-button"}
      customBurgerIcon={<img src={burger_logo} />}
      // customBurgerIcon={false}
      // onOpen={userStore.openSideBar}
      // isOpen={userStore.sidebarIsOpen}
      // onClose={userStore.closeSideBar}
      //   pageWrapId={String(pageWrapId)}
      //   outerContainerId={String(outerContainerId)}
    >
      <div className="header-logo">
        <img src={stage_logo} alt="header logo" />
      </div>
      <NavLink className="menu-item" to="/">
        Home
      </NavLink>

      <AnchorLink offset="200" href="#video">
        About
      </AnchorLink>

      <AnchorLink offset="200" href="#gotchies">
        Gotchies
      </AnchorLink>

      <AnchorLink offset="200" href="#features">
        Features
      </AnchorLink>

      <AnchorLink offset="200" href="#adventures">
        Fun Lands
      </AnchorLink>

      <AnchorLink offset="200" href="#team">
        Team
      </AnchorLink>

      <AnchorLink offset="200" href="#roadmap">
        Roadmap
      </AnchorLink>

      <AnchorLink offset="200" href="#partners">
        Partners
      </AnchorLink>
    </Menu>
  );
};
