
const checkLength = (input,min) =>{
    if(input.value.trim().lenght<min){
        showError(input, `${input.id} should be atleast ${min} characters`);

    } else{
        removeError(input);
        return true;
    }
}
 
const showError = (input,message) =>{
    if(message=="title is not valid"){
        const input_error= input.parentElement;
        input_error.classList='col-75 error';
        const errorMessage = input_error.querySelector('h5');
        errorMessage.inneHTML = message;
    }
}

const removeError = (input) =>{
    const input_error = input.parentElement;
    input_error.classList = 'col-75';
}




var today= new Date();

  let arraymonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var msg_date= arraymonths[today.getMonth()]+' '+ today.getDay()+'  '+today.getFullYear()+'     '+ today.getHours()+':'+today.getMinutes();
const createBlogForm = document.querySelector('#blogform');
const Title = document.querySelector('#title');
const author = document.querySelector('#author');
const description = document.querySelector('#description');
const blogImage = document.querySelector('#fileimage');
createBlogForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(checkLength(Title,5) && checkLength(description,100)){
        
        const imageFile = blogImage.files[0];
        const storageRef = firebase.storage().ref(`post_images/${imageFile.name}`);
        const uploadImage = storageRef.put(imageFile);
        uploadImage.snapshot.ref.getDownloadURL().then((downloadURL)=>{
            console.log(downloadURL);

           db.collection('blogs').add({
              image: downloadURL,
              title: Title.value,
              Author: author.value,
              content: description.value,
              
              time: msg_date,
            //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
           }).then(()=>{
                createBlogForm.reset();
                location.href = './blogpage.html'
            }).catch(error=>{
                console.log(error);
            });
        });
    }
});