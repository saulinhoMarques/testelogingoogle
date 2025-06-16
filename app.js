
// Substitua pelos seus dados do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SUA_APP_ID"
};

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
        <p>Bem-vindo, ${user.displayName}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.photoURL}" width="100"/>
      `;
    })
    .catch(error => {
      console.error(error);
    });
});

logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
    userInfo.innerHTML = '<p>Você saiu</p>';
  });
});
