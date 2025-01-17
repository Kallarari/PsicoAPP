import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface SchedulingPageComponentsProps {
  date: number;
  dayName: string;
  vacancy: number;
  isSelected: boolean;
  onClickInCard: () => void;
}

const SchedulingPageComponents: React.FC<SchedulingPageComponentsProps> = ({
  date,
  dayName,
  vacancy,
  isSelected,
  onClickInCard,
}) => {
  const Container = styled(Box)(({ theme }) => ({
    padding: "5px",
    border: "2px solid #8D8D8D",
    borderRadius: "10px",
    backgroundColor: isSelected ? "#215A6D" : "#fff",
    minWidth:'75px'
  }));

  const DateText = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    color: isSelected ? "#fff" : "#215A6D",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    fontSize: "13px",
    fontWeight: "bold",
    color: isSelected ? "#aaa" : "#215A6D",
  }));

  const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: "10px",
    color: isSelected ? "#215A6D" : "#8D8D8D",
  }));
  return (
    <Container onClick={onClickInCard}>
      <DateText>{date}</DateText>
      <Title>{dayName}</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: isSelected ? "#215A6D" : "#C3CC49",
            borderRadius: "50%",
          }}
        ></div>
        <Subtitle>restam {vacancy}</Subtitle>
      </div>
    </Container>
  );
};

export default SchedulingPageComponents;
