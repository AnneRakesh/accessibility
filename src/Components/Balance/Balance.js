import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActionArea } from "@mui/material";

function BalanceCard() {
  let [total, setTotal] = React.useState(569);
  return (
    <div>
      <h2>Your Card</h2>
    <Card sx={{ maxWidth: 800, backgroundColor: "#515dc3" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" color="antiquewhite">
            Bank of America
          </Typography>
          <Typography
            variant="body3"
            color="antiquewhite"
            sx={{
              padding: "5px",
            }}
          >
            Balance:
          </Typography>
          <Typography
            variant="h4"
            color="antiquewhite"
            sx={{
              padding: "5px",
            }}
          >
            ${total}.00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default BalanceCard;
