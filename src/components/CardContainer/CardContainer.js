import React, { useState } from "react";
import InvoiceCard from "../InvoiceCard/InvoiceCard";
import classNames from "classnames";

import "./CardContainer.css";

const CardContainer = () => {
  const classes = classNames("card-container");
  const [theme, setTheme] = useState("dark");
  const invoiceCards = [
    {
      id: 1,
      status: "Valid",
      total: "50",
      totalColor: "#0E9F6E",
    },
    {
      id: 2,
      status: "Canceled",
      total: "50",
      totalColor: "#F26651",
    },
    {
      id: 3,
      status: "Rejected",
      total: "50",
      totalColor: "#F05252",
    },
  ];

  return (
    <div className={classes}>
      {/* Invoice Card */}
      {invoiceCards.map((card) => [
        <InvoiceCard
          key={card.id}
          status={card.status}
          total={card.total}
          totalColor={card.totalColor}
          // darkCard={theme}
          // darkStatus={theme}
        />,
      ])}
    </div>
  );
};

export default CardContainer;
