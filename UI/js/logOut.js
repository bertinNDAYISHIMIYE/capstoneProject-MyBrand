
//log out method
//listen for auth status changes
auth.onAuthStateChanged(user =>{
    if (user){
        console.log("user logged in", user);
    } else{
        console.log("user logged out");
        //redirecting to sign in 
        window.location.href = "../html/signin.html";
    }
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then;
   
}); 