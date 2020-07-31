var firebaseConfig = {
      apiKey: "AIzaSyAgeDTp-fqvaUUZJLQ57Ek8-017lV8q-GA",
      authDomain: "open-ie.firebaseapp.com",
      databaseURL: "https://open-ie.firebaseio.com",
      projectId: "open-ie",
      storageBucket: "open-ie.appspot.com",
      messagingSenderId: "620660259173",
      appId: "1:620660259173:web:7aea5f128c62e1b7f3898c"
    };
    firebase.initializeApp(firebaseConfig);

    const txtEmail = document.getElementById('user');
    const txtPass = document.getElementById('password');
    const bttnLogin = document.getElementById('login');

    bttnLogin.addEventListener('click', e => {
      firebase.auth().signOut();
      const email = txtEmail.value;
      const pass = txtPass.value;
      var promise = firebase.auth().signInWithEmailAndPassword(email, pass)
        .catch(function(error){
          alert("Eroare!");
        })
        
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var uid = firebase.auth().currentUser.uid;
        console.log('users/'+uid+'/tip');
        var tipContRef = firebase.database().ref('users/'+uid+'/tip');
        tipContRef.on('value', function(snapshot){
          // alert(snapshot.val()); // snapshot.val() *teoretic* returneaza valoarea ceruta (prof / elev)
        });
       } else {
        // No user is signed in.
      }
});