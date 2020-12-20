/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-console */
let img;
const inputTitle = document.querySelector('#title');
const inputEditor = document.querySelector('#writer');
const inputContent = document.querySelector('#description');
const editImage = document.querySelector('.file-input');
const queryString = location.search.substring(1);
// console.log(queryString);

const checkLength = (input, min) => {
  if (input.value.trim().lenght < min) {
    showError(input, `${input.id} should be atleast ${min} characters`);
  } else {
    removeError(input);
    return true;
  }
};

const removeError = (input) => {
  const input_error = input.parentElement;
  input_error.classList = 'col-75';
};

db.collection('blogs').doc(queryString).get().then((snapshot) => {
  // console.log(snapshot.data());
  fillform(snapshot);
});

function fillform(doc) {
  const get = doc.data();
  inputTitle.value = get.title;
  inputEditor.value = get.Author;
  inputContent.value = get.content;
}

const updateBtn = document.querySelector('#update-btn');
updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  img = editImage.files[0];
  if (img) {
    const storageRef = firebase.storage().ref(`post_images/${img.name}`);
    const uploadImage = storageRef.put(img);
    uploadImage.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log(downloadURL);
      if (checkLength(inputTitle, 7) && checkLength(inputContent, 100)) {
        db.collection('blogs').doc(queryString).update({
          title: inputTitle.value,
          editor: inputEditor.value,
          content: inputContent.value,
          image: downloadURL,
        }).then(() => {
          alert('data updated successfully');
          location.href = 'dashex.html';
        });
      }
    });
  } else if (checkLength(inputTitle, 7) && checkLength(inputContent, 100)) {
    db.collection('blogs').doc(queryString).update({
      title: inputTitle.value,
      content: inputContent.value,
    }).then(() => {
      alert('data updated successfully');
      location.href = 'dashboard.html';
    });
  }
});
