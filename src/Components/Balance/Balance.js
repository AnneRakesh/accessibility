import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function BalanceCard(props) {
  return (
    <div>
      <h2>Your Card</h2>
      <Card sx={{ width: 500, backgroundColor: "#515dc3" }}>
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
              ${props.total}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default BalanceCard;
