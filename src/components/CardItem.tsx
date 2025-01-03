import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface CardComponentProps {
  title: string;
  description: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description }) => {
  return (
    <Card
      sx={{
        width: 160,
        height: 200,
        borderRadius: 3,
        background: "linear-gradient(135deg, #0072ff, #00c6ff)",
        display: "flex",
        flex:'0 0 auto',
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        color: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Ícone */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop:'30px'
        }}
      >
        <BookmarkIcon
          sx={{
            fontSize: 45,
            color: "white",
          }}
        />
      </Box>

      {/* Conteúdo */}
      <CardContent
        sx={{
          textAlign: "center",
          padding: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
          color="primary.light"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="primary.light"
          sx={{
            marginTop: 1,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
