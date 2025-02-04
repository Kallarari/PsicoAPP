import React, { useState } from "react";
import { IonContent, IonIcon, IonPage, IonRouterLink } from "@ionic/react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  // ... outros componentes do Material UI
} from "@mui/material";
import { display, styled, width } from "@mui/system";
import { arrowBack, pencil } from "ionicons/icons";
import { Plugins } from "@capacitor/core";
import BottomNav from "../../components/BottomNav";
import VerifiedIcon from "@mui/icons-material/Verified";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SchedulingPageComponents from "../../components/SchedulingPageComponents/DaySelector";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // Import Portuguese locale
import weekday from "dayjs/plugin/weekday";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SheduleTable from "../../components/SheduleTable";

dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.locale("pt-br"); // Set locale to Portuguese

const ScheduleManagement: React.FC = () => {
  const HeaderSection = styled(Box)(({ theme }) => ({
    maxWidth: "100vw",
    height: "120px",
    // backgroundImage: `url('/fundo.png')`,
    backgroundColor: theme.palette.primary.main,
  }));

  const Container = styled(Box)(({ theme }) => ({
    position: "relative",
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

  const CostText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: "#215A6D",
    width: "100px",
    textAlign: "center",
  }));

  return (
    <IonPage>
      <IonContent>
        <HeaderSection>
          <HeaderName>Bem vindo, Reginaldo Melo</HeaderName>
        </HeaderSection>
        <SheduleTable />
      </IonContent>
    </IonPage>
  );
};

export default ScheduleManagement;
