//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";     
     }

     function send() {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });
           document.getElementById("msg").value = "";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button="<button class='btn btn-warning' id=' "+ firebase_message_id +"' value="+ like +" onclick= 'updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

 row = name_with_tag + message_with_tag + like_button +span_with_tag;
 document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function updateLike(message_id) {
      console.log("click on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });
}