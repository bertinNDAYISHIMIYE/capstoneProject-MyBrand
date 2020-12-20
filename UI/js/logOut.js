/* eslint-disable no-unused-expressions */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// log out method
// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('user logged in', user);
  } else {
    console.log('user logged out');
    // redirecting to sign in
    window.location.href = '../html/signin.html';
  }
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then;
});
