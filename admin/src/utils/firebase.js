import { initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJAFVVzQNNrOE32pdXvPB-koNIL9BsDtY",
  authDomain: "clothing-store-83f19.firebaseapp.com",
  projectId: "clothing-store-83f19",
  storageBucket: "clothing-store-83f19.appspot.com",
  messagingSenderId: "578982293162",
  appId: "1:578982293162:web:27c916544629a9bd96aad3"
};

// Inicialización de Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export const uploadImageToFirebase = async (image, storage) => {
  try {
    const storageRef = Storage.ref();
    const imageRef = storageRef.child(image.name);
    await imageRef.put(image);
    const url = await imageRef.getDownloadURL();
    return url;
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    throw error;
  }
};


export default firebaseApp;


