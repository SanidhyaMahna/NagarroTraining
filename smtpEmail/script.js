function sendMail() {   
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var msg=document.getElementById("msg").value;
    var body="<span align='center'>A Message From Sanidhya's smtp site : "+name +"<br><br>Email : "+email+"<br><br>Phone Number : " +phone+"<br><br>Message : "+msg;

    Email.send({
   
        Host : "smtp.elasticemail.com",
        Username : "sandymahna@gmail.com",
        Password : "61764E83E6871501BF515D9E683D3EE9A424",
        To : `sanidhyaitmornigbvp@gmail.com,${email}`,
        From : "sanidhyaitmornigbvp@gmail.com",
        Subject : "Email from "+ name,
        Body : body,
        Cc : email,
    }).then(
    message => alert(message)
    );
}