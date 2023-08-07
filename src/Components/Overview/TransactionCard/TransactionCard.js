import React from "react";
import "./TransactionCard.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const TransactionCard = (props) => {
  return (
    <div>
      <h2> Recent Transactions</h2>

      {props.transanctionArr.map((El) => {
        return (
          <div
            className="conetent"
            key={El[1]}
            style={{ backgroundColor: El[2] === "add" ? "#C8E4B2" : "#EF6262" }}
          >
            {El[2] === "add" ? (
              <AddBoxIcon fontSize="large" />
            ) : (
              <IndeterminateCheckBoxIcon fontSize="large" />
            )}
            <h4>{El[0]}</h4>
            <h4>{El[1]}$</h4>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionCard;
