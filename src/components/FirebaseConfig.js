import {initializeApp} from 'firebase/app'
function useFirebase()
{
    const firebaseConfig = {
        ///valami
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID,
        measurementId: process.env.MEASUREMENTID,
    };
    const app=initializeApp(firebaseConfig)
    return app
}

export {useFirebase}