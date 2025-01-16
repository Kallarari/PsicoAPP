import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText,
} from "@ionic/react";
import { Box, IconButton, Typography } from "@mui/material";
import BottomNav from "../../components/BottomNav";
import { styled } from "@mui/system";
import SleepComponent from "../../components/DiarysPageComponents/sleepComponent";

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
        <Box bgcolor={"white"}>
          <HeaderSection>
            <div
              style={{
                backgroundColor: "transparent",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            ></div>
          </HeaderSection>
          <div style={{ padding: "5px", height:'90vh' }}>
            <SleepComponent />
          </div>
        </Box>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default Diary;
