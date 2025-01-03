import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';

const Diary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diário Emocional</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color="primary">
          <h1>Bem-vindo ao Diário Emocional!</h1>
        </IonText>
        <IonButton expand="block" color="success" onClick={() => console.log('Acessando diário')}>
          Registrar Emoções
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Diary;
