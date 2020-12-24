/* eslint-disable no-undef */
/* eslint-disable no-console */
// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('user logged in', user);
  } else {
    console.log('user logged out');
  }
});

// sign up
const signupForm = document.querySelector('#sign');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm.email.value;
  const password = signupForm.pass.value;
  // console.log(names, email, password);

  // sign up a user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => db.collection('users').doc(cred.user.uid).set({
    names: signupForm.names.value,
    email: signupForm.email.value,
  })).then(() => {
    // console.log(cred.user);
    signupForm.reset();
    window.location.href = '../html/dashex.html';
  });
});

// log in

const loginForm = document.querySelector('#sign');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm.email.value;
  const password = loginForm.pass.value;
  auth.signInWithEmailAndPassword(email, password).then(() => {
    // console.log(cred.user);

    loginForm.reset();
    window.location.href = '../html/dashex.html';
  });
});
