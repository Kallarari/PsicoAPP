import React from "react";
import { IonApp, IonContent, IonPage, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";

import "./theme/variables.css"; // Estilo padrão do Ionic
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import Diary from "./pages/Diary/Diary";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Routes from "./routes/routes";
import NotFound from "./pages/NotFound";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import UserProfile from "./pages/UserEdition";
import Scheduling from "./pages/Scheduling";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

setupIonicReact();

const App: React.FC = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <IonReactRouter>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/diary" component={Diary} />
      <Route path="/agendamento" component={Scheduling} />
      <Route path="/indicacoes" component={NotFound} />
      <Route path="/perfil" component={UserProfile} />
    </IonReactRouter>
  </ThemeProvider>
  </LocalizationProvider>
);

export default App;
