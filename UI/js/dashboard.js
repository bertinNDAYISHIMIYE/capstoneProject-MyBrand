/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-console */
function dropNav() {
  const menu = document.getElementById('menu');
  if (menu.className === 'menu') {
    menu.className += ' responsive-nav';
  } else {
    menu.className = 'menu';
  }
}

const pane_item = document.getElementsByClassName('pane-item');
pane_item[0].style.display = 'block';
function display_item(n) {
  const menu = document.getElementsByClassName('menu-item');
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.remove('active');
    pane_item[i].style.display = 'none';
  }

  menu[n].classList.add('active');
  pane_item[n].style.display = 'block';
}

const sideNav = document.getElementById('left');
function dropSideNav() {
  sideNav.classList.add('responsive');
}
function closeSideNav() {
  sideNav.classList.remove('responsive');
}

// .................blogs................

const blogsArea = document.querySelector('#blogs-area');
db.collection('blogs').get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    renderBlogs(doc);
  });
}).catch((err) => {
  console.log(err.message);
});

function renderBlogs(doc) {
  const blog = document.createElement('tr');
  blog.setAttribute('tag', 'blog');
  blog.setAttribute('data-id', doc.id);

  const blogDate = document.createElement('td');
  blogDate.setAttribute('tag', 'blog-date');

  const blogTitle = document.createElement('td');
  blogTitle.setAttribute('tag', 'blog-title');

  const blogAuthor = document.createElement('td');
  blogAuthor.setAttribute('tag', 'blog-author');

  const blogBtns = document.createElement('td');
  blogBtns.setAttribute('tag', 'blog-btns');

  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'one');
  editBtn.setAttribute('data-id', doc.id);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'two');
  deleteBtn.setAttribute('data-id', doc.id);

  blogDate.textContent = doc.data().time;
  // blogDate.textContent= moment(doc.data().time).format("DD-MM-YYYY h:mm:ss");
  blogTitle.textContent = doc.data().title;
  blogAuthor.textContent = doc.data().Author;

  editBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';

  blogBtns.appendChild(editBtn);
  blogBtns.appendChild(deleteBtn);

  blog.appendChild(blogDate);
  blog.appendChild(blogTitle);
  blog.appendChild(blogAuthor);
  blog.appendChild(blogBtns);

  blogsArea.appendChild(blog);

  auth.onAuthStateChanged((user) => {
    if (user) {
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.target.getAttribute('data-id');
        console.log(id);
        db.collection('blogs').doc(id).delete();
        alert('Blog Deleted successfully!');
      });

      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.target.getAttribute('data-id');
        console.log(id);
        alert('Your are being redirected');

        location.replace(`edit-blog.html?${id}`);
      });
    } else if (editBtn.addEventListener('click', () => { alert('please login to edit'); }) || deleteBtn.addEventListener('click', () => { alert('please login to delete'); })) {
      console.log('user logged out', user);
    }
  });
}

// getting users

function getUsers() {
  const table = document.getElementById('users');

  db.collection('users').get().then((users) => {
    users.forEach((use) => {
      table.innerHTML += `
    <tr>
      
      <td>${use.data().names}</td>
      <td>${use.data().email}</td>
      
    </tr>
      `;
    });
  });
}

getUsers();
// admin.auth().getUser(uid)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully fetched user data:', userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log('Error fetching user data:', error);
//   });
