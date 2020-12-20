/* eslint-disable no-shadow */
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
const bt = document.getElementById('btn');
error_message.style.visibility = 'hidden';
bt.onclick = validate;
function validate() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;
  const error_message = document.getElementById('error_message');

  error_message.style.padding = '10px';

  let text;
  if (name.length == '') {
    error_message.style.visibility = 'visible';
    text = 'Please Enter valid Name';
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf('@') == -1 || email.length < 6) {
    text = 'Please Enter valid Email';
    error_message.style.visibility = 'visible';
    // check.innerHTML = 'email must be valid';
    error_message.innerHTML = text;
    return false;
  }
  if (comment.length <= 20) {
    text = 'Please Enter More Than 20 Characters';
    error_message.innerHTML = text;
    return false;
  }

  return true;
}

// project comment
const commentsForm = document.querySelector('#commentForm');
const name = document.querySelector('#name');
const smail = document.querySelector('#email');
const comment = document.querySelector('#comment');

const today = new Date();
// project form  storing

const arraymonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const msg_date = `${arraymonths[today.getMonth()]} ${today.getDay()}  ${today.getFullYear()}     ${today.getHours()}:${today.getMinutes()}`;
commentsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validate()) {
    db.collection('comments').add({
      name: name.value,
      sender_email: smail.value,
      Comment: comment.value,

      Time: msg_date,
    }).then(() => {
      commentsForm.reset();
      alert('Comment submitted. Thank you');
    }).catch((error) => {
      alert('an error occured !');
    });
  }
});
// getting comments
const msg_section = document.querySelector('#dsc');

function render(doc) {
  const box = document.createElement('div');
  box.setAttribute('class', 'description');

  const name = document.createElement('h5');
  name.textContent = doc.data().name;

  const comment = document.createElement('p');
  comment.textContent = doc.data().Comment;

  const senderDate = document.createElement('p');
  senderDate.textContent = doc.data().Time;

  box.appendChild(name);
  box.appendChild(senderDate);
  box.appendChild(comment);

  msg_section.appendChild(box);
}
db.collection('comments').get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    render(doc);
  });
});
