import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import { Box, IconButton, Typography } from "@mui/material";
import BottomNav from "../../components/BottomNav";
import { styled } from "@mui/system";
import SleepComponent from "../../components/DiarysPageComponents/sleepComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DiarysPageComponents from "../../components/DiarysPageComponents/DiaryCardComponent";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import InterestsIcon from "@mui/icons-material/Interests";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DiaryHabitsComponent from "../../components/DiarysPageComponents/DiaryHabitsComponent";

const Diary: React.FC = () => {
  const HeaderSection = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100vw",
    height: "10vh",
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

  return (
    <IonPage>
      <IonContent>
        <Box bgcolor={"white"} sx={{ height: "130%" }}>
          <HeaderSection>
            <IonRouterLink routerLink="/home">
              <div
                style={{
                  backgroundColor: "transparent",
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  position: "relative",
                  width: "95%",
                  paddingLeft: "5%",
                  height: "100%",
                  gap: "10px",
                  color:'white'
                }}
              >
                <ArrowBackIcon /> Voltar
              </div>
            </IonRouterLink>
          </HeaderSection>
          <div
            style={{
              padding: "5px",
              height: "90vh",
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
            }}
          >
            <SleepComponent />
            <DiaryHabitsComponent />
            <DiarysPageComponents
              Icon={
                <InterestsIcon
                  style={{ fill: "#40AED3", width: "40px", height: "40px" }}
                />
              }
              onOpenDrower={() => {}}
              subtitle="Como foi seu dia?"
              title="Emoção do dia"
            />
            <DiarysPageComponents
              Icon={
                <PermContactCalendarIcon
                  style={{ fill: "#40AED3", width: "40px", height: "40px" }}
                />
              }
              onOpenDrower={() => {}}
              subtitle="Aconteceu algo hoje?"
              title="Episódios do dia"
            />
            <DiarysPageComponents
              Icon={
                <SelfImprovementIcon
                  style={{ fill: "#40AED3", width: "40px", height: "40px" }}
                />
              }
              onOpenDrower={() => {}}
              subtitle="Atitudes de auto cuidado"
              title="Auto cuidado"
            />
            <DiarysPageComponents
              Icon={
                <AssignmentIcon
                  style={{ fill: "#40AED3", width: "40px", height: "40px" }}
                />
              }
              onOpenDrower={() => {}}
              subtitle="Pensamentos predominante"
              title="Resumo do dia"
            />
          </div>
        </Box>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default Diary;
