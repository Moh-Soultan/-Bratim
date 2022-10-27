var a = 8;
var b = 4;
var x = a * b; 


  if (a > b) {
    console.log('Correct');
  } else{
    console.log('Not Correct')
  }


    // second example 

    var password = 'abdul1';
    var confirmPassword = 'abdul2';
    

if (password != confirmPassword) {
    console.log('Password Match.. Hurrayy!!!!');
}   else{
    console.log('Confirm Password again');
}



    // Form Validation 
    function validateForm() {

    // getting fullname
    var fullname = document.getElementById('Name').value;
    
    // getting Phone-Number
    var phone = document.getElementById('Phone-Number').value;

    // getting Email-Address
    var email = document.getElementById('Email-Address').value;

    // getting Message 
    var message = document.getElementById('Message').value; 
    
    // geting successMsg
    var error = document.getElementById('errorMsg');

     // geting successMsg
     var success = document.getElementById('successMsg');



      if (fullname =="" && phone=="" && email =="" && message =="") {
        error.innerHTML  = "Please Fill in All Required field";
        return false;
        }

         if(fullname =="") {
        error.innerHTML = "Please Fill in the Name field";
        return false;
         }
    
          if(phone =="") {
        error.innerHTML = "Please Fill in the Phone-Number field";
        return false;
         }
    
         if(email =="") {
          error.innerHTML = "Please Fill in the Email-Address field";
        return false;
        }
 
        if(message =="") {
        error.innerHTML = "Please Fill in the Messaage field";
        return false;
        }

         else{
        success.innerHTML = "Congratulations All Validations Passed!!";

   
        }
    
   
}

