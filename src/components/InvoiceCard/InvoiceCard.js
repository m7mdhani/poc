import React from "react";
import classNames from "classnames";

import "./InvoiceCard.css";

const InvoiceCard = ({ status, total, totalColor, darkCard, darkStatus }) => {
  const cardClasses = classNames("invoice-card", {
    "invoice-card-dark": darkCard,
  });
  const statusClasses = classNames("card-status", {
    "card-status-dark": darkStatus,
  });
  const totalClasses = classNames("card-total");

  return (
    <div className={cardClasses}>
      <p className={statusClasses}>{status}</p>
      <span className={totalClasses} style={{ color: totalColor }}>
        {total}
      </span>
    </div>
  );
};

export default InvoiceCard;
