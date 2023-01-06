const firebaseConfig = {
      apiKey: "AIzaSyDrt9ox730NDOg9avKKAGEwqv0SpJuNVkQ",
      authDomain: "chat-app-740b6.firebaseapp.com",
      databaseURL: "https://chat-app-740b6-default-rtdb.firebaseio.com",
      projectId: "chat-app-740b6",
      storageBucket: "chat-app-740b6.appspot.com",
      messagingSenderId: "799252540862",
      appId: "1:799252540862:web:151da531869236d96e5def"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="" ;


    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter_room.html");
      }