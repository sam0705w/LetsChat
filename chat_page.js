var firebaseConfig = {
    apiKey: "AIzaSyDZ2hEoIzm2-Lz4S946sioXjU_w88gWl64",
    authDomain: "letschat-50d49.firebaseapp.com",
    databaseURL: "https://letschat-50d49-default-rtdb.firebaseio.com",
    projectId: "letschat-50d49",
    storageBucket: "letschat-50d49.appspot.com",
    messagingSenderId: "115681734298",
    appId: "1:115681734298:web:ad57e5eceddbab75efb923"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var username= localStorage.getItem("name");
var roomname= localStorage.getItem("room")
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("room")
    window.location="index.html"
}