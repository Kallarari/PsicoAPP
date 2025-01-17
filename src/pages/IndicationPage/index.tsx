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
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import BottomNav from "../../components/BottomNav";
import { styled } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedIcon from "@mui/icons-material/Verified";

const IndicationPage: React.FC = () => {
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

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "32px",
    color: "#215A6D",
    fontWeight: 700,
    textAlign: "left",
    width: "90vw",
    margin: " 0px auto",
  }));

  const SubHeader = styled(Typography)(({ theme }) => ({
    fontSize: "10px",
    color: "#8D8D8D",
    fontWeight: 500,
  }));

  const PsicologicHeader = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    color: "#606060",
    fontWeight: 700,
  }));

  const DescriptionContainer = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: "#2D2D29",
    fontWeight: 700,
  }));

  const AvatarContainer = styled(Box)(({ theme }) => ({
    position: "relative",
  }));

  const TextContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  }));
  const Container = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
  }));

  return (
    <IonPage>
      <IonContent>
        <Container>
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
                  color: "white",
                }}
              >
                <ArrowBackIcon /> Voltar
              </div>
            </IonRouterLink>
          </HeaderSection>
          <div
            style={{
              padding: "5px",
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              width: "85vw",
              margin: "auto",
              backgroundColor: "white",
            }}
          >
            <Title>Como socializar melhor?</Title>
            <div
              style={{
                display: "flex",
                width: "90vw",
                margin: "10px auto 0px auto",
              }}
            >
              <AvatarContainer>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  src="/psicologoExemple.png"
                />
                <VerifiedIcon
                  style={{
                    fill: "#00c040",
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    bottom: "-6px",
                    right: "-6px",
                  }}
                />
              </AvatarContainer>
              <TextContainer>
                <SubHeader>Revisado por</SubHeader>
                <PsicologicHeader>
                  <strong>Reginaldo de Melo</strong>, Psicólogo, mais de 5 anos
                  em psicologia e terapêutica
                </PsicologicHeader>
              </TextContainer>
            </div>
            <img src={"/svgImageExample.png"} />
            <DescriptionContainer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              rutrum volutpat magna, dapibus porttitor sem congue et. Ut quis
              semper nisl, eget tincidunt libero. Aliquam accumsan ut purus
              finibus ornare. Aliquam tristique nunc quis vehicula dictum.
              Phasellus feugiat quam sit amet arcu viverra elementum. Nulla
              facilisi. Ut sit amet eros eu nibh tempor dignissim. Aenean
              tincidunt orci quis tortor posuere, ut pellentesque sapien
              finibus. Maecenas sapien augue, aliquet in pretium ut, pulvinar eu
              leo.
            </DescriptionContainer>
          </div>
        </Container>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default IndicationPage;
