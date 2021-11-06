
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDqWlEeQNQr4rbTPBUrIx4aHdUA_E0kylw",
      authDomain: "we-chat-7a78b.firebaseapp.com",
      projectId: "we-chat-7a78b",
      storageBucket: "we-chat-7a78b.appspot.com",
      messagingSenderId: "41344667807",
      appId: "1:41344667807:web:1273436a6b71b58a2552aa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("userName").innerHTML = "Welcome" + username + "!";
    
    function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
      
});


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("roomnames - " + Room_names);
       row = "<div class = 'room_name'id = "+ Room_names +" onclick='redirectToroom_name(this.id)'>#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row; 
  //Start code


  //End code
  });});}
getData();


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}}
