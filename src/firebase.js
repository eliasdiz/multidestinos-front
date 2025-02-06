import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBTbJshu2Mo_Z88eWbr4KVWDlvfQy9zvo4",
    authDomain: "multidestinos-chatbot.firebaseapp.com",
    projectId: "multidestinos-chatbot",
    storageBucket: "multidestinos-chatbot.firebasestorage.app",
    messagingSenderId: "215806317917",
    appId: "1:215806317917:web:1c4974127830ca8f9644b4"
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export default storage