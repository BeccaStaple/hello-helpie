import Firebase from "firebase"

let firebaseApp = Firebase.initializeApp({
    apiKey: "not api key",
    authDomain: "not auth domain",
    databaseURL: "not db url",
    projectId: "not project id",
    storageBucket: "not storage bucket",
    messagingSenderId: "not messaging sender id",
    appId: "app id"
});

let db = firebaseApp.firestore();

export {db};

//get these credentials from your firebase db