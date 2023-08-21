import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Balance.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function BalanceCard(props) {
  return (
    <React.Fragment>
      <h2>Your Card</h2>
      <div style={{width: "501px"}}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        useKeyboardArrows
        showStatus={false}
        centerMode={false}
        showThumbs={false}
        stopOnHover={false}
        centerSlidePercentage="10"
      >
        <div>
          <Card sx={{ width: 500, backgroundColor: "#515dc3", borderRadius: "10px" }}>
            <CardActionArea>
              <CardContent>
                <div className="topElements">
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "2.2rem",
                    }}
                    variant="h3"
                    color="antiquewhite"
                  >
                    Bank of America
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "1.75rem",
                    }}
                    variant="h4"
                    color="antiquewhite"
                  >
                    Visa
                  </Typography>
                </div>
                <div className="bottomElements">
                  <Typography
                    variant="h5"
                    color="antiquewhite"
                    sx={{
                      // marginTop: "10px",
                      fontWeight: "400",
                      fontSize: "1rem",
                    }}
                  >
                    Balance:
                  </Typography>
                  <Typography
                    variant="h6"
                    color="antiquewhite"
                    sx={{
                      // marginTop: "10px",
                    }}
                  >
                    ${props.total}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ width: 500, backgroundColor: "#FF8B13", borderRadius: "10px" }}>
            <CardActionArea>
              <CardContent>
                <div className="topElements">
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "2.2rem",
                    }}
                    variant="h3"
                    color="##212528"
                  >
                    Bank of India
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "1.75rem",
                    }}
                    variant="h4"
                    color="##212528"
                  >
                    Master
                  </Typography>
                    </div>
                  <div className="bottomElements">
                    <Typography
                      variant="h5"
                      color="##212528"
                      sx={{
                        marginTop: "10px",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      Balance:
                    </Typography>
                    <Typography
                      variant="h6"
                      color="##212528"
                      sx={{
                        marginTop: "10px",
                      }}
                    >
                      $2036.12
                    </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Carousel>
      </div>
    </React.Fragment>
  );
}

export default BalanceCard;
