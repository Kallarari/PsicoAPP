import { Box, styled, Typography } from "@mui/material";
import React from "react";

// import { Container } from './styles';

interface DiarysPageComponentsProps {
  onOpenDrower: () => void;
  Icon: any;
  title: string;
  subtitle: string;
}

const DiarysPageComponents: React.FC<DiarysPageComponentsProps> = ({
  Icon,
  onOpenDrower,
  subtitle,
  title,
}) => {
  const Container = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    background: "linear-gradient(120deg, #ffffff, #bcddf3)",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#215A6D",
  }));

  const Description = styled(Typography)(({ theme }) => ({
    margin: "0",
    fontSize: "14px",
    color: "#666",
  }));

  return (
    <Container onClick={onOpenDrower}>
      {Icon}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Title>{title}</Title>
        <Description>{subtitle}</Description>
      </div>
      <div></div>
    </Container>
  );
};

export default DiarysPageComponents;
