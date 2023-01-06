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
    function addroom()
    {
   room_name =document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
       purpose:"adding room"
   });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
          console.log("room name" + Room_names);
      row="<div class='room_name' id= "+ Room_names + "onclick='redirecttoroomname(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      

      });});}
getData();

function redirecttoroomname(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    
}