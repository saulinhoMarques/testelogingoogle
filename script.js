// Sua configuração do Firebase (usando os dados do seu projeto Sunseeker)
// Substitua com a configuração real do seu projeto se ela for diferente da estrutura abaixo
const firebaseConfig = {
  apiKey: "SUA_API_KEY", // Substitua pela sua API Key real
  authDomain: "sunseeker-4bc7d.firebaseapp.com",
  projectId: "sunseeker-4bc7d",
  storageBucket: "sunseeker-4bc7d.appspot.com",
  messagingSenderId: "SEU_SENDER_ID", // Substitua pelo seu Sender ID real
  appId: "SEU_APP_ID", // Substitua pelo seu App ID real
  // databaseURL: "https://<DATABASE_NAME>.firebaseio.com", // Adicione se usar Realtime Database
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider(); // Provedor Google

// Elementos da UI
const authContainer = document.getElementById('auth-container');
const userInfoDiv = document.getElementById('user-info');
const userDisplayNameSpan = document.getElementById('user-display-name');
const userEmailSpan = document.getElementById('user-email');
const signoutBtn = document.getElementById('signout-btn');
const loginGoogleBtn = document.getElementById('login-google-btn');
// const signupEmailBtn = document.getElementById('signup-email-btn'); // Desabilitado na sua config
// const loginEmailBtn = document.getElementById('login-email-btn');   // Desabilitado na sua config
// const emailInput = document.getElementById('email');             // Desabilitado na sua config
// const passwordInput = document.getElementById('password');         // Desabilitado na sua config

// Ouve as mudanças no estado de autenticação (login/logout)
auth.onAuthStateChanged((user) => {
  if (user) {
    // Usuário está logado
    authContainer.style.display = 'none';
    userInfoDiv.style.display = 'block';
    userDisplayNameSpan.textContent = user.displayName || 'Usuário'; // Usa nome se disponível, senão 'Usuário'
    userEmailSpan.textContent = user.email;
    console.log("Usuário logado:", user);
  } else {
    // Usuário deslogado
    authContainer.style.display = 'block';
    userInfoDiv.style.display = 'none';
    userDisplayNameSpan.textContent = '';
    userEmailSpan.textContent = '';
    console.log("Usuário deslogado");
  }
});

// Lógica para login com Google
loginGoogleBtn.addEventListener('click', () => {
  auth.signInWithPopup(googleProvider)
    .then((result) => {
      // Login com Google bem-sucedido
      console.log("Login com Google bem-sucedido", result.user);
    })
    .catch((error) => {
      // Lidar com erros de login com Google
      console.error("Erro no login com Google:", error);
      alert("Erro no login com Google: " + error.message);
    });
});

// Lógica para sair
signoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      // Logout bem-sucedido
      console.log("Usuário saiu");
    })
    .catch((error) => {
      // Lidar com erros de logout
      console.error("Erro ao sair:", error);
      alert("Erro ao sair: " + error.message);
    });
});


// --- Nota ---
// As funcionalidades de login/cadastro com Email/Senha estão comentadas
// pois a configuração da sua Autenticação indica que Email/Senha está desabilitado.
// Se habilitar futuramente, descomente e implemente a lógica aqui.
/*
// Lógica para cadastro com Email/Senha (Desabilitado na sua config)
signupEmailBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Usuário criado:", userCredential.user);
    })
    .catch((error) => {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário: " + error.message);
    });
});

// Lógica para login com Email/Senha (Desabilitado na sua config)
loginEmailBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Usuário logado:", userCredential.user);
    })
    .catch((error) => {
      console.error("Erro ao logar:", error);
      alert("Erro ao logar: " + error.message);
    });
});
*/
