import { IonIcon } from "@ionic/react";
import { Box, styled, Typography } from "@mui/material";
import React from "react";

// import { Container } from './styles';

const TableCard: React.FC = () => {
  const Container = styled(Box)(({ theme }) => ({
    padding: "10px",
    borderRadius: "10px",
    width: "280px",
    height: "80px",
    backgroundColor: theme.palette.primary.main,
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }));
  const DataSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));

  const StyledIcon = styled(IonIcon)`
    color: white;
    font-size: 30px;
    margin: 10px auto 0px 10px;
  `;

  const HeaderName = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    color: theme.palette.text.primary,
    height: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    marginLeft: "40px",
  }));

  const PacientName = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: theme.palette.text.primary,
    textAlign: "left",
    width: "100%",
  }));
  const LocaleAndDataText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: theme.palette.text.primary,
  }));

  return (
    <Container>
      <PacientName>Ricardo Moura</PacientName>
      <DataSection>
        <LocaleAndDataText>09:30 AM</LocaleAndDataText>
        <LocaleAndDataText>Presencial</LocaleAndDataText>
      </DataSection>
    </Container>
  );
};

export default TableCard;
