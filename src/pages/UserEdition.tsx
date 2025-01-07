import React, { useState } from "react";
import { IonIcon, IonPage } from "@ionic/react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Button,
  Box,
  // ... outros componentes do Material UI
} from "@mui/material";
import BottomNav from "../components/BottomNav";
import { styled } from "@mui/system";
import { arrowBack, pencil } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Plugins } from "@capacitor/core";
const { LocalNotifications, Permissions } = Plugins;

const UserProfile: React.FC = () => {
  const [userName, setUserName] = useState("João Vitor Minosso");
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
          <Avatar sx={{ width: 100, height: 100 }} />
          <div style={{ display: "flex", gap: 10, margin: "20px 0px" }}>
            <Typography color={"textPrimary"}>{userName}</Typography>
            <IonIcon icon={pencil} />
          </div>
          <Button color="inherit">Sair</Button>
        </div>
      </HeaderSection>
      <div style={{ padding: "20px" }}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button color="inherit" onClick={handleSelectImage}>
          Selecionar imagem
        </button>
        <img src={imageWebPath} alt="Imagem do usuário webPath" />
        <img src={imagePath} alt="Imagem do usuário" />
        <button color="primary"  onClick={scheduleNotification}>
          push notification
        </button>
        <button color="inherit" onClick={() => requestPermissions}>
          RequestPermissions
        </button>
      </div>
      <BottomNav />
    </IonPage>
  );
};

export default UserProfile;
