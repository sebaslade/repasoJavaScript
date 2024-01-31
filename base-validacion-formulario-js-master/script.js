//FirebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyBiunQHuGzos4ACGp-qiVJU7GavDwCuaok",
    authDomain: "js-firebase-ab8c7.firebaseapp.com",
    projectId: "js-firebase-ab8c7",
    storageBucket: "js-firebase-ab8c7.appspot.com",
    messagingSenderId: "332584873413",
    appId: "1:332584873413:web:7b0f3e4e2cae8c5dd46fac",
    measurementId: "G-T23F334ES9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit',(event) => {
    event.preventDefault()
    //Validar campo Nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introduce tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }
    //Validar correo electrónico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Patrón de válidación básico
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduce un correo válido'
        emailError.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }
    //Validar la contraseña
    let passwordEntrada = document.getElementById('password')
    let passwordError = document.getElementById('passwordError')
    if(passwordEntrada.value.length < 8){
        passwordError.textContent = 'La contraseña debe tener al menos 8 carácteres'
        passwordError.classList.add('error-message')
    }else{
        passwordError.textContent = ''
        passwordError.classList.remove('error-message')
    }
    //Si todos los datos son válidos, enviar el formulario
    if(!errorNombre.textContent && !emailError.textContent && !passwordError.textContent){
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: passwordEntrada.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        alert('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset();
    }
})