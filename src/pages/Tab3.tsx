import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonListHeader, IonPage, IonRadioGroup, IonReorder, IonReorderGroup, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { logoDiscord, logoSteam, logoAmazon, logoAndroid } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color='primary'>tarjeta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonImg src={logoAndroid} />
            <IonCardTitle>Android</IonCardTitle>
            <IonCardSubtitle>Sistema Operativo</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
            Android es un sistema operativo móvil basado en el núcleo Linux y otros software de código abierto. Fue diseñado para dispositivos móviles con pantalla táctil, como teléfonos inteligentes, tabletas, relojes inteligentes Wear OS, automóviles con otros sistemas a través de Android Auto, al igual los automóviles con el sistema Android Automotive y televisores Android TV.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={logoAmazon} />
            <IonCardTitle>Amazon</IonCardTitle>
            <IonCardSubtitle>Tienda en linea</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
            Amazon, Inc. es una compañía estadounidense de comercio electrónico y servicios de computación en la nube a todos los niveles con sede en la ciudad de Seattle, Washington. Su lema es: From A to Z (traducido al español: «De la A a la Z»).
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={logoSteam} />
            <IonCardTitle>Steam</IonCardTitle>
            <IonCardSubtitle>Plataforma de Videojuegos</IonCardSubtitle>
          
          </IonCardHeader>

          <IonCardContent>
            Steam es un servicio de distribución digital de videojuegos.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={logoDiscord} />
            <IonCardTitle>Discord</IonCardTitle>
            <IonCardSubtitle>Comunicación</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
            Es una aplicacion de comunicación.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
