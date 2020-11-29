// var bt = document.getElementById("myform");
// bt.onsubmit = sendEnquiry;

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.visibility='hidden';
    error_message.style.padding = "10px";
    
    var text;
    if(name.length ==""){
      error_message.style.visibility='visible';
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
     
      setTimeout(() => {
        text = '';
      }, 9000);
      return false;
     
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      error_message.style.visibility='visible';
      text = "Please Enter valid Email";
      error_message.style.visibility = 'visible';
        // check.innerHTML = 'email must be valid';
      error_message.innerHTML = text;
      setTimeout(() => {
        p.innerHTML = '';
      }, 9000);
      return false;
      
    }
    if(message.length <= 20){
      error_message.style.visibility='visible';
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      setTimeout(() => {
        p.innerHTML = '';
      }, 9000);
      return false;
    }  else{
      return true;
    }
      

}

function sendEnquiry(){

  var today= new Date();

  let arraymonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var msg_date= arraymonths[today.getMonth()]+' '+ today.getDay()+'  '+today.getFullYear()+'     '+ today.getHours()+':'+today.getMinutes();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let form = document.getElementById('myform');
  
  myform.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    if (validate()){
 db.collection('enquiries').doc().set({
    name: name,
    email: email,
    message: message,
    date: msg_date
  }).then(()=>{
    form.reset();
    alert("An enquiry sent successfully")

  }).catch((error)=>{
    alert(error)
  })

}
});
}

    


function getEnquiries(){
  
  let table = document.getElementById('inquiryTable');
  
  db.collection('enquiries').get().then((enquiries)=>{
    enquiries.forEach(enquiry => {
      table.innerHTML += `
    <tr class="tb">
      
      <td>${enquiry.data().message.slice(0,15)+"..."}</td>
      <td>${enquiry.data().name}</td>
      <td>${enquiry.data().date}</td>
    </tr>
      `
    });
  })
}
getEnquiries();