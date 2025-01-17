import React, { useState } from "react";
import { IonIcon, IonPage } from "@ionic/react";
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
  // ... outros componentes do Material UI
} from "@mui/material";
import { display, styled } from "@mui/system";
import { arrowBack, pencil } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Plugins } from "@capacitor/core";
import BottomNav from "../../components/BottomNav";
import VerifiedIcon from "@mui/icons-material/Verified";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const { LocalNotifications, Permissions } = Plugins;

const Scheduling: React.FC = () => {
  const [imagePath, setImagePath] = useState<any>();
  const [imageWebPath, setImageWebPath] = useState<any>();

  const handleSelectImage = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
    });

    if (image) {
      setImagePath(image);
      setImageWebPath(image.webPath);
      const imageUrl = image.webPath;
      // ...
    }
  };

  const scheduleNotification = async () => {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Minha notificação",
          body: "Este é o corpo da notificação",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) }, // 5 segundos a partir de agora
        },
      ],
    });
  };

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

  const requestPermissions = async () => {
    const permission = await Permissions.request({
      permissions: [
        {
          name: "notifications",
          usageDescription:
            "Precisamos desta permissão para enviar notificações.",
        },
      ],
    });

    if (permission.granted) {
      // Permissão concedida, agende a notificação
      scheduleNotification();
    } else {
      console.log("Permissão negada");
    }
  };

  return (
    <IonPage>
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
          <StyledIcon icon={arrowBack} />
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
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems:'center',
            padding:'2%'
          }}
        >
          <FormControl sx={{ width: "130px" }}>
            <InputLabel id="demo-simple-select-label">Mês</InputLabel>
            <Select  label="Mês" sx={{ color: "#004961" }}>
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
      </div>
      <BottomNav />
    </IonPage>
  );
};

export default Scheduling;
