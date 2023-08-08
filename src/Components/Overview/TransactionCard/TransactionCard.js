import React from "react";
import "./TransactionCard.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const TransactionCard = (props) => {
  return (
    <div>
      <h2> Recent Transactions</h2>
      {props.transanctionArr.map((transaction) => {
        return (
          <div
            className="content"
            key={transaction[1]}
            style={{ backgroundColor: transaction[2] === "add" ? "#C8E4B2" : "#EF6262" }}
          >
            {transaction[2] === "add" ? (
              <AddBoxIcon fontSize="large" />
            ) : (
              <IndeterminateCheckBoxIcon fontSize="large" />
            )}
            <h3>{transaction[0]}</h3>
            <h4>{transaction[1]}$</h4>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionCard;
