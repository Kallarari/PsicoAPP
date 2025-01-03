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

const BottomNav: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonRouterLink routerLink="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="agendamento" href="/agendamento">
        <IonRouterLink routerLink="/agendamento">
          <IonIcon icon={calendar} />
          <IonLabel>Agendamento</IonLabel>
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="indicacoes">
        <IonRouterLink routerLink="/indicacoes">
          <IonIcon icon={list} />
          <IonLabel>Indicações</IonLabel>
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="perfil" href="/perfil">
        <IonRouterLink routerLink="/perfil">
          <IonIcon icon={person} />
          <IonLabel>Perfil</IonLabel>
        </IonRouterLink>
      </IonTabButton>
    </IonTabBar>
  );
};

export default BottomNav;
