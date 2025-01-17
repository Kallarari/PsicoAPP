import React from "react";
import {
  IonTabButton,
  IonTabs,
  IonTabBar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from "@ionic/react";
import { home, calendar, list, person } from "ionicons/icons";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Routes from "../routes/routes";
import NotFound from "../pages/NotFound";
import { styled, Typography } from "@mui/material";

const StyledTabBar = styled(IonTabBar)(({ theme }) => ({
  "--background": `url('/fundo.png')`, // Define a imagem de fundo
  "background-size": "cover",
  "background-position": "center",
  "background-repeat": "no-repeat",
  opacity: 1, // Opacidade da imagem de fundo
  borderRadius:'10px 10px 0 0',
  padding:'10px 0px',
  mixBlendMode: "normal",

  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#004961",
    opacity: 1, // Opacidade da camada azul
    mixBlendMode: "multiply", // Modo de mesclagem
  },
}));

const StyledIcon = styled(IonIcon)`
  color: white;
  font-size: 20px;
`;

const BottomNav: React.FC = () => {
  return (
    <StyledTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonRouterLink routerLink="/home">
          <StyledIcon icon={home} />
          <Typography variant="body2" color="primary.light">
            HOME
          </Typography>
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="agendamento" href="/agendamento">
        <IonRouterLink routerLink="/agendamento">
          <StyledIcon icon={calendar} />
          <Typography variant="body2" color="primary.light">
            Agendamento
          </Typography>
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="diary">
        <IonRouterLink routerLink="/diary">
          <StyledIcon icon={list} />
          <Typography variant="body2" color="primary.light">
            Diário
          </Typography>
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="perfil" href="/perfil">
        <IonRouterLink routerLink="/perfil">
          <StyledIcon icon={person} />
          <Typography variant="body2" color="primary.light">
            Perfil
          </Typography>
        </IonRouterLink>
      </IonTabButton>
    </StyledTabBar>
  );
};

export default BottomNav;
