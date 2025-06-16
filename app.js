// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbsF__gX5x5HMLIIeLxj72owJgfctvZUw",
  authDomain: "sunseeker-4bc7d.firebaseapp.com",
  projectId: "sunseeker-4bc7d",
  storageBucket: "sunseeker-4bc7d.appspot.com",
  messagingSenderId: "964999658895",
  appId: "1:964999658895:web:0fe6e2daab4f9c73a81ffa",
  measurementId: "G-5FNYJJY3K1"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginButton = document.getElementById('loginGoogle');
const logoutButton = document.getElementById('logout');
const userInfo = document.getElementById('userInfo');

const provider = new firebase.auth.GoogleAuthProvider();

loginButton.addEventListener('click', () => {
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      userInfo.innerHTML = `
        <p>👋 Bem-vindo, <strong>${user.displayName}</strong></p>
        <p>📧 Email: ${user.email}</p>
        <img src="${user.photoURL}" width="100" alt="Foto de ${user.displayName}"/>
      `;
    })
    .catch(error => {
      console.error(error);
      alert('Erro ao fazer login: ' + error.message);
    });
});

logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
    userInfo.innerHTML = '<p>Você saiu. Até mais!</p>';
  });
});
