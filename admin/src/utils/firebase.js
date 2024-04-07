import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString
} from "firebase/storage";

import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyCcyKi8z_rv_D-MyinuVkZWPjT0bbwlnfo",
  authDomain: "ecommerce-images-29eb1.firebaseapp.com",
  projectId: "ecommerce-images-29eb1",
  storageBucket: "ecommerce-images-29eb1.appspot.com",
  messagingSenderId: "73880456857",
  appId: "1:73880456857:web:389124ed6e588820177208"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage();

export const uploadImageToFirebase = async (imagePath) => {
  try {
    console.log("Aqui 1")
    const imageRef = ref(storage, `products/${uuidv4()}`);
    console.log("Aqui 2")
    await uploadString(imageRef, imagePath, 'data_url');
    console.log("Aqui 3")
    const url = await getDownloadURL(imageRef);
    console.log("Aqui 4")
    return url;
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    throw error;
  }
};

/* const sendPost = async () => {
  if (loading) return;
  setLoading(true);

  const docRef = await addDoc(collection(db, "posts"), {
    id: session.user.uid,
    username: session.user.name,
    userImg: session.user.image,
    tag: session.user.tag,
    text: input,
    timestamp: serverTimestamp(),
  });

  const imageRef = ref(storage, `posts/${docRef.id}/image`);

  if (selectedFile) {
    await uploadString(imageRef, selectedFile, "data_url").then(async () => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });
  }

  setLoading(false);
  setInput("");
  setSelectedFile(null);
  setShowEmojis(false);
}; */