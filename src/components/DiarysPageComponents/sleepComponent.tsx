import {
  Box,
  Button,
  Drawer,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { colorFill } from "ionicons/icons";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const SleepComponent: React.FC = () => {
  const [isDrowerOpen, setIsDrowerOpen] = useState(false);
  const [awakeHour, setAwakeHour] = useState(8);
  const [sleepHour, setSleepHour] = useState(0);

  function handleReturnIcon() {
    let sleepedTime = handleGetSleeepedHours();
    if (sleepedTime > 8) return <SentimentVerySatisfiedIcon />;
    if (sleepedTime > 6) return <SentimentSatisfiedAltIcon />;

    return <SentimentNeutralIcon />;
  }

  function handleGetSleeepedHours() {
    if (sleepHour > 10) return Math.abs(sleepHour - 24) + awakeHour;
    return awakeHour - sleepHour;
  }

  const Container = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns:'1fr 3fr 1fr',
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #ffffff, #d1e8f7)",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  }));

  const Description = styled(Typography)(({ theme }) => ({
    margin: "0",
    fontSize: "14px",
    color: "#666",
  }));

  const StyledTextField = styled(TextField)(({ theme }) => ({
    
    width:'100%',
    "& .MuiInputBase-root": {
      color: "#fff", // Texto branco no input
      backgroundColor: "transparent", // Fundo transparente
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.7)", // Linha inferior branca
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid #fff", // Linha inferior branca ao passar o mouse
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #fff", // Linha inferior branca quando o campo está ativo
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)", // Cor do texto do rótulo
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff", // Cor do rótulo ao focar no campo
    },
  }));

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    borderRadius: "10px",
    "& .MuiPaper-root": {
      backgroundColor: "#40AED3", // Cor de fundo do corpo do Drawer
      borderTopLeftRadius: 16, // Arredondar os cantos superiores
      borderTopRightRadius: 16,
      padding: theme.spacing(2), // Padding interno
    },
  }));

  const StyledSleepResultContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width:'100%',
    margin:'10px auto 10px auto'
  }));
  const SleepContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap:'20px',
    width:'100%',
  }));
  const SleepContainerData = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const SleepResultTitle = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
  }));
  const SleepResultSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#fff",
  }));

  return (
    <>
      <Container onClick={() => setIsDrowerOpen(true)}>
        <BedtimeIcon
          style={{ fill: "#40AED3", width: "40px", height: "40px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Title>Sono</Title>
          <Description>Como foi sua noite de sono?</Description>
        </div>
        <div></div>
      </Container>

      <StyledDrawer
        anchor={"bottom"}
        open={isDrowerOpen}
        onClose={() => setIsDrowerOpen(false)}
      >
        <SleepContainer>
        <StyledTextField
          type="number"
          label="Que horas você foi dormir?"
          variant="filled"
          size="small"
          value={`${sleepHour}`}
          onChange={(e) => setSleepHour(parseInt(e.target.value) ?? 0)}
        />
        <StyledTextField
          value={`${awakeHour}`}
          onChange={(e) => setAwakeHour(parseInt(e.target.value) ?? 0)}
          type="number"
          label="Que horas você acordou?"
          variant="filled"
          size="small"
        />
        <StyledSleepResultContainer>
          {handleReturnIcon()}
          <SleepContainerData>
            <SleepResultTitle>
              Dormiu - {handleGetSleeepedHours()} horas
            </SleepResultTitle>
            <SleepResultSubTitle>
              Seu sono foi{" "}
              {handleGetSleeepedHours() > 8
                ? "Ótimo"
                : handleGetSleeepedHours() > 6
                ? "Bom"
                : "Regular"}
              !
            </SleepResultSubTitle>
          </SleepContainerData>
        </StyledSleepResultContainer></SleepContainer>
      </StyledDrawer>
    </>
  );
};

export default SleepComponent;
