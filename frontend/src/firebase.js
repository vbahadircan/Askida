import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa69xbcP3nAjw2jtvBDA0bUFNhu_J5JYw",
    authDomain: "askida-a122a.firebaseapp.com",
    projectId: "askida-a122a",
    storageBucket: "askida-a122a.appspot.com",
    messagingSenderId: "257539944090",
    appId: "1:257539944090:web:33a0079a2c6daca0f53923",
    measurementId: "G-40D1JX7JP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export { auth, db, storage };
