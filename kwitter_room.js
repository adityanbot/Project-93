// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB2lvePlIj7JWkKXT8rQoPCC2TfLF1_DEs",
      authDomain: "kwitter-f7c1d.firebaseapp.com",
      projectId: "kwitter-f7c1d",
      storageBucket: "kwitter-f7c1d.appspot.com",
      messagingSenderId: "567476796389",
      appId: "1:567476796389:web:325d88d923c2654e558d0c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
