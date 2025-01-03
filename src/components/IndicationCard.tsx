import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  styled,
} from "@mui/material";

interface CardProps {
  image: string;
  title: string;
  link: string;
}

const CustomCard: React.FC<CardProps> = ({ image, title, link }) => {
  const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    maxWidth: 345,
    borderRadius: 16,
    marginBottom: 16,
    backgroundImage: `url('/fundo.png')`,
    backgroundSize: "cover",
    flex: "0 0 auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 1,
    mixBlendMode: "normal",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#004961",
      opacity: 1,
      mixBlendMode: "multiply",
    },
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: "white",
    backgroundColor: "red",
  }));
  return (
    <StyledCard>
      <div
        style={{
          backgroundColor: "transparent",
          zIndex: 3,
          display: "flex",
          alignContent: "center",
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          width:'100%'
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Imagem do card"
        />
        <CardContent>
          <StyledTypography gutterBottom variant="h5">
            {title}
          </StyledTypography>
          <Button variant="contained" color="primary" href={link}>
            Saber Mais
          </Button>
        </CardContent>
      </div>
    </StyledCard>
  );
};

export default CustomCard;
