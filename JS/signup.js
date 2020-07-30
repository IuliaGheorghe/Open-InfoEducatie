(function(){

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

      const txtLname = document.getElementById('fname');
      const txtFname = document.getElementById('lname');
      const txtEmail = document.getElementById('email');
      const txtUsername = document.getElementById('username');
      const txtPassword = document.getElementById('password');
      const txtRpassword = document.getElementById('rpassword');
      const bttnSignUp = document.getElementById('login');

      bttnSignUp.addEventListener('click', e => {

          const lname = txtLname.value;
          const fname = txtFname.value;
          const email = txtEmail.value;
          const user = txtUsername.value;
          const pass = txtPassword.value;
          const rpass = txtRpassword.value;
          console.log(pass);
          const auth = firebase.auth();
          if(pass != rpass) // daca parolele nu-s aceleasi
            alert("Parolele nu sunt identice!");
            else {
                const promise = auth.createUserWithEmailAndPassword(email, pass);
                promise
                    .then(user => {
                        firebase.database().ref('users').ref(email).set({
                            username: user,
                            first_name: fname,
                            last_name: fname
                        });
                    })
                    .catch(e => alert("Eroare!"));
            }
      });

}());