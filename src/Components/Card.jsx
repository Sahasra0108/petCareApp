import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CardComponent = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        height: 340,
        backgroundColor: "#EBD3F8",
        boxShadow: 3,
      }}
    >
      <div className="cardimg">
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#7A1CAC",
            fontWeight: "Bold",
            fontFamily: "Poppins",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
