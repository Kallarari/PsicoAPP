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

dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.locale("pt-br"); // Set locale to Portuguese

const Scheduling: React.FC = () => {
  function getWorkingDays() {
    const today = dayjs();
    const workingDays = [];

    // Iterate through the week starting from today
    for (let i = 1; i < 12; i++) {
      const currentDay = today.add(i, "day");
      const dayOfWeek = currentDay.weekday(); // 0 = Sunday, 6 = Saturday
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Monday to Friday
        workingDays.push(currentDay.format("YYYY-MM-DD")); // Add date to array
      }
    }

    return workingDays;
  }

  const workingDays = getWorkingDays();

  const [selectedDay, setSelectedDay] = useState<number>();
  const [listOfDays, setListOfDays] = useState([...workingDays]);
  const [possibleTimes, setPossibleTimes] = useState([
    "7:30 AM",
    "8:30 AM",
    "9:30 AM",
    "10:30 AM",
    "15:30 AM",
    "16:30 AM",
  ]);
  const [selectedHour, setSelectedHour] = useState<string>();

  const HeaderSection = styled(Box)(({ theme }) => ({
    position: "relative",
    maxWidth: "100vw",
    height: "40vh",
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

  const AvatarContainer = styled(Box)(({ theme }) => ({
    position: "relative",
  }));

  const StyledIcon = styled(IonIcon)`
    color: white;
    font-size: 30px;
    margin: 10px auto 0px 10px;
  `;

  const TimeText = styled(Typography)(({ theme }) => ({
    fontSize: "13px",
    color: "#8D8D8D",
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
          >
            <IonRouterLink routerLink="/home">
              <div
                style={{ width: "90vw", display: "flex", alignItems: "start" }}
              >
                <StyledIcon icon={arrowBack} />
              </div>
            </IonRouterLink>
            <AvatarContainer>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src="/psicologoExemple.png"
              />
              <VerifiedIcon
                style={{
                  fill: "#00c040",
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  bottom: "-6px",
                  right: "-6px",
                }}
              />
            </AvatarContainer>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 0px 10px 0px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "18px" }} color={"textPrimary"}>
                Reginaldo de Melo
              </Typography>
              <Typography sx={{ fontSize: "12px" }} color={"textPrimary"}>
                Psicanalista, mestre em comportamento humano
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <WhatsAppIcon
                style={{
                  fill: "#fff",
                  width: "40px",
                  height: "40px",
                }}
              />
              <LinkedInIcon
                style={{
                  fill: "#fff",
                  width: "40px",
                  height: "40px",
                }}
              />
              <FacebookIcon
                style={{
                  fill: "#fff",
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
          </div>
        </HeaderSection>
        <div
          style={{
            padding: "20px 10px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
          }}
        >
          {/* month section */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <FormControl sx={{ width: "130px" }}>
              <InputLabel id="demo-simple-select-label">Mês</InputLabel>
              <Select label="Mês" sx={{ color: "#004961" }}>
                <MenuItem sx={{ color: "#004961" }} value={10}>
                  Fevereiro
                </MenuItem>
                <MenuItem sx={{ color: "#004961" }} value={20}>
                  Março
                </MenuItem>
                <MenuItem sx={{ color: "#004961" }} value={30}>
                  Abril
                </MenuItem>
              </Select>
            </FormControl>
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: "#215A6D",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "min-content",
                  padding: "7px",
                }}
              >
                <ArrowBackIosIcon
                  style={{ width: "20px", textAlign: "center" }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#215A6D",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "min-content",
                  padding: "7px",
                }}
              >
                <ArrowForwardIosIcon
                  style={{ width: "20px", textAlign: "center" }}
                />
              </div>
            </div>
          </div>
          {/* month section end */}

          {/* day section */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              padding: "15px 0px 15px 0px",
            }}
          >
            {listOfDays.map((day) => (
              <SchedulingPageComponents
                isSelected={selectedDay == parseInt(day.substring(8, 10))}
                onClickInCard={() => {
                  setSelectedDay(parseInt(day.substring(8, 10)));
                }}
                date={parseInt(day.substring(8, 10))}
                dayName={dayjs(day).format("dddd").replace("-feira", "")}
                vacancy={2}
              />
            ))}
          </div>
          {/* day section end*/}

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <WatchLaterIcon
              style={{ color: "#8D8D8D", width: "20px", height: "20px" }}
            />
            <TimeText>30 minutos de conversa</TimeText>
          </div>

          {/* Hour section */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              padding: "15px 0px 15px 0px",
            }}
          >
            {possibleTimes.map((item) => (
              <Chip
                style={{ color: "#215A6D" }}
                label={item}
                variant={item == selectedHour ? "filled" : "outlined"}
                onClick={() => setSelectedHour(item)}
              />
            ))}
          </div>
          {/* Hour section  end*/}

          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <CostText>{"Total: R$250,00"}</CostText>
            <Button variant="contained" href="#contained-buttons">
              Agendar consulta
            </Button>
          </div>
        </div>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default Scheduling;
