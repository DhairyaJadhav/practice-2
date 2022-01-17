var firebaseConfig = {
    apiKey: "AIzaSyCmsthtwND9BiKWAC5opoKed2udp7imFBk",
    authDomain: "kwitter-89b59.firebaseapp.com",
    databaseURL: "https://kwitter-89b59-default-rtdb.firebaseio.com",
    projectId: "kwitter-89b59",
    storageBucket: "kwitter-89b59.appspot.com",
    messagingSenderId: "996801738734",
    appId: "1:996801738734:web:e1ba0278442fdcdec540ff"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      AddUser = document.getElementById("input_user_name").value;
      firebase.database().ref("/").child(AddUser).update({
          purpose : "addingUser"
      })
  }   