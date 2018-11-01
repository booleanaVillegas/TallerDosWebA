import * as firebase from 'firebase';

import { AuthStore } from './AuthStore';
import { MensajesStore } from './MensajesStore';

if(!firebase.apps.length) firebase.initializeApp({
  apiKey: "AIzaSyCFaJ0lVGBdOZ09iV0LIdisQk16nUN0PtE",
  authDomain: "minijuegos-49b4d.firebaseapp.com",
  databaseURL: "https://minijuegos-49b4d.firebaseio.com",
  projectId: "minijuegos-49b4d",
  storageBucket: "minijuegos-49b4d.appspot.com",
  messagingSenderId: "880560047544"
});

export const stores = {
  auth: new AuthStore(firebase),
  mensajes: new MensajesStore(firebase),
};