function signUp() {
    confirm('Are you sure you want to submit this form?');
    let user = {};
   user.name;
 }


function submitInfo(){
    var firstName= '';
    var lastName= '';
    var email= '';
    var password= '';

    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    console. log('first Name:' + firstName);
    console. log('Last Name:' + lastName);
    console. log('Email:' + email);
    console. log('password:' + password);

   if (firstName ==''|| lastName == '' || email =='' || password ==''){
        alert('Input First Name');
 }else{  
  alert('form has been submitted');
}

}
