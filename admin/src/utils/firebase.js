import firebase, { initializeApp } from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBJAFVVzQNNrOE32pdXvPB-koNIL9BsDtY",
    authDomain: "clothing-store-83f19.firebaseapp.com",
    projectId: "clothing-store-83f19",
    storageBucket: "clothing-store-83f19.appspot.com",
    messagingSenderId: "578982293162",
    appId: "1:578982293162:web:27c916544629a9bd96aad3"
};


// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const storage = firebase.storage();

export const uploadImageToFirebase = async (image) => {
    try {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(image.name);
      await imageRef.put(image);
      const url = await imageRef.getDownloadURL();
      return url;
    } catch (error) {
      console.error('Error uploading image to Firebase:', error);
      throw error;
    }
};