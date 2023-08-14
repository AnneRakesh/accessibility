import React from "react";
import "./TransactionCard.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { v4 as uuidv4 } from "uuid";

const TransactionCard = (props) => {
  return (
    <div>
      <h2> Recent Transactions</h2>
      {props.transanctionArr.map((transaction) => {
        return (
          <div
            key={uuidv4()}
            className="content"
            style={{
              backgroundColor: transaction[2] === "add" ? "#C8E4B2" : "#E97777",
            }}
          >
            {transaction[2] === "add" ? (
              <AddBoxIcon fontSize="large" />
            ) : (
              <IndeterminateCheckBoxIcon fontSize="large" />
            )}
            <div>
              <h3>{transaction[0]}</h3>
              <p
                style={{
                  marginTop: "-18px",
                  color: "#272829",
                }}
              >
                {transaction[3]}
              </p>
            </div>
            <h4>{transaction[1]}$</h4>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionCard;
