import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Button, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const history = useHistory();

  // Função para voltar para a página principal
  const goHome = () => {
    history.push('/'); // Redireciona para a página inicial
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h5" color="textSecondary">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={goHome}
            sx={{ marginTop: 2 }}
          >
            Voltar para a página inicial
          </Button>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
