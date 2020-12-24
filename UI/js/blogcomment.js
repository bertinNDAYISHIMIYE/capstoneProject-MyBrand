/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// ...................blogs................

const blogArea = document.querySelector('#blogs');

db.collection('blogs').orderBy('time', 'desc').onSnapshot((docs) => {
  docs.forEach((doc) => {
    const get = doc.data();
    console.log(get);
    renderBlog(get);
  });
});
function renderBlog(get) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const cardImage = document.createElement('div');
  cardImage.setAttribute('class', 'card-image');
  const coverImage = document.createElement('img');
  coverImage.setAttribute('src', get.image);
  cardImage.appendChild(coverImage);

  const cardTitle = document.createElement('div');
  cardTitle.setAttribute('class', 'card-title');

  const cardText = document.createElement('div');
  cardText.setAttribute('class', 'card-text');

  const cardButton = document.createElement('div');
  cardButton.setAttribute('class', 'card-btn');

  const cardBtn = document.createElement('button');

  const cardLink = document.createElement('a');
  cardLink.setAttribute('href', 'singleblog.html');

  cardTitle.textContent = get.title;
  cardText.textContent = get.content.slice(0, 30);
  cardLink.textContent = 'more';

  cardBtn.appendChild(cardLink);
  cardButton.appendChild(cardBtn);

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardText);
  card.appendChild(cardButton);

  blogArea.appendChild(card);
}

// validation

const bt = document.getElementById('btn');
bt.onclick = validate;

error_message.style.visibility = 'hidden';

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

// blog comment
const commentsForm = document.querySelector('#commentForm');
const name = document.querySelector('#name');
const smail = document.querySelector('#email');
const comment = document.querySelector('#comment');

const today = new Date();
// comment form  storing

const arraymonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const msg_date = `${arraymonths[today.getMonth()]} ${today.getDay()}  ${today.getFullYear()}     ${today.getHours()}:${today.getMinutes()}`;
commentsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validate()) {
    db.collection('comments1').add({
      name: name.value,
      sender_email: smail.value,
      Comment: comment.value,

      Time: msg_date,
    }).then(() => {
      commentsForm.reset();
      alert('Comment submitted. Thank you');
    // eslint-disable-next-line no-unused-vars
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
db.collection('comments1').get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    render(doc);
  });
});
