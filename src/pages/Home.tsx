import React from "react";
import { Box, Typography, Grid, IconButton, useTheme } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CardItem from "../components/CardItem";
import { IonContent, IonPage } from "@ionic/react";
import BottomNav from "../components/BottomNav";
import CustomCard from "../components/IndicationCard";

interface CardData {
  image: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const theme = useTheme();
  const cardsData: CardData[] = [
    {
      title: "Fazer piquenique",
      description: "Uma ótima forma de relaxar!",
      image: "https://via.placeholder.com/300x140",
    },
    {
      title: "Meditação",
      description: "Acalme sua mente.",
      image: "https://via.placeholder.com/300x140",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <Box bgcolor={"white"} sx={{ padding: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography color="#215A6D" variant="h4" fontWeight="bold">
                Olá, João
              </Typography>
              <Typography variant="subtitle1" color={"primary"}>
                É um prazer te ter por aqui!
              </Typography>
            </Box>
            <IconButton>
              <NotificationsIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Atalhos */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto', 
              gap: '16px', 
              padding: '16px', 
              scrollbarWidth: 'thin', 
            }}
          >
            <CardItem
              title="Agendamento"
              description="Marcar horário com seu terapeuta"
            />
            <CardItem
              title="Relatório diário"
              description="Como foi o seu dia hoje?"
            />
            <CardItem
              title="Autoavaliação"
              description="Faça uma avaliação para você."
            />
          </div>
          {/* Cuidando de você */}
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Cuidando de você
          </Typography>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto', 
              gap: '16px', 
              padding: '16px', 
              scrollbarWidth: 'thin', 
            }}
          >
            <CustomCard
            image="https://via.placeholder.com/300x140"
            link=""
            title="Piquenique"
            />
            <CustomCard
            image="https://via.placeholder.com/300x140"
            link=""
            title="Piquenique"
            />
            <CustomCard
            image="https://via.placeholder.com/300x140"
            link=""
            title="Piquenique"
            />
          </div>

        </Box>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default Home;
