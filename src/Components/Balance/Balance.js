import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Balance.css"

function BalanceCard(props) {
  return (
    <div>
      <h2>Your Card</h2>
      <Card sx={{ width: 500, backgroundColor: "#515dc3" }}>
        <CardActionArea>
          <CardContent>
            <div className="topElements">
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "2.2rem",
              }}
              variant="h2"
              color="antiquewhite"
            >
              Bank of America
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "1.75rem",
              }}
              variant="h2"
              color="antiquewhite"
            >
              Visa
            </Typography>
            </div>
            <Typography
              variant="h3"
              color="antiquewhite"
              sx={{
                marginTop: "10px",
                fontWeight: "400",
                fontSize: "1rem",
              }}
            >
              Balance:
            </Typography>
            <Typography
              variant="h4"
              color="antiquewhite"
              sx={{
                marginTop: "10px",
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
