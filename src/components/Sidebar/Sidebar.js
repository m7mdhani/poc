import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import CustomerIcon from "../../assets/imgs/user-group.svg";
import DashboardIcon from "../../assets/imgs/chart-pie.svg";
import ProductsIcon from "../../assets/imgs/shopping-cart.svg";

const Sidebar = () => {
  return (
    <>
      <SidebarItem icon={DashboardIcon} name={"Dashboard"} />
      <SidebarItem icon={CustomerIcon} name={"Customers"} />
      <SidebarItem icon={ProductsIcon} name={"Products"} />
    </>
  );
};

export default Sidebar;
