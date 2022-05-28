import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonListHeader, IonPage, IonReorder, IonReorderGroup, IonTitle, IonToolbar, IonImg, IonInput, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { logoDiscord, logoSteam, logoAmazon, logoAndroid } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonListHeader>Empresas</IonListHeader>
        <IonReorderGroup disabled={false}>
        <IonList>
            <IonItem>
              <IonImg src={logoAndroid}></IonImg>
              <IonLabel>Android</IonLabel>
            </IonItem>
          </IonList>
          <IonReorder>
            <IonItem>
              <IonImg src={logoDiscord}></IonImg>
              <IonLabel>Discord</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
            <IonImg src={logoAmazon}></IonImg>
              <IonLabel>Amazon</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
            <IonImg src={logoSteam}></IonImg>
              <IonLabel>Steam</IonLabel>
            </IonItem>
          </IonReorder>
        </IonReorderGroup><br /><br />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
