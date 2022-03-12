var firebaseConfig = {
    apiKey: "AIzaSyDDS9FD52TseMJe5b5Ao5cll8VQ92BlXJQ",
    authDomain: "mycity-jtlh.firebaseapp.com",
    databaseURL: "https://mycity-jtlh-default-rtdb.firebaseio.com",
    projectId: "mycity-jtlh",
    storageBucket: "mycity-jtlh.appspot.com",
    messagingSenderId: "1095225555794",
    appId: "1:1095225555794:web:e39753529f5517461e988b",
    measurementId: "G-P7R2S57B69"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start 
    row = "<div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)' >#"+Room_Names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
});});}
getData();

function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}