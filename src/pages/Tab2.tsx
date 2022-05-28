import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonSearchbar, IonSlide, IonSlides, IonTitle, IonToast, IonToolbar, IonAlert, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { logoAndroid, heart, caretForwardCircle, shield } from 'ionicons/icons';
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import React, { useState } from 'react';
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
import { ActionSheet, ActionSheetOptionStyle } from '@capacitor/action-sheet';

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [showToast1, setShowToast1] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [sheet, setsheet] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Botones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Busqueda</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonSlides>
          <IonSlide>
            <IonImg src={logoAndroid} color='blue' />
          </IonSlide>
        </IonSlides><br /><br /><br />


        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Bien Echo"
          duration={2100}
        />

        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Alerta'}
          subHeader={'Cancelar Todo'}
          message={'Seguro De Que Quieres Salir'}
          buttons={['Cancelar', 'Salir']}
        />

        <IonActionSheet
          isOpen={sheet}
          onDidDismiss={() => setsheet(false)}
          cssClass='my-custom-class'
          header={'Juegos'}
          buttons={[{
            text: 'Zelda',
            role: 'RPG',
            icon: shield,
            id: 'zelda-button',
            data: {
              type: 'Play'
            }
          }, {
            text: 'Zombieland',
            icon: caretForwardCircle,
            data: 'Data value',
            handler: () => {
              console.log('Play clicked');
            }
          }, {
            text: 'Favoritos',
            icon: heart,
            handler: () => {
              console.log('Favorite clicked');
            }
          }]}
        >
        </IonActionSheet>

        <IonButton onClick={() => link()} color='primary'>Mi perfil</IonButton>

        <IonButton onClick={() => share()} color='medium'>Compartir</IonButton>

        <IonButton onClick={() => wifi()} color='success'>Ver si esta conectado a Wifi</IonButton>

        <IonButton onClick={() => setShowToast1(true)} color='secondary'>Toast</IonButton>

        <IonButton onClick={() => setsheet(true)} color='danger'>Menu juegos</IonButton>
        
        <IonButton onClick={() => setShowAlert1(true)} color="success">Alerta Salir</IonButton>
        
        <IonButton onClick={() => cargando()} color='secondary'>Ver si esta cargando</IonButton>

        <IonButton onClick={() => bateria()} color='success'>Ver carga de bateria</IonButton>

        <IonButton onClick={() => tipoConexion()} color='secondary'>Ver tipo de conexion</IonButton>


      </IonContent>
    </IonPage>
  );
};

async function wifi() {
  const status = await Network.getStatus();
  const dd = status.connected;
  await Toast.show({ text: 'wifi: ' + dd });
}


async function tipoConexion() {
  const status = await Network.getStatus();
  const dd = status.connectionType;
  await Toast.show({ text: 'Tipo de conexión: ' + dd });
}

async function bateria() {
  const info = await Device.getBatteryInfo();
  const dd = info.batteryLevel;
  await Toast.show({ text: 'Estatus de carga: ' + dd });
}

async function cargando() {
  const info = await Device.getBatteryInfo();
  const dd = info.isCharging;
  await Toast.show({ text: 'Estatus de carga: ' + dd });
}

async function share() {
  await Share.share({
    title: 'Compartiendo desde Ionic',
    text: 'Estás compartiendo desde una aplicación de Ionic',
    url: 'https://github.com/Christianbeny?tab=repositories',
    dialogTitle: 'Compartir',
  });
}

async function link() {
  await Browser.open({ url: 'https://github.com/Christianbeny' });
}


export default Tab2;
